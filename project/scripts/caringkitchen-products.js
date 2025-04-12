function updateFooter() {
    document.getElementById("lastModified").textContent = document.lastModified;
    document.getElementById("currentyear").textContent = new Date().getFullYear();
}

function toggleMenu() {
    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
}

const products = [
    {
        productName: "Bread Bowls",
        image: "",
        price: "$7.50 for 4 large or 6 small",
        ingredients: "All-Purpose Flour, Whole Milk, Water, Butter, Sugar, Yeast, Egg, Vital Wheat Gluten, Salt",
    },
    {
        productName: "Cinnamon Rolls",
        image: "images/cinnamon-roll.jpg",
        price: "$10 for 6",
        ingredients: "All-Purpose Flour, Whole Milk, Water, Sugar, Butter, Eggs, Yeast, Brown Sugar, Cinnamon, Vital Wheat Gluten, Salt, Cream Cheese Frosting",

    },
    {
        productName: "Dinner Rolls",
        image: "images/dinner-rolls.jpg",
        price: "$7.50 for 12, $4 for 6",
        ingredients: "All-Purpose Flour, Whole Milk, Water, Butter, Sugar, Yeast, Egg, Vital Wheat Gluten, Salt",
    },
    {
        productName: "Mixed Wheat Bread",
        image: "images/mixed-wheat.jpg",
        price: "$6.50 for 1 sliced loaf",
        ingredients: "Water, Whole Wheat Flour, All-Purpose Flour, Honey, Coconut Oil, Vital Wheat Gluten, Lemon Juice, Yeast, Salt",
    },
    {
        productName: "Sesame Sourdough Hamburger Buns",
        image: "images/hamburger-bun.jpg",
        price: "$6.50 for 8, $3.50 for 4",
        ingredients: "Unbleached Organic All-Purpose Flour, Sourdough Starter, Whole Milk, Water, Sugar, Olive Oil, Egg, Yeast, Egg, Vital Wheat Gluten, Salt, Sesame Seeds",
    },
    {
        productName: "Sourdough Baguette",
        image: "images/sourdough-baguette.jpg",
        price: "$6 for 1 baguette",
        ingredients: "Unbleached Organic All-Purpose Flour, Water, Sourdough Starter, Vital Wheat Gluten, Salt, Instant Yeast",
    },
    {
        productName: "Sourdough Hot Dog Buns",
        image: "",
        price: "$6.50 for 10, $3.50 for 5",
        ingredients: "Unbleached Organic All-Purpose Flour, Sourdough Starter, Whole Milk, Water, Sugar, Olive Oil, Egg, Yeast, Egg, Vital Wheat Gluten, Salt",
    },
    {
        productName: "Sourdough Sandwich Bread",
        image: "images/sourdough-sandwich.jpg",
        price: "$6.50 for 1 sliced loaf",
        ingredients: "Unbleached Organic All-Purpose Flour, Water, Sourdough Starter, Butter, Whole Milk, Sugar, Yeast, Vital Wheat Gluten, Salt",
    },
    {
        productName: "White Bread",
        image: "",
        price: "$6 for 1 sliced loaf",
        ingredients: "All-Purpose Flour, Whole Milk, Water, Butter, Sugar, Egg, Yeast, Salt, Vital Wheat Gluten",
    },
    {
        productName: "Whole Wheat Bread",
        image: "images/whole-wheat.jpg",
        price: "$7 for 1 sliced loaf",
        ingredients: "Whole Wheat Flour, Water, Honey, Coconut Oil, Vital Wheat Gluten, Lemon Juice, Yeast, Salt",
    }
];

function createProductCard(products) {
    const mainSection = document.querySelector(".product-info");
    products.forEach(product => {
        if (product.image == "") {
            product.image = "images/photo-coming-soon.png";
        };
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let img = document.createElement("img");
        let price = document.createElement("p");
        let ingredients = document.createElement("p");

        name.textContent = product.productName;
        img.setAttribute("src", product.image);
        img.setAttribute("alt", `${product.productName} image`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "250");
        img.setAttribute("height", "250");
        price.innerHTML = `<span class="label">Price:</span> ${product.price}`;
        ingredients.innerHTML = `<span class="label">Ingredients:</span> ${product.ingredients}`;

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(price);
        card.appendChild(ingredients);

        mainSection.appendChild(card);
    });
}

function handleContactForm() {
    const contactButton = document.getElementById('contact-button');
    const modal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contact-form');

    if (contactButton && modal && closeModal && contactForm) {
        contactButton.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const formData = { name, email, message, timestamp: new Date().toISOString() };
            let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
            submissions.push(formData);
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

            const subject = encodeURIComponent(`Inquiry from Caring Kitchen - ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
            window.location.href = `mailto:cariny.gardner@gmail.com?subject=${subject}&body=${body}`;

            contactForm.reset();
            modal.style.display = 'none';
        });
    }
};

function updateVisitCount() {
    const pageName = window.location.pathname.split('/').pop() || 'caringkitchen.html';
    let visits = parseInt(localStorage.getItem(`visits_${pageName}`) || '0');
    visits += 1;
    localStorage.setItem(`visits_${pageName}`, visits);
    const visitCountElement = document.getElementById('visitCount');
    if (visitCountElement) {
        visitCountElement.textContent = visits;
    }
};

function init() {
    updateFooter();
    toggleMenu();
    createProductCard(products);
    handleContactForm();
    updateVisitCount();
}

document.addEventListener('DOMContentLoaded', init);