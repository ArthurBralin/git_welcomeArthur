const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;


function updateCarousel() {
    images.forEach((img, index) => {
        img.classList.toggle('visible', index === currentIndex);
    });
}

leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
});


rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});