const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 1;
const containerWidth = 350; // .carousel-container width
const slideWidth = containerWidth; // Each slide takes up the container width

carouselSlide.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';

function nextSlide() {
    counter++;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
}

function prevSlide() {
    counter--;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
}

// Event listeners for navigation buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Reset counter and transition when reaching the end or beginning for infinite loop
carouselSlide.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
        counter = 1;
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    }
    if (images[counter].id === 'firstClone') {
        counter = images.length - 2;
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    }
});

