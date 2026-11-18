"use strict";

// =====================================
// 1. PRODUCT CATALOGUE
// All prices are sample Nigerian Naira prices.
// =====================================

const products = [
    // FABRICS AND CLOTHING

    {
        id: 1,
        name: "Beautiful Ankara Fabric",
        category: "fabrics",
        description: "Colourful African print fabric for standout outfits.",
        price: 18500,
        oldPrice: 23000,
        image: "images/cotonou-fabrics.jpg",
        badge: "BESTSELLER"
    },

    {
        id: 2,
        name: "Luxury Lace Fabric",
        category: "fabrics",
        description: "Elegant lace for celebrations and special occasions.",
        price: 25000,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 3,
        name: "Premium Chiffon Fabric",
        category: "fabrics",
        description: "Lightweight chiffon for flowing, graceful outfits.",
        price: 15000,
        image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 4,
        name: "Elegant Women's Gown",
        category: "clothes",
        description: "A graceful statement gown for special moments.",
        price: 32000,
        oldPrice: 40000,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85",
        badge: "20% OFF"
    },

    {
        id: 5,
        name: "Classic Denim Jeans",
        category: "clothes",
        description: "An easy wardrobe essential for everyday style.",
        price: 22000,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 6,
        name: "Fashion Casual Top",
        category: "clothes",
        description: "A versatile top for relaxed, polished outfits.",
        price: 12500,
        image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=800&q=85"
    },


    // SHOES

    {
        id: 7,
        name: "Classic Red Sneakers",
        category: "shoes",
        description: "Comfortable sneakers with a confident finish.",
        price: 35000,
        oldPrice: 43000,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
        badge: "POPULAR"
    },

    {
        id: 8,
        name: "Elegant Women's Heels",
        category: "shoes",
        description: "A refined pair for evenings and celebrations.",
        price: 28000,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 9,
        name: "Fashion Sandals",
        category: "shoes",
        description: "Stylish sandals made for easy outings.",
        price: 18000,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=85"
    },


    // COSMETICS

    {
        id: 10,
        name: "Luxury Lipstick",
        category: "cosmetics",
        description: "A rich colour to complete your beauty routine.",
        price: 8500,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 11,
        name: "Beauty Foundation",
        category: "cosmetics",
        description: "A smooth everyday base for your makeup look.",
        price: 12000,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 12,
        name: "Skincare Essentials",
        category: "cosmetics",
        description: "Daily skincare favourites for a fresh routine.",
        price: 15000,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85"
    },


    // ACCESSORIES

    {
        id: 13,
        name: "Luxury Handbag",
        category: "accessories",
        description: "A timeless handbag to elevate your look.",
        price: 28000,
        oldPrice: 35000,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85",
        badge: "STYLE PICK"
    },

    {
        id: 14,
        name: "Classic Wristwatch",
        category: "accessories",
        description: "A clean, classic watch for everyday elegance.",
        price: 22000,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 15,
        name: "Beautiful Earrings",
        category: "accessories",
        description: "Elegant earrings for a polished finish.",
        price: 7500,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=85"
    },


    // MORE AFRICAN FABRICS

    {
        id: 16,
        name: "Ankara Market Collection",
        category: "fabrics",
        description: "African wax prints with bold, colourful patterns.",
        price: 18500,
        image: "images/orange-african-print.jpg"
    },

    {
        id: 17,
        name: "Cotonou Heritage Ankara",
        category: "fabrics",
        description: "A vibrant textile selection for creative designs.",
        price: 22000,
        image: "images/cotonou-fabrics.jpg"
    },

    {
        id: 18,
        name: "Orange and Black African Print",
        category: "fabrics",
        description: "A striking print for modern African fashion.",
        price: 19500,
        image: "images/orange-african-print.jpg"
    },

    {
        id: 19,
        name: "Multicolour Geometric Textile",
        category: "fabrics",
        description: "Geometric motifs with a bright modern finish.",
        price: 21000,
        image: "images/geometric-textile.jpg"
    },

    {
        id: 20,
        name: "Colourful Cotton Fabric",
        category: "fabrics",
        description: "A beautiful cotton selection for designers.",
        price: 15000,
        image: "images/colourful-fabric.jpg"
    },

    {
        id: 21,
        name: "Premium Fabric Rolls",
        category: "fabrics",
        description: "A beautiful selection for your next creation.",
        price: 25000,
        image: "images/fabric-rolls.jpg"
    },


    // NEW ARRIVALS

    {
        id: 22,
        name: "Men's Heritage Kaftan",
        category: "clothes",
        description: "A smart traditional look with refined details.",
        price: 38000,
        oldPrice: 46000,
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=85",
        badge: "NEW ARRIVAL"
    },

    {
        id: 23,
        name: "Ankara Two-Piece Set",
        category: "clothes",
        description: "A coordinated African-inspired outfit with flair.",
        price: 29500,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85",
        badge: "NEW ARRIVAL"
    },

    {
        id: 24,
        name: "Tailored Everyday Blazer",
        category: "clothes",
        description: "A versatile layer for workdays and weekends.",
        price: 34000,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=85",
        badge: "NEW ARRIVAL"
    },

    {
        id: 25,
        name: "Leather Loafers",
        category: "shoes",
        description: "A polished staple for smart casual dressing.",
        price: 26500,
        oldPrice: 32000,
        image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=800&q=85",
        badge: "NEW ARRIVAL"
    },

    {
        id: 26,
        name: "Everyday Crossbody Bag",
        category: "accessories",
        description: "A compact bag for days when you are on the move.",
        price: 24000,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=85",
        badge: "NEW ARRIVAL"
    },

    {
        id: 27,
        name: "Gold-Tone Jewellery Set",
        category: "accessories",
        description: "A coordinated set for a little extra sparkle.",
        price: 16500,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=85",
        badge: "NEW ARRIVAL"
    },

    {
        id: 28,
        name: "Modern Classic Sunglasses",
        category: "accessories",
        description: "An easy finishing touch for sunny days.",
        price: 11000,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=85",
        badge: "NEW ARRIVAL"
    },

    {
        id: 29,
        name: "Lip Gloss Collection",
        category: "cosmetics",
        description: "A versatile gloss collection for every mood.",
        price: 9500,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=85",
        badge: "NEW ARRIVAL"
    },

    {
        id: 30,
        name: "Body Care Gift Set",
        category: "cosmetics",
        description: "A thoughtful collection for a self-care moment.",
        price: 18500,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85",
        badge: "NEW ARRIVAL"
    },

    {
        id: 31,
        name: "Decorative Cushion Pair",
        category: "home",
        description: "Soft accent cushions to refresh your space.",
        price: 14500,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85",
        badge: "NEW ARRIVAL"
    },

    {
        id: 32,
        name: "Minimal Ceramic Vase",
        category: "home",
        description: "A simple decorative piece for shelves and tables.",
        price: 12500,
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=85",
        badge: "NEW ARRIVAL"
    },

    {
        id: 33,
        name: "Woven Storage Basket",
        category: "home",
        description: "A natural-texture accent for an organised home.",
        price: 17000,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85",
        badge: "NEW ARRIVAL"
    },

];


// =====================================
// PERSISTENT SHOPPING CART
// =====================================

function readCart() {

    try {

        const savedCart = JSON.parse(
            localStorage.getItem("stylehubCart") || "[]"
        );

        if (!Array.isArray(savedCart)) {
            return [];
        }

        return savedCart.map(function(item) {

            const product = products.find(function(product) {
                return product.id === Number(item.id);
            });

            const quantity = Number(item.qty);

            if (
                !product ||
                !Number.isSafeInteger(quantity) ||
                quantity < 1 ||
                quantity > 99
            ) {
                return null;
            }

            return {
                id: product.id,
                name: product.name,
                price: product.price,
                qty: quantity
            };

        }).filter(Boolean);

    } catch (error) {

        console.error("Could not load shopping cart:", error);

        return [];

    }

}


function saveCart() {

    try {

        localStorage.setItem(
            "stylehubCart",
            JSON.stringify(cart)
        );

        return true;

    } catch (error) {

        console.error("Could not save shopping cart:", error);

        return false;

    }

}


// Load saved shopping cart when website opens.

let cart = readCart();

let category = "all";

let wishlist = readWishlist();

let reviews = readReviews();

const $ = (id) => document.getElementById(id);

// =====================================
// NAIRA AND DOLLAR PRICING
// =====================================

const USD_TO_NGN = 1355.80;

const formatNaira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
});

const formatDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const money = (amount) => {
    const value = Number(amount);

    if (!Number.isFinite(value)) {
        return formatNaira.format(0);
    }

    return `${formatNaira.format(value)} (≈ ${formatDollar.format(value / USD_TO_NGN)})`;
};


function readWishlist() {

    try {

        const ids = JSON.parse(
            localStorage.getItem("stylehubWishlist") || "[]"
        );

        return products.filter((product) =>
            Array.isArray(ids) && ids.includes(product.id)
        );

    } catch (error) {

        return [];

    }

}



function readReviews() {

    try {

        const saved = JSON.parse(
            localStorage.getItem("stylehubProductReviews") || "{}"
        );

        return saved &&
            typeof saved === "object" &&
            !Array.isArray(saved)
                ? saved
                : {};

    } catch (error) {

        return {};

    }

}



function saveReviews() {

    try {

        localStorage.setItem(
            "stylehubProductReviews",
            JSON.stringify(reviews)
        );

        return true;

    } catch (error) {

        return false;

    }

}



function getProductReviews(productId) {

    const list = reviews[productId];

    return Array.isArray(list) ? list : [];

}



function getRatingDetails(productId) {

    const list = getProductReviews(productId);

    if (!list.length) {

        return {
            count: 0,
            average: 0,
            stars: "☆☆☆☆☆"
        };

    }

    const average = list.reduce(
        (sum, review) => sum + Number(review.rating || 0),
        0
    ) / list.length;

    const filled = Math.round(average);

    return {
        count: list.length,
        average,
        stars: "★".repeat(filled) + "☆".repeat(5 - filled)
    };

}



function createRatingBadge(productId) {

    const details = getRatingDetails(productId);

    const badge = document.createElement("p");

    badge.className = "rating-summary";

    if (!details.count) {

        badge.textContent = "☆☆☆☆☆ No reviews yet";

    } else {

        const stars = document.createElement("span");

        stars.className = "rating-stars";

        stars.textContent = details.stars;

        badge.append(
            stars,
            document.createTextNode(
                ` ${details.average.toFixed(1)}/5 (${details.count})`
            )
        );

    }

    return badge;

}



// IMAGE FALLBACK

function fallback(label) {

    const safeLabel = String(label).replace(/[<>&"']/g, "");

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="600"
             height="600"
             viewBox="0 0 600 600">

            <defs>

                <linearGradient id="bg" x2="1" y2="1">
                    <stop stop-color="#f2e7d5"/>
                    <stop offset="1" stop-color="#d7c1a0"/>
                </linearGradient>

                <pattern id="p"
                    width="70"
                    height="70"
                    patternUnits="userSpaceOnUse">

                    <rect
                        width="70"
                        height="70"
                        fill="#283a37"
                    />

                    <path
                        d="M0 35L35 0 70 35 35 70Z"
                        fill="#cda04c"
                    />

                    <circle
                        cx="35"
                        cy="35"
                        r="9"
                        fill="#a94b35"
                    />

                </pattern>

            </defs>

            <rect
                width="600"
                height="600"
                fill="url(#bg)"
            />

            <path
                d="M80 380L300 190 520 380 470 495H130Z"
                fill="url(#p)"
            />

            <text
                x="300"
                y="545"
                text-anchor="middle"
                font-family="Georgia,serif"
                font-size="25"
                fill="#2a241c"
            >
                STYLEHUB
            </text>

            <text
                x="300"
                y="578"
                text-anchor="middle"
                font-family="Arial,sans-serif"
                font-size="18"
                fill="#554735"
            >
                ${safeLabel}
            </text>

        </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg);

}



function protectImage(image, label) {

    image.addEventListener("error", () => {

        if (image.dataset.fallback === "yes") {
            return;
        }

        image.dataset.fallback = "yes";

        image.src = fallback(label);

    });

}



function makeButton(label, className, handler) {

    const button = document.createElement("button");

    button.type = "button";

    button.className = className;

    button.textContent = label;

    button.addEventListener("click", handler);

    return button;

}



// =====================================
// 3. PRODUCT CARDS AND COLLECTION RAILS
// =====================================

function createProductCard(product) {

    const card = document.createElement("article");

    card.className = "product-card";


    // PRODUCT IMAGE

    const media = document.createElement("div");

    media.className = "product-media";

    const image = document.createElement("img");

    image.src = product.image;

    image.alt = product.name;

    image.loading = "lazy";

    protectImage(image, product.name);

    media.append(image);


    // PRODUCT BADGE

    if (product.badge || product.oldPrice) {

        const badge = document.createElement("span");

        badge.className =
            "product-badge" +
            (product.badge === "NEW ARRIVAL" ? " new-badge" : "");

        badge.textContent = product.badge ||
            `${Math.round((1 - product.price / product.oldPrice) * 100)}% OFF`;

        media.append(badge);

    }


    // WISHLIST HEART

    const saved = wishlist.some(
        (item) => item.id === product.id
    );

    const heart = makeButton(
        saved ? "♥" : "♡",
        `heart-button${saved ? " is-saved" : ""}`,
        () => toggleWish(product)
    );

    heart.setAttribute(
        "aria-label",
        saved ? "Remove from wishlist" : "Add to wishlist"
    );

    media.append(heart);


    // PRODUCT INFORMATION

    const info = document.createElement("div");

    info.className = "product-info";


    const name = document.createElement("h3");

    name.textContent = product.name;


    const description = document.createElement("p");

    description.className = "product-description";

    description.textContent = product.description;


    // PRICE

    const priceLine = document.createElement("div");

    priceLine.className = "price-line";


    const price = document.createElement("strong");

    price.textContent = money(product.price);

    priceLine.append(price);


    if (product.oldPrice) {

        const oldPrice = document.createElement("span");

        oldPrice.className = "old-price";

        oldPrice.textContent = money(product.oldPrice);

        priceLine.append(oldPrice);

    }


    // PRODUCT BUTTONS

    const actions = document.createElement("div");

    actions.className = "product-actions";

    actions.append(

        makeButton(
            "Details",
            "details-button",
            () => openDetails(product)
        ),

        makeButton(
            "Add to bag",
            "cart-button",
            () => addCart(product)
        )

    );


    info.append(
        name,
        description,
        createRatingBadge(product.id),
        priceLine,
        actions
    );

    card.append(media, info);

    return card;

}



// DISPLAY PRODUCTS IN HORIZONTAL ROWS

function renderProductRail(elementId, productIds) {

    const rail = $(elementId);

    if (!rail) return;

    rail.innerHTML = "";

    productIds
        .map((id) => products.find(
            (product) => product.id === id
        ))
        .filter(Boolean)
        .forEach((product) =>
            rail.append(createProductCard(product))
        );

}



// COLLECTION SECTIONS

function renderCollections() {

    renderProductRail(
        "deal-grid",
        [1, 4, 7, 13, 22, 25, 26]
    );

    renderProductRail(
        "featured-grid",
        [2, 5, 8, 14, 17, 23, 27]
    );

    renderProductRail(
        "trending-grid",
        [1, 4, 7, 13, 18, 22, 28]
    );

    renderProductRail(
        "new-arrivals-grid",
        [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
    );

}



// =====================================
// 4. PRODUCT SEARCH AND FILTERING
// =====================================

function renderProducts() {

    const grid = $("product-grid");

    if (!grid) return;


    const searchTerm = (
        $("search-input")?.value || ""
    ).trim().toLowerCase();


    const matches = products.filter((product) => {

        const correctCategory =
            category === "all" ||
            product.category === category;

        const searchable =
            `${product.name} ${product.description} ${product.category}`
            .toLowerCase();

        return correctCategory &&
            searchable.includes(searchTerm);

    });


    // SORT PRODUCTS

    const sortMode = $("sort-select")?.value || "featured";

    if (sortMode === "price-low") {
        matches.sort((a, b) => a.price - b.price);
    }

    if (sortMode === "price-high") {
        matches.sort((a, b) => b.price - a.price);
    }

    if (sortMode === "name-az") {
        matches.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    if (sortMode === "name-za") {
        matches.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }


    grid.innerHTML = "";


    // CATEGORY MESSAGE

    if ($("active-category")) {

        const categoryLabels = {

            all: "all products",

            fabrics: "fabrics",

            clothes: "clothing",

            shoes: "shoes",

            cosmetics: "beauty products",

            accessories: "bags & accessories",

            home: "home & living"

        };

        $("active-category").textContent =
            `Showing ${categoryLabels[category] || category}`;

    }


    // SEARCH MESSAGE

    if ($("search-message")) {

        $("search-message").textContent = matches.length

            ? (
                searchTerm
                    ? `${matches.length} product(s) found.`
                    : `${matches.length} products in this collection.`
            )

            : "No products found. Try another search or category.";

    }


    matches.forEach((product) => {

        grid.append(createProductCard(product));

    });

}



// SELECT A CATEGORY

function selectCategory(selectedCategory) {

    category = selectedCategory || "all";

    if ($("search-input")) {
        $("search-input").value = "";
    }

    renderProducts();

    const shop = $("shop");

    if (shop) {

        shop.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}



// =====================================
// 5. SHOPPING BAG
// =====================================

function addCart(product) {

    const existing = cart.find(
        (item) => item.id === product.id
    );

    if (existing) {

        existing.qty += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            qty: 1

        });

    }


    if ($("cart-message")) {

        $("cart-message").textContent =
            `${product.name} added to your bag.`;

    }

    renderCart();

}



// CHANGE PRODUCT QUANTITY

function changeQuantity(productId, change) {

    const item = cart.find(
        (cartItem) => cartItem.id === productId
    );

    if (!item) return;

    item.qty += change;

    if (item.qty < 1) {

        cart = cart.filter(
            (cartItem) => cartItem.id !== productId
        );

    }

    renderCart();

}



// DISPLAY SHOPPING CART

function renderCart() {
    // save the current cart before displaying it.
    saveCart();
    const list = $("cart-items");

    if (!list) return;

    list.innerHTML = "";


    const quantity = cart.reduce(
        (sum, item) => sum + item.qty,
        0
    );

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );


    if ($("cart-count")) {

        $("cart-count").textContent = quantity;

    }

    if ($("cart-total")) {

        $("cart-total").textContent = money(total);

    }


    // EMPTY CART MESSAGE

    if (!cart.length) {

        const empty = document.createElement("li");

        empty.textContent =
            "Your shopping bag is empty. Explore the collection to find something you love.";

        empty.className = "empty-cart";

        list.append(empty);

    }


    // CART PRODUCTS

    cart.forEach((item) => {

        const row = document.createElement("li");

        row.className = "cart-item";


        const details = document.createElement("div");

        details.className = "cart-item-details";


        const name = document.createElement("b");

        name.textContent = item.name;


        const price = document.createElement("span");

        price.textContent =
            `${money(item.price)} each · Subtotal ${money(item.price * item.qty)}`;


        // QUANTITY BUTTONS

        const controls = document.createElement("div");

        controls.className = "quantity-controls";


        const minus = makeButton(
            "−",
            "",
            () => changeQuantity(item.id, -1)
        );


        const count = document.createElement("span");

        count.textContent = item.qty;


        const plus = makeButton(
            "+",
            "",
            () => changeQuantity(item.id, 1)
        );


        controls.append(minus, count, plus);

        details.append(name, price, controls);


        // REMOVE PRODUCT

        const remove = makeButton(
            "Remove",
            "remove-button",
            () => {

                cart = cart.filter(
                    (cartItem) => cartItem.id !== item.id
                );

                renderCart();

            }
        );


        row.append(details, remove);

        list.append(row);

    });


    renderSummary();

}



// =====================================
// 6. WISHLIST
// =====================================

function toggleWish(product) {

    const exists = wishlist.some(
        (item) => item.id === product.id
    );


    wishlist = exists

        ? wishlist.filter(
            (item) => item.id !== product.id
        )

        : [...wishlist, product];


    try {

        localStorage.setItem(
            "stylehubWishlist",
            JSON.stringify(
                wishlist.map((item) => item.id)
            )
        );

    } catch (error) {

        // Wishlist still works during this browser session.

    }


    renderWishlist();

    renderProducts();

    renderCollections();

}



// DISPLAY WISHLIST

function renderWishlist() {

    const grid = $("wishlist-items");

    if (!grid) return;


    if ($("wishlist-count")) {

        $("wishlist-count").textContent = wishlist.length;

    }


    if ($("wishlist-message")) {

        $("wishlist-message").textContent = wishlist.length

            ? `${wishlist.length} saved product(s). Your favourites are gathered here.`

            : "Your wishlist is empty. Tap the heart on a product to save it here.";

    }


    grid.innerHTML = "";

    wishlist.forEach((product) => {

        grid.append(createProductCard(product));

    });

}



// =====================================
// 7. CHECKOUT SUMMARY
// DEMO ONLY - NO REAL PAYMENT
// =====================================

function renderSummary() {

    const box = $("checkout-summary");

    if (!box) return;

    box.innerHTML = "";


    if (!cart.length) {

        box.textContent = "Your cart is empty.";

        return;

    }


    const list = document.createElement("ul");


    cart.forEach((item) => {

        const row = document.createElement("li");

        row.textContent =
            `${item.name} × ${item.qty} — ${money(item.price * item.qty)}`;

        list.append(row);

    });


    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );


    const totalRow = document.createElement("div");

    totalRow.className = "checkout-summary-total";

    totalRow.textContent = `Total: ${money(total)}`;


    box.append(list, totalRow);

}



// =====================================
// 8. PRODUCT DETAILS AND REVIEWS
// =====================================


// DISPLAY CUSTOMER REVIEWS

function appendReviewList(container, product) {

    const list = getProductReviews(product.id)
        .slice()
        .sort((a, b) =>
            new Date(b.date).getTime() -
            new Date(a.date).getTime()
        );


    if (!list.length) {

        const empty = document.createElement("p");

        empty.className = "no-reviews";

        empty.textContent =
            "No reviews yet. Be the first to review this product.";

        container.append(empty);

        return;

    }


    list.forEach((review) => {

        const item = document.createElement("article");

        item.className = "review-item";


        const heading = document.createElement("div");

        heading.className = "review-heading";


        const name = document.createElement("strong");

        name.textContent = review.name;


        const stars = document.createElement("span");

        stars.className = "rating-stars";

        stars.textContent =
            "★".repeat(Number(review.rating)) +
            "☆".repeat(5 - Number(review.rating));


        const date = document.createElement("small");

        const parsed = new Date(review.date);

        date.textContent = Number.isNaN(parsed.getTime())

            ? ""

            : parsed.toLocaleDateString(
                "en-NG",
                {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }
            );


        heading.append(name, stars, date);


        const comment = document.createElement("p");

        comment.textContent = review.comment;


        item.append(heading, comment);

        container.append(item);

    });

}



// CREATE REVIEW SECTION

function createReviewsSection(product) {

    const section = document.createElement("section");

    section.className = "reviews-section";


    const title = document.createElement("h3");

    title.textContent = "Customer reviews";


    const rating = createRatingBadge(product.id);

    rating.classList.add("reviews-overview");


    const list = document.createElement("div");

    list.className = "review-list";

    appendReviewList(list, product);


    section.append(title, rating, list);


    // REVIEW FORM

    const form = document.createElement("form");

    form.className = "review-form";


    const formTitle = document.createElement("h4");

    formTitle.textContent = "Write a review";


    // CUSTOMER NAME

    const nameLabel = document.createElement("label");

    nameLabel.textContent = "Your name";


    const nameInput = document.createElement("input");

    nameInput.name = "reviewerName";

    nameInput.maxLength = 40;

    nameInput.required = true;

    nameInput.placeholder = "Enter your name";

    nameLabel.append(nameInput);


    // RATING

    const ratingLabel = document.createElement("label");

    ratingLabel.textContent = "Your rating";


    const ratingSelect = document.createElement("select");

    ratingSelect.name = "rating";

    ratingSelect.required = true;


    [5, 4, 3, 2, 1].forEach((value) => {

        const option = document.createElement("option");

        option.value = value;

        option.textContent =
            `${value} star${value === 1 ? "" : "s"}`;

        ratingSelect.append(option);

    });


    ratingLabel.append(ratingSelect);


    // REVIEW COMMENT

    const commentLabel = document.createElement("label");

    commentLabel.textContent = "Your review";


    const commentInput = document.createElement("textarea");

    commentInput.name = "reviewComment";

    commentInput.rows = 3;

    commentInput.maxLength = 500;

    commentInput.required = true;

    commentInput.placeholder =
        "Share what you think about this product...";

    commentLabel.append(commentInput);


    // STATUS MESSAGE

    const status = document.createElement("p");

    status.className = "review-status";


    const submit = document.createElement("button");

    submit.type = "submit";

    submit.className = "cart-button";

    submit.textContent = "Submit review";


    form.append(
        formTitle,
        nameLabel,
        ratingLabel,
        commentLabel,
        submit,
        status
    );


    // SUBMIT REVIEW

    form.addEventListener("submit", (event) => {

        event.preventDefault();


        const reviewerName = nameInput.value.trim();

        const comment = commentInput.value.trim();

        const selectedRating = Number(ratingSelect.value);


        if (
            !reviewerName ||
            !comment ||
            !Number.isInteger(selectedRating) ||
            selectedRating < 1 ||
            selectedRating > 5
        ) {

            status.textContent =
                "Please enter your name, choose a rating and write a review.";

            return;

        }


        const savedReviews = getProductReviews(product.id).slice();


        savedReviews.push({

            name: reviewerName,

            rating: selectedRating,

            comment,

            date: new Date().toISOString()

        });


        reviews[product.id] = savedReviews;


        const saved = saveReviews();


        openDetails(product);

        renderProducts();

        renderWishlist();

        renderCollections();


        if (!saved) {

            const message = $("product-modal-body")
                ?.querySelector(".review-status");

            if (message) {

                message.textContent =
                    "Your review is visible for this session, but browser storage is unavailable.";

            }

        }

    });


    section.append(form);

    return section;

}



// OPEN PRODUCT DETAILS

function openDetails(product) {

    const modal = $("product-modal");

    const body = $("product-modal-body");

    if (!modal || !body) return;


    body.innerHTML = "";


    const layout = document.createElement("div");

    layout.className = "modal-layout";


    // PRODUCT IMAGE

    const image = document.createElement("img");

    image.className = "modal-image";

    image.src = product.image;

    image.alt = product.name;

    protectImage(image, product.name);


    // PRODUCT INFORMATION

    const info = document.createElement("div");

    info.className = "modal-info";


    const categoryLabel = document.createElement("b");

    categoryLabel.className = "modal-category";

    categoryLabel.textContent = product.category;


    const name = document.createElement("h2");

    name.textContent = product.name;


    const description = document.createElement("p");

    description.textContent = product.description;


    const price = document.createElement("strong");

    price.className = "modal-price";

    price.textContent = money(product.price);


    // MODAL BUTTONS

    const actions = document.createElement("div");

    actions.className = "modal-actions";


    actions.append(

        makeButton(
            "Add to bag",
            "cart-button",
            () => {
                addCart(product);
                closeDetails();
            }
        ),

        makeButton(
            wishlist.some((item) => item.id === product.id)
                ? "♥ Saved"
                : "♡ Add to wishlist",

            "wishlist-button",

            () => {
                toggleWish(product);
                closeDetails();
            }
        )

    );


    info.append(
        categoryLabel,
        name,
        description,
        createRatingBadge(product.id),
        price,
        actions
    );


    layout.append(image, info);


    body.append(
        layout,
        createReviewsSection(product)
    );


    modal.classList.add("is-open");

    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

}



// CLOSE PRODUCT DETAILS

function closeDetails() {

    const modal = $("product-modal");

    if (!modal) return;

    modal.classList.remove("is-open");

    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}



// =====================================
// 9. START THE WEBSITE
// =====================================

function init() {


    // CATEGORY BUTTONS

    document.addEventListener("click", (event) => {

        const categoryLink = event.target.closest("[data-category]");

        if (!categoryLink) return;

        event.preventDefault();

        selectCategory(categoryLink.dataset.category);

    });
// =====================================
// STYLEHUB CUSTOMER ACCOUNT SYSTEM
// =====================================


// Show account section.

function showAccountSection() {

    const section = $("account-section");

    if (!section) return;

    section.hidden = !section.hidden;

    if (!section.hidden) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


// Display customer profile.

function displayCustomer(customer) {

    $("customer-profile").hidden = false;

    $("register-form").hidden = true;

    $("login-form").hidden = true;

    $("customer-name").textContent =
        "Customer: " + customer.fullName;

    $("customer-email").textContent =
        "Email: " + customer.email;

}


// Display registration and login forms.

function displayAccountForms() {

    $("customer-profile").hidden = true;

    $("register-form").hidden = false;

    $("login-form").hidden = false;

}


// Communicate with Python backend.

async function accountRequest(endpoint, data = null) {

    const options = {

        method: data ? "POST" : "GET",

        headers: {
            "Content-Type": "application/json"
        },

        credentials: "same-origin"

    };

    if (data) {

        options.body = JSON.stringify(data);

    }

    const response = await fetch(endpoint, options);

    const result = await response.json();

    if (!response.ok) {

        throw new Error(
            result.message || "Something went wrong."
        );

    }

    return result;

}


// =====================================
// REGISTER CUSTOMER
// =====================================

async function registerCustomer(event) {

    event.preventDefault();

    const form = event.currentTarget;

    const message = $("register-message");

    message.textContent = "Creating your account...";


    const customerData = {

        fullName: $("register-name").value.trim(),

        email: $("register-email").value.trim(),

        password: $("register-password").value

    };


    try {

        const result = await accountRequest(
            "/api/register",
            customerData
        );

        message.textContent = result.message;

        form.reset();

        displayCustomer(result.customer);

        $("account-status").textContent =
            "Welcome to STYLEHUB!";

    } catch (error) {

        message.textContent = error.message;

    }

}


// =====================================
// CUSTOMER LOGIN
// =====================================

async function loginCustomer(event) {

    event.preventDefault();

    const form = event.currentTarget;

    const message = $("login-message");

    message.textContent = "Logging in...";


    const loginData = {

        email: $("login-email").value.trim(),

        password: $("login-password").value

    };


    try {

        const result = await accountRequest(
            "/api/login",
            loginData
        );

        message.textContent = result.message;

        form.reset();

        displayCustomer(result.customer);

    } catch (error) {

        message.textContent = error.message;

    }

}


// =====================================
// CUSTOMER LOGOUT
// =====================================

async function logoutCustomer() {

    try {

        const result = await accountRequest(
            "/api/logout",
            {}
        );

        displayAccountForms();

        $("account-status").textContent =
            result.message;

        $("register-message").textContent = "";

        $("login-message").textContent = "";

    } catch (error) {

        $("account-status").textContent =
            error.message;

    }

}


// =====================================
// CHECK EXISTING CUSTOMER SESSION
// =====================================

async function checkCustomerSession() {

    try {

        const result = await accountRequest("/api/me");

        if (result.loggedIn) {

            displayCustomer(result.customer);

        } else {

            displayAccountForms();

        }

    } catch (error) {

        $("account-status").textContent =
            "Unable to connect to the account server.";

        displayAccountForms();

    }

}


// =====================================
// CONNECT ACCOUNT BUTTONS
// =====================================

document.addEventListener("DOMContentLoaded", function() {

    $("account-button")?.addEventListener(
        "click",
        showAccountSection
    );

    $("register-form")?.addEventListener(
        "submit",
        registerCustomer
    );

    $("login-form")?.addEventListener(
        "submit",
        loginCustomer
    );

    $("logout-button")?.addEventListener(
        "click",
        logoutCustomer
    );

    checkCustomerSession();

});


    // VIEW ALL PRODUCTS

    $("show-all-button")?.addEventListener("click", () => {

        selectCategory("all");

    });



    // SEARCH FORM

    $("search-form")?.addEventListener("submit", (event) => {

        event.preventDefault();

        renderProducts();

        $("shop")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });



    // LIVE SEARCH

    $("search-input")?.addEventListener("input", renderProducts);



    // SORT PRODUCTS

    $("sort-select")?.addEventListener("change", renderProducts);



    // CLOSE PRODUCT MODAL

    $("close-product-modal")?.addEventListener("click", closeDetails);

    document.querySelector("[data-close-modal]")
        ?.addEventListener("click", closeDetails);


    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeDetails();

        }

    });



    // IMAGE FALLBACKS

    document.querySelectorAll("img").forEach((image) => {

        if (image.id !== "hero-art") {

            protectImage(
                image,
                image.alt || "STYLEHUB collection"
            );

        }

    });



    // CHECKOUT FORM

    $("checkout-form")?.addEventListener("submit", (event) => {

        event.preventDefault();


        if (!cart.length) {

            $("checkout-message").textContent =
                "Your bag is empty. Add a product before checking out.";

            return;

        }


        const data = new FormData(event.currentTarget);


        const total = cart.reduce(
            (sum, item) => sum + item.price * item.qty,
            0
        );


        $("checkout-message").textContent =
            `Thank you, ${data.get("customerName")}. Your demo order total is ${money(total)}. No real payment was processed.`;

    });



    // BACK TO TOP

    $("back-to-top")?.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    window.addEventListener("scroll", () => {

        $("back-to-top")?.classList.toggle(
            "is-visible",
            window.scrollY > 550
        );

    });



    // INITIAL DISPLAY

    renderProducts();

    renderCollections();

    renderCart();

    renderWishlist();


    console.log(
        "STYLEHUB loaded:",
        products.length,
        "products"
    );

}



// START WHEN HTML IS READY

document.addEventListener("DOMContentLoaded", init);
