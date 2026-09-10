// Mobile Menu Navigation
let menuOpen = document.querySelector('.navmenu-open');
let mainNav = document.querySelector('.main-nav');
let menuOverlay = document.querySelector('.menu-overlay');

menuOpen.addEventListener("click", () => {
    mainNav.classList.add("menu-open");
    menuOpen.setAttribute("aria-expanded", "true");
    menuOpen.setAttribute("aria-label", "Close Navigation");  

    // Add Close Button
    if (!document.querySelector('.menu-close')) {
        menuOpen.insertAdjacentHTML("afterend", `
            <button class="menu-close" type="button" aria-label="Close Navigation">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `);
    }

    document.querySelector('.menu-close').addEventListener("click", closeMenu);
});

function closeMenu() {
    mainNav.classList.remove("menu-open");
    menuOpen.setAttribute("aria-expanded", "false");
    menuOpen.setAttribute("aria-label", "Open Navigation");
    document.querySelector('.menu-close')?.remove();
}
menuOverlay.addEventListener("click", closeMenu);

// Sticky Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        document.querySelector('.site-header').classList.add('sticky');
    } else {
        document.querySelector('.site-header').classList.remove('sticky');
    }
});

// Stats Section
let counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    let target = Number(counter.getAttribute("data-target"));
    let number = 0;

    let step = Math.ceil(target / 50);

    let timer = setInterval(() => {

        number += step;

        if (number >= target) {
            number = target;
            clearInterval(timer);
        }

        counter.innerText = number;

    }, 30);   
});

// Testimonials Slider
const testimonials = document.querySelectorAll(".testimonial-item");
let currentSlide = 0;

testimonials[currentSlide].classList.add("active");

function showNextSlide() {

    testimonials[currentSlide].classList.remove("active");
    currentSlide++;

    if (currentSlide >= testimonials.length) {
        currentSlide = 0;
    }

    testimonials[currentSlide].classList.add("active");
}
setInterval(showNextSlide, 3000);






