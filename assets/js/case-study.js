'use strict'

document.addEventListener('DOMContentLoaded', function() {
    // Use querySelectorAll to get all instances of '.stories__card'
    const storiesCards = document.querySelectorAll('.stories__card');

    storiesCards.forEach(card => {
        const slides = card.querySelectorAll('.slide');
        let currentIndex = 0; // Initialize currentIndex for each '.stories__card'

        // Function to update the slide position based on currentIndex
        function updateSlidePosition() {
            const shiftPercentage = currentIndex * (-100);
            card.querySelector('.slides-container').style.transform = `translateX(${shiftPercentage}%)`;
        }

        // Function to adjust currentIndex and loop the slides
        function adjustForLoop() {
            if (currentIndex < 0) {
                currentIndex = slides.length - 1; // Loop back to the last slide if going back from the first
            } else if (currentIndex >= slides.length) {
                currentIndex = 0; // Loop back to the first slide if going forward from the last
            }
            updateSlidePosition(); // Apply the updated position to the slides
        }

        // Attach event listeners to '.prev' and '.next' buttons within each '.stories__card'
        card.querySelector('.prev').addEventListener('click', function() {
            currentIndex--; // Decrement currentIndex on prev click
            adjustForLoop(); // Adjust the slide position accordingly
        });

        card.querySelector('.next').addEventListener('click', function() {
            currentIndex++; // Increment currentIndex on next click
            adjustForLoop(); // Adjust the slide position accordingly
        });

        // Initial call to set the slides position when the page loads
        updateSlidePosition();
    });
});

