document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('button__more'); // Button to toggle visibility, adjusted to match your HTML ID
    const projectCards = document.querySelectorAll('.project__card'); // Select all project cards, adjusted to match your HTML class
    const initialVisibleItems = 6; // Number of items to show initially

    // Initially hide extra items
    for (let i = initialVisibleItems; i < projectCards.length; i++) {
        projectCards[i].style.display = 'none';
    }

    toggleButton.addEventListener('click', function() {
        // Determine the current state based on one of the items
        const isExpanded = projectCards[initialVisibleItems].style.display !== 'none';

        // Toggle the state
        for (let i = initialVisibleItems; i < projectCards.length; i++) {
            projectCards[i].style.display = isExpanded ? 'none' : 'block'; // Or 'flex' if your layout requires
        }

        // Update button text accordingly
        toggleButton.querySelector('.text').textContent = isExpanded ? 'See More' : 'Show Less';
    });
});
