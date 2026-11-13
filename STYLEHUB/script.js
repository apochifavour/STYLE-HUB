"use strict";

// =====================================
// 1. PRODUCT INFORMATION
// =====================================

const products = [
    {
        id: 1,
        name: "Beautiful Ankara Fabric",
        category: "fabrics",
        description: "Colourful African print fabric for stylish outfits.",
        price: 18500,
        image: "https://images.pexels.com/photos/19026106/pexels-photo-19026106.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 2,
        name: "Luxury Lace Fabric",
        category: "fabrics",
        description: "Elegant lace fabric for weddings and celebrations.",
        price: 25000,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Premium Chiffon Fabric",
        category: "fabrics",
        description: "Lightweight chiffon fabric for beautiful outfits.",
        price: 15000,
        image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Elegant Women's Gown",
        category: "clothes",
        description: "A stylish gown for special occasions.",
        price: 32000,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Classic Denim Jeans",
        category: "clothes",
        description: "Comfortable jeans for everyday fashion.",
        price: 22000,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Fashion Casual Top",
        category: "clothes",
        description: "A fashionable top for casual occasions.",
        price: 12500,
        image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Classic Red Sneakers",
        category: "shoes",
        description: "Comfortable sneakers for everyday activities.",
        price: 35000,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Elegant Women's Heels",
        category: "shoes",
        description: "Beautiful heels for parties and special events.",
        price: 28000,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Fashion Sandals",
        category: "shoes",
        description: "Stylish sandals for comfortable outings.",
        price: 18000,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        name: "Luxury Lipstick",
        category: "cosmetics",
        description: "Beautiful lipstick for your makeup collection.",
        price: 8500,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "Beauty Foundation",
        category: "cosmetics",
        description: "Foundation for a smooth makeup finish.",
        price: 12000,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        name: "Skincare Essentials",
        category: "cosmetics",
        description: "Skincare products for your daily beauty routine.",
        price: 15000,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 13,
        name: "Luxury Handbag",
        category: "accessories",
        description: "A beautiful handbag to complete your outfit.",
        price: 28000,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 14,
        name: "Classic Wristwatch",
        category: "accessories",
        description: "A stylish wristwatch for everyday elegance.",
        price: 22000,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 15,
        name: "Beautiful Earrings",
        category: "accessories",
        description: "Elegant earrings for your fashion collection.",
        price: 7500,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
    }
];


// =====================================
// 2. SELECT HTML ELEMENTS
// =====================================

const productGrid = document.getElementById("product-grid");

const searchInput = document.getElementById("search-input");

const searchButton = document.getElementById("search-button");

const searchMessage = document.getElementById("search-message");

const activeCategory = document.getElementById("active-category");

const showAllButton = document.getElementById("show-all-button");

const cartCount = document.getElementById("cart-count");

const cartItems = document.getElementById("cart-items");

const cartTotal = document.getElementById("cart-total");

const cartMessage = document.getElementById("cart-message");

const checkoutForm = document.getElementById("checkout-form");

const checkoutSummary = document.getElementById("checkout-summary");

const checkoutMessage = document.getElementById("checkout-message");


// =====================================
// 3. CREATE THE SHOPPING CART
// =====================================

let cart = [];

let currentCategory = "all";


// =====================================
// 4. FORMAT NAIRA PRICES
// =====================================

function formatCurrency(amount) {

    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    }).format(amount);

}


// =====================================
// 5. DISPLAY PRODUCTS
// =====================================

function displayProducts() {

    productGrid.innerHTML = "";

    const searchText = searchInput.value.toLowerCase().trim();

    let productsFound = 0;


    products.forEach(function(product) {

        const matchesCategory =
            currentCategory === "all" ||
            product.category === currentCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText);

        if (!matchesCategory || !matchesSearch) {
            return;
        }

        productsFound++;


        // Create the product card.

        const card = document.createElement("article");

        card.classList.add("product-card");


        // Create the product image.

        const image = document.createElement("img");

        image.src = product.image;

        image.alt = product.name;

        image.loading = "lazy";


        // Create product information.

        const info = document.createElement("div");

        info.classList.add("product-info");


        const name = document.createElement("h3");

        name.textContent = product.name;


        const description = document.createElement("p");

        description.classList.add("product-description");

        description.textContent = product.description;


        const price = document.createElement("h4");

        price.textContent = formatCurrency(product.price);


        // Create Add to Cart button.

        const button = document.createElement("button");

        button.textContent = "Add to Cart";

        button.classList.add("cart-button");

        button.type = "button";


        button.addEventListener("click", function() {

            addToCart(product);

        });


        info.appendChild(name);

        info.appendChild(description);

        info.appendChild(price);

        info.appendChild(button);

        card.appendChild(image);

        card.appendChild(info);

        productGrid.appendChild(card);

    });


    // Show the number of matching products.

    if (productsFound === 0) {

        searchMessage.textContent =
            "Sorry, no products were found. Try another search.";

    } else if (searchText !== "") {

        searchMessage.textContent =
            productsFound + " product(s) found.";

    } else {

        searchMessage.textContent = "";

    }


    // Display selected category.

    if (currentCategory === "all") {

        activeCategory.textContent = "Showing all products";

    } else {

        activeCategory.textContent =
            "Showing " + currentCategory + " products";

    }

}


// =====================================
// 6. CATEGORY FILTERING
// =====================================

const categoryLinks = document.querySelectorAll(
    ".category-nav a[data-category], .category-button[data-category]"
);


categoryLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        currentCategory = link.dataset.category;

        displayProducts();

        document.getElementById("shop").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =====================================
// 7. VIEW ALL PRODUCTS
// =====================================

showAllButton.addEventListener("click", function() {

    currentCategory = "all";

    searchInput.value = "";

    displayProducts();

});


// =====================================
// 8. SEARCH PRODUCTS
// =====================================

searchButton.addEventListener("click", function() {

    displayProducts();

    document.getElementById("shop").scrollIntoView({
        behavior: "smooth"
    });

});


searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        displayProducts();

        document.getElementById("shop").scrollIntoView({
            behavior: "smooth"
        });

    }

});


searchInput.addEventListener("input", function() {

    displayProducts();

});


// =====================================
// 9. ADD PRODUCTS TO CART
// =====================================

function addToCart(product) {

    const existingProduct = cart.find(function(item) {

        return item.id === product.id;

    });


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });

    }


    cartMessage.textContent = product.name + " added to your cart.";

    updateCartDisplay();

}


// =====================================
// 10. DISPLAY CART
// =====================================

function updateCartDisplay() {

    cartItems.innerHTML = "";


    const totalQuantity = cart.reduce(function(total, product) {

        return total + product.quantity;

    }, 0);


    cartCount.textContent = totalQuantity;


    if (cart.length === 0) {

        const emptyMessage = document.createElement("li");

        emptyMessage.textContent = "Your cart is empty.";

        cartItems.appendChild(emptyMessage);

    }


    cart.forEach(function(product, index) {

        const item = document.createElement("li");

        item.classList.add("cart-item");


        const details = document.createElement("div");

        details.classList.add("cart-item-details");


        const name = document.createElement("strong");

        name.textContent = product.name;


        const quantity = document.createElement("span");

        quantity.textContent =
            formatCurrency(product.price) +
            " × " +
            product.quantity;


        const subtotal = document.createElement("span");

        subtotal.textContent =
            "Subtotal: " +
            formatCurrency(product.price * product.quantity);


        details.appendChild(name);

        details.appendChild(quantity);

        details.appendChild(subtotal);


        const removeButton = document.createElement("button");

        removeButton.textContent = "Remove";

        removeButton.classList.add("remove-button");


        removeButton.addEventListener("click", function() {

            removeFromCart(index);

        });


        item.appendChild(details);

        item.appendChild(removeButton);

        cartItems.appendChild(item);

    });


    const totalPrice = cart.reduce(function(total, product) {

        return total + (product.price * product.quantity);

    }, 0);


    cartTotal.textContent = formatCurrency(totalPrice);

    updateCheckoutSummary();

}


// =====================================
// 11. REMOVE PRODUCTS FROM CART
// =====================================

function removeFromCart(index) {

    const removedProduct = cart[index];

    cart.splice(index, 1);

    cartMessage.textContent =
        removedProduct.name + " removed from your cart.";

    updateCartDisplay();

}


// =====================================
// 12. CHECKOUT SUMMARY
// =====================================

function updateCheckoutSummary() {

    checkoutSummary.innerHTML = "";


    if (cart.length === 0) {

        const message = document.createElement("p");

        message.textContent = "Your cart is empty.";

        checkoutSummary.appendChild(message);

        return;

    }


    const list = document.createElement("ul");


    cart.forEach(function(product) {

        const item = document.createElement("li");

        item.textContent =
            product.name +
            " × " +
            product.quantity +
            " — " +
            formatCurrency(product.price * product.quantity);

        list.appendChild(item);

    });


    checkoutSummary.appendChild(list);


    const totalPrice = cart.reduce(function(total, product) {

        return total + (product.price * product.quantity);

    }, 0);


    const totalContainer = document.createElement("div");

    totalContainer.classList.add("checkout-summary-total");


    const label = document.createElement("span");

    label.textContent = "Total:";


    const amount = document.createElement("span");

    amount.textContent = formatCurrency(totalPrice);


    totalContainer.appendChild(label);

    totalContainer.appendChild(amount);

    checkoutSummary.appendChild(totalContainer);

}


// =====================================
// 13. CHECKOUT FORM
// =====================================

checkoutForm.addEventListener("submit", function(event) {

    event.preventDefault();


    if (cart.length === 0) {

        checkoutMessage.textContent =
            "Your cart is empty. Please add products first.";

        return;

    }


    const formData = new FormData(checkoutForm);


    const customerName = String(
        formData.get("customerName") || ""
    ).trim();


    const paymentMethod = String(
        formData.get("paymentMethod") || ""
    );


    const totalPrice = cart.reduce(function(total, product) {

        return total + (product.price * product.quantity);

    }, 0);


    checkoutMessage.textContent =
        "Thank you, " +
        customerName +
        "! Your demo order total is " +
        formatCurrency(totalPrice) +
        ". Payment method: " +
        paymentMethod +
        ". No real payment has been made and your order has not been saved.";

});


// =====================================
// 14. INITIALISE THE WEBSITE
// =====================================

displayProducts();

updateCartDisplay();