'use strict'

// SLIDES
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.images-container img');
    const totalSets = Math.ceil(slides.length / 3);
    let currentSetIndex = 0;
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const counter = document.getElementById('slide-counter');
    let touchStartX = 0;
    let touchEndX = 0;

    function updateCounter() {
        let currentSet = currentSetIndex + 1;
        counter.innerText = `${currentSet}/${totalSets}`;
    }
    
    
    
    
    

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = 'none';  // Hide all slides initially
            slide.style.height = '';  // Reset the height
            slide.style.aspectRatio = '';  // Clear custom aspect ratios
        });

        // Update visibility and styles based on the current set index
        let start = currentSetIndex * 3;
        for (let i = start; i < start + 3 && i < slides.length; i++) {
            slides[i].style.display = 'block';  // Show slide
            if (i === start + 2) {  // If it's the third image in the current view
                slides[i].style.height = '50%';  // Set height to 50% for the last visible image
                slides[i].style.aspectRatio = '446/277';  // Apply landscape aspect ratio
            } else {
                slides[i].style.aspectRatio = '341/466';  // Apply portrait aspect ratio for the first two images
            }
        }

        updateCounter();
    }

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            currentSetIndex = (currentSetIndex === totalSets - 1) ? 0 : currentSetIndex + 1;
        } else {
            currentSetIndex = (currentSetIndex === 0) ? totalSets - 1 : currentSetIndex - 1;
        }
        updateSlides();
    }

    prevButton.addEventListener('click', () => {
        currentSetIndex = (currentSetIndex === 0) ? totalSets - 1 : currentSetIndex - 1;
        updateSlides();
    });

    nextButton.addEventListener('click', () => {
        currentSetIndex = (currentSetIndex === totalSets - 1) ? 0 : currentSetIndex + 1;
        updateSlides();
    });

    document.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
    });

    document.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    updateSlides();
});