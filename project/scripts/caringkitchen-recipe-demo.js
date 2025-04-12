function updateFooter() {
    document.getElementById("lastModified").textContent = document.lastModified;
    document.getElementById("currentyear").textContent = new Date().getFullYear();
};

function toggleMenu() {
    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
};

const recipeSteps = [
    {
        title: "Prep",
        image: "images/bowl-utensil-prep.jpg",
        description: "Gather all your ingredients and tools. Warm your stand mixer bowl by filling it half way with hot water. Also soak the dough hook and a spoon in hot water. Everything that touches the yeast should be warm."
    },
    {
        title: "Liquid Ingredients",
        image: "images/bring-to-temp.jpg",
        description: "Combine the liquid, sweetener, and fat in a saucepan. (In this case, water, honey, and coconut oil.) Heat to 110°F. (43°C)"
    },
    {
        title: "Add Yeast",
        image: "images/stir-in-yeast.jpg",
        description: "Drain the hot water from the stand mixer bowl. Add the liquid ingredients to the bowl and sprinkle the yeast on top. Using your heated spoon, gently stir to combine. All the yeast should be wet with no large clumps."
    },
    {
        title: "Sponge",
        image: "images/sponge.jpg",
        description: "Let the yeast mixture sit for 10 minutes until it is foamy. This is called a sponge."
    },
    {
        title: "Dry Ingredients",
        image: "images/add-whole-wheat.jpg",
        description: "Add the dry ingredients to the sponge. (In this case, whole wheat flour, all-purpose flour, salt, and vital wheat gluten.) I like to add these ingredients by weight because it keeps the dough consistent."
    },
    {
        title: "Mix",
        image: "images/add-white-flour.jpg",
        description: "Put the bowl on the stand mixer and work your way up to speed 2. Mix for 4 minutes. The dough should feel sticky but not sticky enough that it leaves residue. If it is too wet, add a little more flour. If it is too dry, add a little more water. When the consistency is right, mix for an additional 4 minutes."
    },
    {
        title: "First Rise",
        image: "images/first-rise-prep.jpg",
        description: "Prepare a glass or metal bowl by greasing it with the same fat in the recipe. (In this case, coconut oil) Remove the dough from the stand mixer bowl and knead a few times by hand. Form it into a ball and place it in your prepared bowl. Lightly brush the dough with more of what you greased your bowl with. Cover with a damp towel, plastic wrap, or a bowl cover. Let it rise until doubled. The time varies depending on the temperature of your kitchen. This usually takes 45 minutes to 1 1/2 hours."
    },
    {
        title: "Divide",
        image: "images/weigh-and-divide.jpg",
        description: "Once the dough has doubled, turn it out onto a lightly oiled surface. Weigh the dough and divide it into equal pieces. (In this case, 4 pieces of 830 grams each.)"
    },
    {
        title: "Shape, part 1",
        image: "images/shape-to-rounds.jpg",
        description: "Knead the dough and work it into a ball. If the dough ever starts to tear, stop immediately and let it rest 2-10 minutes."
    },
    {
        title: "Shape, part 2",
        image: "images/shape-to-loaf.jpg",
        description: "After letting the balls rest a few minutes, shape into a loaf. Rock the ball back and forth until it is a cylinder the length of your bread pan. Roll the endback on itself until it is halfway under and rock back and forth until smooth with no visible creases. Rotate the loaf 180° and repeat with the other end. If the dough ever starts to tear, stop immediately and let it rest 2-10 minutes."
    },
    {
        title: "Scoring",
        image: "images/scoring.jpg",
        description: "Prepare your loaf pans by lining them with parchment paper. I like using ceramic or cast iron bread pans. Place your loaves in your bread pans and score them with a lame or sharp knife. You can get really fancy hear with patterns; I stick with a few slashes that are unique to type of bread I am making, so I can tell what type of bread it is after it is baked by how it was scored. Scoring helps the bread rise without tearing."
    },
    {
        title: "Second Rise",
        image: "images/covered-2nd-rise.jpg",
        description: "Cover your bread pans with a damp towel, plastic wrap, or a bowl cover. Let it rise until doubled. The time varies depending on the temperature of your kitchen. This usually takes 45 minutes to 1 1/2 hours."
    },
    {
        title: "Baking Prep",
        image: "images/finished-2nd-rise.jpg",
        description: "Fifteen minutes before the second rise is done, preheat the oven. (In this case 350°F or 180°C.) Once the oven is heated, wait about 5 minutes. Remove the covers from the loaves and place them in the oven."
    },
    {
        title: "Baking",
        image: "images/separated-baking.jpg",
        description: "Evenly space your bread pans in the oven. Rotate the pans halfway through the cooking time."
    },
    {
        title: "Cooling",
        image: "images/baked-loaf.jpg",
        description: "The bread should be a deep golden color. When it is finished, remove the loaves from the pans immediately and place on cooling racks."
    },
    {
        title: "Slicing",
        image: "images/slicing.jpg",
        description: "Allow the bread to cool for at least 2 hours before slicing. The bread will stay fresh longer if it is sliced as needed, keeping the heel as a cover for the sliced end."
    }
];


function createStepCard(recipeSteps) {
    const mainSection = document.querySelector(".recipe-demo");
    recipeSteps.forEach(recipeStep => {
        let step = document.createElement("section");
        let title = document.createElement("h3");
        let img = document.createElement("img");
        let description = document.createElement("p");

        title.textContent = recipeStep.title;
        img.setAttribute("src", recipeStep.image);
        img.setAttribute("alt", `${recipeStep.title} image`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "250");
        img.setAttribute("height", "250");
        description.textContent = recipeStep.description;

        step.appendChild(title);
        step.appendChild(img);
        step.appendChild(description);

        mainSection.appendChild(step);
    });
};

function handleContactForm() {
    const contactButton = document.getElementById('contactButton');
    const modal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');

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
    const hambutton = document.querySelector('#menu');
    if (hambutton) {
        hambutton.addEventListener('click', toggleMenu);
    }
    handleContactForm();
    createStepCard(recipeSteps);
    updateVisitCount();
};

document.addEventListener('DOMContentLoaded', init);