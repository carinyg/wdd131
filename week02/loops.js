myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};

// // with .forEach
// const foodsElement = document.querySelector("#favorite-foods");
// function createandAppendFoodItem(food) {
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);
// }
// myInfo.favoriteFoods.forEach(createandAppendFoodItem);

// // with .map
// foodsElement = document.querySelector("#favorite-foods");
// function mapFoodItem(food) {
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     return favoriteFood;
// }

// // this function could also be written this way using a template literal
// function mapFoodItemSmall(food) {
//     return `<li>${food}</li>`;
// }
// const foodListElemnts = myInfo.favoriteFoods.map(mapFoodItem);
// //we need to flatten the array of strings into one big string. .join does this.
// foodsElement.innerHTML = foodListElements.join("");

//Reuseable function
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

//requires a list, and a callback that will produce an html string for each item in the list
//returns a string of html

function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}
//requires an food string
//returns that string embedded in HTML markup

function foodTemplate(food) {
    return `<li>${food}</li>`;
}

//requires an place string
//returns that string embedded in HTML markup
function placeTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}
foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodTemplate);
placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placeTemplate);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);