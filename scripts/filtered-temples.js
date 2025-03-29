const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const templeSection = document.querySelector("main section");

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

document.getElementById("lastModified").textContent = document.lastModified;

document.getElementById("currentyear").textContent = new Date().getFullYear();

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Jordan River Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "1981, November, 20",
        area: 148236,
        imageUrl: "images/jordan-river-utah-temple-sunset.jpg"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Frederiksberg, Denmark",
        dedicated: "2004, May, 23",
        area: 25000,
        imageUrl: "images/copenhagen-denmark-temple.jpg"
    },
    {
        templeName: "Las Vegas Nevada",
        location: "Las Vegas, Nevada, United States",
        dedicated: "1989, December, 18",
        area: 80350,
        imageUrl: "images/las-vegas-nevada-temple-night.jpg"
    }
    // Add more temple objects here...
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    const mainSection = document.querySelector(".temple-album");
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        const dedicationParts = temple.dedicated.split(", ");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${dedicationParts[1]} ${dedicationParts[2]}, ${dedicationParts[0]}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        mainSection.appendChild(card);
    });
}

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

function resetTitle(linkName) {
    document.querySelector(".temple-album").innerHTML = ""; //Clear existing content
    let title = document.createElement("h2");
    title.innerHTML = `${linkName}`;
    document.querySelector(".temple-album").appendChild(title);
}

homeLink.addEventListener("click", () => {
    resetTitle("Home");

    createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
    resetTitle("Old");

    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });

    createTempleCard(oldTemples);
});

newLink.addEventListener("click", () => {
    resetTitle("New");

    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });

    createTempleCard(newTemples);
});

largeLink.addEventListener("click", () => {
    resetTitle("Large");

    const largeTemples = temples.filter(temple => temple.area > 90000);

    createTempleCard(largeTemples);
});

smallLink.addEventListener("click", () => {
    resetTitle("Small");

    const smallTemples = temples.filter(temple => temple.area < 10000);

    createTempleCard(smallTemples);
});









