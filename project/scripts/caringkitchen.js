function updateFooter() {
    document.getElementById("lastModified").textContent = document.lastModified;
    document.getElementById("currentyear").textContent = new Date().getFullYear();
}

function toggleMenu() {
    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
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
}

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

function displayGreeting() {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) {
        greeting = `Good morning! Thanks for visiting Caring Kitchen!`;
    } else if (hour < 18) {
        greeting = `Good afternoon! Thanks for visiting Caring Kitchen!`;
    } else {
        greeting = `Good evening! Thanks for visiting Caring Kitchen!`;
    }

    const greetingElement = document.createElement('p');
    greetingElement.textContent = greeting;
    greetingElement.style.color = 'var(--delft-blue)';
    greetingElement.style.textAlign = 'center';
    document.querySelector('.bio').prepend(greetingElement);
};

function init() {
    updateFooter();
    const hambutton = document.querySelector('#menu');
    if (hambutton) {
        hambutton.addEventListener('click', toggleMenu);
    }
    handleContactForm();
    updateVisitCount();
    displayGreeting();
}

document.addEventListener('DOMContentLoaded', init);