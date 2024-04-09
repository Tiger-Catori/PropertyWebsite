'use strict'


// Cards image slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const storiesCards = document.querySelectorAll('.stories__card');

    storiesCards.forEach(card => {
        const slides = card.querySelectorAll('.slide');
        let currentIndex = 0; // Initialize currentIndex for each '.stories__card'
        let startX; // Variable to store the start x position of touch

        function updateSlidePosition() {
            const shiftPercentage = currentIndex * (-100);
            card.querySelector('.slides-container').style.transform = `translateX(${shiftPercentage}%)`;
        }

        function adjustForLoop() {
            if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            } else if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            updateSlidePosition();
        }

        card.querySelector('.prev').addEventListener('click', function() {
            currentIndex--;
            adjustForLoop();
        });

        card.querySelector('.next').addEventListener('click', function() {
            currentIndex++;
            adjustForLoop();
        });

        // Touch start handler
        card.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        }, false);

        // Touch end handler
        card.addEventListener('touchend', function(e) {
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;

            // Threshold for swipe detection, adjust as needed
            const threshold = 50;

            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    // Swiped left, go to next slide
                    currentIndex++;
                } else {
                    // Swiped right, go to previous slide
                    currentIndex--;
                }
                adjustForLoop();
            }
        }, false);

        updateSlidePosition();
    });
});
