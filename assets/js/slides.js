'use strict' 

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide__img img'); // Adjust selector as needed
    const totalSlides = slides.length;
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const counter = document.getElementById('slide-counter');
    let currentSlide = 0;

    function updateCounter() {
        counter.innerText = `${currentSlide + 1}/${totalSlides}`;
    }

    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateCounter();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateCounter();
        }
    });

    updateCounter(); // Initial call to set counter
});



//ASPECT RATIO
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slide__img img');
    images.forEach((img, index) => {
        if (index < 2) { // First two images (portrait)
            img.style.aspectRatio = '341/466';
            // img.style.aspectRatio = '3/4';
        } else { // Third image (horizontal)
            img.style.aspectRatio = '446/277';
        }
    });
});

