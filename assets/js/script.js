const addEventOnElements = (elements, eventType, callback) => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
};

const navbar = document.querySelector('[data-navbar]');
const navbarTogglers = document.querySelectorAll('[data-nav-toggler]');
const toggleNav = (e) => {
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

// Topics Slider

const slider = document.querySelector('[data-slider]');
const sliderContainer = document.querySelector('[data-slider-container]');
const sliderPrevBtn = document.querySelector('[data-slider-prev]');
const sliderNextBtn = document.querySelector('[data-slider-next]');

let totalSliderVisibleItems = Number(
    getComputedStyle(slider).getPropertyValue('--slider-items')
);
let totalSlideableItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

let currenSlidePos = 0;

const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currenSlidePos].offsetLeft}px)`;
};

const slideNext = function () {
    const slideEnd = currenSlidePos >= totalSlideableItems;
    if (slideEnd) {
        currenSlidePos = 0;
    } else {
        currenSlidePos++;
    }
    moveSliderItem();
};

const slidePrev = function () {
    if (currenSlidePos <= 0) {
        currenSlidePos = totalSlideableItems;
    } else {
        currenSlidePos--;
    }
    moveSliderItem();
};

sliderNextBtn.addEventListener('click', slideNext);
sliderPrevBtn.addEventListener('click', slidePrev);

window.addEventListener('resize', function () {
    totalSliderVisibleItems = Number(
        getComputedStyle(slider).getPropertyValue('--slider-items')
    );
    totalSlideableItems =
        sliderContainer.childElementCount - totalSliderVisibleItems;
    moveSliderItem();
});
