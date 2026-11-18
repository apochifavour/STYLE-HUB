import os
import sqlite3

from datetime import timedelta
from pathlib import Path

from flask import (
    Flask,
    jsonify,
    request,
    session,
    send_from_directory
)

from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)


# =========================================
# 1. APPLICATION SETTINGS
# =========================================

BASE_DIR = Path(__file__).resolve().parent

app = Flask(__name__)

app.config["SECRET_KEY"] = os.environ.get(
    "STYLEHUB_SECRET_KEY",
    "development-only-change-this-secret-before-deployment"
)

app.config["SESSION_COOKIE_HTTPONLY"] = True
app.config["SESSION_COOKIE_SAMESITE"] = "Lax"
app.config["SESSION_COOKIE_SECURE"] = False

app.config["PERMANENT_SESSION_LIFETIME"] = timedelta(days=7)


DATABASE = BASE_DIR / "stylehub.db"


# =========================================
# 2. DATABASE CONNECTION
# =========================================

def get_db():

    connection = sqlite3.connect(DATABASE)

    connection.row_factory = sqlite3.Row

    return connection


# =========================================
# 3. CREATE CUSTOMER DATABASE
# =========================================

def initialize_database():

    connection = get_db()

    connection.execute("""
        CREATE TABLE IF NOT EXISTS customers (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            full_name TEXT NOT NULL,

            email TEXT NOT NULL UNIQUE COLLATE NOCASE,

            password_hash TEXT NOT NULL,

            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

        )
    """)

    connection.commit()

    connection.close()


initialize_database()


# =========================================
# 4. WEBSITE PAGES AND STATIC FILES
# =========================================

@app.route("/")
def homepage():

    return send_from_directory(BASE_DIR, "index.html")


@app.route("/style.css")
def stylesheet():

    return send_from_directory(BASE_DIR, "style.css")


@app.route("/script.js")
def javascript():

    return send_from_directory(BASE_DIR, "script.js")


@app.route("/images/<path:filename>")
def product_images(filename):

    return send_from_directory(BASE_DIR / "images", filename)


# =========================================
# 5. CUSTOMER REGISTRATION
# =========================================

@app.route("/api/register", methods=["POST"])
def register_customer():

    data = request.get_json(silent=True) or {}

    full_name = str(data.get("fullName", "")).strip()

    email = str(data.get("email", "")).strip().lower()

    password = str(data.get("password", ""))


    # Validate customer information.

    if not full_name or not email or not password:

        return jsonify({
            "success": False,
            "message": "Please complete all registration fields."
        }), 400


    if len(full_name) > 100:

        return jsonify({
            "success": False,
            "message": "Your name is too long."
        }), 400


    if len(email) > 254 or "@" not in email:

        return jsonify({
            "success": False,
            "message": "Please enter a valid email address."
        }), 400


    if len(password) < 8 or len(password) > 128:

        return jsonify({
            "success": False,
            "message": "Password must contain between 8 and 128 characters."
        }), 400


    # Hash the password.

    password_hash = generate_password_hash(password)


    connection = get_db()

    try:

        connection.execute("""

            INSERT INTO customers (
                full_name,
                email,
                password_hash
            )

            VALUES (?, ?, ?)

        """, (
            full_name,
            email,
            password_hash
        ))

        connection.commit()


        customer = connection.execute("""

            SELECT id, full_name, email

            FROM customers

            WHERE email = ?

        """, (email,)).fetchone()


        # Start customer session.

        session.clear()

        session.permanent = True

        session["customer_id"] = customer["id"]


        return jsonify({

            "success": True,

            "message": "Your STYLEHUB account has been created successfully!",

            "customer": {

                "id": customer["id"],

                "fullName": customer["full_name"],

                "email": customer["email"]

            }

        }), 201


    except sqlite3.IntegrityError:

        return jsonify({

            "success": False,

            "message": "This email already has an account. Please log in."

        }), 409


    finally:

        connection.close()


# =========================================
# 6. CUSTOMER LOGIN
# =========================================

@app.route("/api/login", methods=["POST"])
def login_customer():

    data = request.get_json(silent=True) or {}

    email = str(data.get("email", "")).strip().lower()

    password = str(data.get("password", ""))


    if not email or not password:

        return jsonify({

            "success": False,

            "message": "Enter your email and password."

        }), 400


    connection = get_db()

    customer = connection.execute("""

        SELECT *

        FROM customers

        WHERE email = ?

    """, (email,)).fetchone()

    connection.close()


    if not customer or not check_password_hash(
        customer["password_hash"],
        password
    ):

        return jsonify({

            "success": False,

            "message": "Incorrect email or password."

        }), 401


    # Start a fresh session.

    session.clear()

    session.permanent = True

    session["customer_id"] = customer["id"]


    return jsonify({

        "success": True,

        "message": "Welcome back to STYLEHUB!",

        "customer": {

            "id": customer["id"],

            "fullName": customer["full_name"],

            "email": customer["email"]

        }

    })


# =========================================
# 7. CHECK LOGGED-IN CUSTOMER
# =========================================

@app.route("/api/me", methods=["GET"])
def current_customer():

    customer_id = session.get("customer_id")

    if not customer_id:

        return jsonify({

            "loggedIn": False

        })


    connection = get_db()

    customer = connection.execute("""

        SELECT id, full_name, email, created_at

        FROM customers

        WHERE id = ?

    """, (customer_id,)).fetchone()

    connection.close()


    if not customer:

        session.clear()

        return jsonify({

            "loggedIn": False

        })


    return jsonify({

        "loggedIn": True,

        "customer": {

            "id": customer["id"],

            "fullName": customer["full_name"],

            "email": customer["email"],

            "createdAt": customer["created_at"]

        }

    })


# =========================================
# 8. CUSTOMER LOGOUT
# =========================================

@app.route("/api/logout", methods=["POST"])
def logout_customer():

    session.clear()

    return jsonify({

        "success": True,

        "message": "You have successfully logged out."

    })


# =========================================
# 9. RUN STYLEHUB
# =========================================

if __name__ == "__main__":

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )