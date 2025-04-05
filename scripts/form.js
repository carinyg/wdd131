// Set the current year and last modified date in the footer
document.getElementById("lastModified").textContent = document.lastModified;

document.getElementById("currentyear").textContent = new Date().getFullYear();

//Product array as provided in the assignment
// This array contains objects representing products with their id, name, and average rating.
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averageRating: 4.5,
    },
    {
        id: "fc-2050",
        name: "power laces",
        averageRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averageRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averageRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averageRating: 5.0
    }
];

//Function to convert a string to title case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

//Function to populate the product dropdown menu
function populateProducts() {
    const productSelect = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; //Set the value to the product id
        option.textContent = toTitleCase(product.name); //Convert procuct name to title case;
        productSelect.appendChild(option); //Add the option to the select element
    });
}

//Call the function when the page loads
window.onload = function () {
    populateProducts();
};
