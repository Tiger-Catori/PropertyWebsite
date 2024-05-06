"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.project__links');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const buttonMore = document.getElementById('button__more');
    const buttonText = buttonMore.querySelector('.text');

    // Default active section is 'completed-projects'
    let activeSection = 'completed-projects';  

    // Function to toggle visibility of project cards beyond the first 6
    function toggleProjectCardsVisibility() {
        const projectCards = document.querySelectorAll(`#${activeSection} .project__card`);
        const isExpanded = projectCards.length > 6 && projectCards[6].style.display !== 'none';

        // Toggle visibility of cards beyond the first six
        for (let i = 6; i < projectCards.length; i++) {
            projectCards[i].style.display = isExpanded ? 'none' : 'block'; // Or 'flex' if your layout uses flexbox
        }

        // Update button text accordingly
        buttonText.textContent = isExpanded ? 'See More' : 'Show Less';
    }

    // Event listener for tab clicks to update the active section
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            activeSection = this.getAttribute('data-bs-target').replace('#', '');
            toggleProjectCardsVisibility();  // Ensure visibility is toggled correctly on tab change
        });
    });

    // Hide extra cards on initial load
    toggleProjectCardsVisibility();

    // Event listener for the "See More"/"Show Less" button
    buttonMore.addEventListener('click', function() {
        toggleProjectCardsVisibility();
    });
});
