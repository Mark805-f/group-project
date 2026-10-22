document.addEventListener("DOMContentLoaded", function () {


    const storeName = "Vanta Luxury";
    const currency = "$";

    function displayWelcome() {
        console.log("Welcome to " + storeName + "!");
    }

    displayWelcome();


    const cards = document.querySelectorAll(".dest-card");
    const heading = document.querySelector(".section-title");
    const nav = document.querySelector("nav");

    if (heading) {
        heading.style.cursor = "pointer";

        heading.addEventListener("click", function () {
            heading.classList.toggle("text-warning");
            console.log("Featured Clothing heading clicked.");
        });
    }

    cards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.style.transform = "translateY(-8px)";
            card.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "";
            card.style.boxShadow = "";
        });

        card.style.transition =
            "transform 0.3s ease, box-shadow 0.3s ease";
    });
     const heroContent = document.querySelector(".hero-content");

    if (heroContent) {
        heroContent.classList.add(
            "container",
            "text-center",
            "py-5"
        );

        const heroText = heroContent.querySelector("p");

        if (heroText) {
            heroText.classList.add(
                "text-uppercase",
                "fw-semibold",
                "mb-3"
            );
        }

        const heroHeading = heroContent.querySelector("h1");

        if (heroHeading) {
            heroHeading.classList.add(
                "display-1",
                "fw-bold",
                "mb-4"
            );
        }

    const heroButton = document.querySelector(".hero-content .search-btn");

        if (heroButton) {
        heroButton.classList.add(
            "btn",
            "btn-lg",
            "btn-success",
            "rounded-pill",
            "px-5"
        );

    heroButton.classList.add("btn-dark");
}
        console.log("Bootstrap styling added to hero section.");
    }

    window.addEventListener("scroll", function () {
        if (!nav) return;

        if (window.scrollY > 50) {
            nav.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        } else {
            nav.style.boxShadow = "";
        }
    });

    const hero = document.querySelector(".hero-content");

    if (hero) {
        const message = document.createElement("p");
        message.textContent = "Discover your style with Vanta.";
        message.className = "vanta-welcome";
        message.style.color = "#b89b5e";
        message.style.fontWeight = "bold";
        message.style.marginTop = "15px";
        hero.appendChild(message);
    }




    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            const nameInput = form.querySelector(
                'input[name="name"]'
            );

            const emailInput = form.querySelector(
                'input[type="email"]'
            );

            const messageInput = form.querySelector(
                'textarea[name="message"]'
            );

            let valid = true;


            if (nameInput && nameInput.value.trim().length < 2) {
                nameInput.setCustomValidity(
                    "Please enter at least 2 characters."
                );
                valid = false;
            } else if (nameInput) {
                nameInput.setCustomValidity("");
            }


            if (emailInput && emailInput.value.trim() === "") {
                emailInput.setCustomValidity(
                    "Please enter your email address."
                );
                valid = false;
            } else if (emailInput) {
                emailInput.setCustomValidity("");
            }


            if (
                messageInput &&
                messageInput.value.trim().length < 10
            ) {
                messageInput.setCustomValidity(
                    "Your message must contain at least 10 characters."
                );
                valid = false;
            } else if (messageInput) {
                messageInput.setCustomValidity("");
            }


            if (!form.checkValidity()) {
                valid = false;
            }

            if (!valid) {
                event.preventDefault();
                form.reportValidity();
                return;
            }


            if (form.id === "contact-form") {
                event.preventDefault();
                alert("Thank you! Your form passed validation.");
                form.reset();
            }

            console.log("Form validation completed.");
        });
    });



    const searchInput = document.querySelector("#product-search");
    const searchMessage = document.querySelector("#search-message");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value
                .trim()
                .toLowerCase();

            let visibleCount = 0;

            cards.forEach(function (card) {
                const productName =
                    card.querySelector("h3")?.textContent.toLowerCase() || "";

                const description =
                    card.querySelector("p")?.textContent.toLowerCase() || "";

                const matches =
                    productName.includes(searchTerm) ||
                    description.includes(searchTerm);

                card.style.display = matches ? "" : "none";

                if (matches) visibleCount++;
            });

            if (searchMessage) {
                searchMessage.textContent = searchTerm
                    ? visibleCount + " product(s) found."
                    : "";
            }
        });
    }

    const products = [
        { name: "Hoddie", price: 90, season: "Winter" },
        { name: "Nike Tech", price: 120, season: "All season" }
    ];

    products.forEach(function (product) {
        console.log(
            product.name + " costs " +
            currency + product.price
        );
    });


    const productNames = products.map(function (product) {
        return product.name;
    });

    console.log("Product names:", productNames);


    const affordableProducts = products.filter(function (product) {
        return product.price < 100;
    });

    console.log("Products below $100:", affordableProducts);


    const selectedProduct = products.find(function (product) {
        return product.name === "Nike Tech";
    });

    console.log("Selected product:", selectedProduct);




    function checkPrice(price) {
        if (price >= 100) {
            return "Premium product";
        } else if (price > 0) {
            return "Affordable product";
        } else {
            return "Invalid price";
        }
    }

    console.log("Hoddie:", checkPrice(90));
    console.log("Nike Tech:", checkPrice(120));



    for (let i = 0; i < cards.length; i++) {
        const name = cards[i].querySelector("h3");

        if (name) {
            cards[i].setAttribute(
                "aria-label",
                "View " + name.textContent.trim()
            );
        }
    }


    for (let i = 0; i < products.length; i++) {
        console.log("Product number " + (i + 1));
    }




    if (window.jQuery) {
        const $ = window.jQuery;

        $(".shop-grid").hide().fadeIn(800);

        $(".dest-card")
            .on("mouseenter", function () {
                $(this).find("img").stop(true).animate(
                    { opacity: 0.75 },
                    200
                );
            })
            .on("mouseleave", function () {
                $(this).find("img").stop(true).animate(
                    { opacity: 1 },
                    200
                );
            });

        $("#toggle-info").on("click", function () {
            $("#extra-info").slideToggle(300);
        });
    }

    document.querySelectorAll(".btn-primary").forEach(function (button) {
        button.classList.add("btn");
    });

    console.log("All 10 JavaScript requirements initialized.");
});