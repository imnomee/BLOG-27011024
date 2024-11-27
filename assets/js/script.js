const addEventOnElements = (elements, eventType, callback) => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
};

const navbar = document.querySelector('[data-navbar]');
const navbarTogglers = document.querySelectorAll('[data-nav-toggler]');
const toggleNav = () => {
    navbar.classList.toggle('active');
};

addEventOnElements(navbarTogglers, 'click', toggleNav);

// Header Animation when scrolled down to 100px header will be active

const header = document.querySelector('[data-header]');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});
