// Set the current year and last modified date in the footer
document.getElementById("lastModified").textContent = document.lastModified;

document.getElementById("currentyear").textContent = new Date().getFullYear();

//Function to update the review counter
function updateReviewCounter() {
    // Get the review count from local storage or initialize it to 0
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount = parseInt(reviewCount) + 1; // Increment the review count
    localStorage.setItem("reviewCount", reviewCount); // Store the updated count in local storage
    document.getElementById("reviewCount").textContent = reviewCount; // Display the updated count   
}

//Update the counter when the page loads
window.onload = function () {
    updateReviewCounter();
};