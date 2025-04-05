// Set the current year and last modified date in the footer
document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Product array
const products = [
    { id: "fc-1888", name: "flux capacitor", averageRating: 4.5 },
    { id: "fc-2050", name: "power laces", averageRating: 4.7 },
    { id: "fs-1987", name: "time circuits", averageRating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averageRating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averageRating: 5.0 }
];

// Function to convert a string to title case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Function to populate the product dropdown menu
function populateProducts() {
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = toTitleCase(product.name);
        productSelect.appendChild(option);
    });
}

// Form validation and error handling
const form = document.querySelector(".reviewForm");
const ratingSection = document.querySelector(".rating");
const errorMessage = document.getElementById("rating-error");

if (!form) {
    console.log("Form not found");
} else {
    console.log("Form found, attaching submit listener");
    form.addEventListener("submit", function (event) {
        const ratingSelected = document.querySelector("input[name='rating']:checked");
        console.log("Submit attempted, rating selected:", ratingSelected);

        if (!ratingSelected) {
            event.preventDefault();
            errorMessage.style.display = "block";
            ratingSection.classList.add("invalid");
            errorMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
            errorMessage.style.display = "none";
            ratingSection.classList.remove("invalid");
        }
    });
}

// Handle rating changes
const radios = document.querySelectorAll("input[name='rating']");
if (radios.length > 0) {
    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            errorMessage.style.display = "none";
            ratingSection.classList.remove("invalid");
        });

        // Catch invalid state on radio buttons
        radio.addEventListener("invalid", function (event) {
            event.preventDefault(); // Stop browser default behavior
            errorMessage.style.display = "block";
            ratingSection.classList.add("invalid");
            errorMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    });
} else {
    console.log("No rating inputs found");
}

// Call the function when the page loads
window.onload = function () {
    console.log("Window loaded");
    populateProducts();
};