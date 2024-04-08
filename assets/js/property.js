"use strict"
// // BUTTON TOGGLE
// document.addEventListener('DOMContentLoaded', function() {
//     // Hide the current projects section initially
//     // document.querySelector('#current-projects').style.display = 'none';

//     // Add click event listeners to the tabs
//     document.querySelectorAll('.project__links').forEach(tab => {
//         tab.addEventListener('click', function(e) {
//             e.preventDefault(); // Prevent the default action of the anchor tag
            
//             const targetId = this.getAttribute('href').replace('#', ''); // Extract the target section ID
            
//             // Show the targeted section and hide the other
//             if (targetId === 'completed-project') {
//                 document.querySelector('#completed-projects').style.display = 'flex';
//                 document.querySelector('#current-projects').style.display = 'none';
//             } else if (targetId === 'current-project') {
//                 document.querySelector('#completed-projects').style.display = 'none';
//                 document.querySelector('#current-projects').style.display = 'flex';
//             }
//         });
//     });
// });


// // SEE MORE OR LESS
// document.addEventListener('DOMContentLoaded', function() {
//     const toggleButton = document.getElementById('button__more'); // Button to toggle visibility, adjusted to match your HTML ID
//     const projectCards = document.querySelectorAll('.project__card'); // Select all project cards, adjusted to match your HTML class
    
//     const initialVisibleItems = 6; // Number of items to show initially

//     // Initially hide extra items
//     for (let i = initialVisibleItems; i < projectCards.length; i++) {
//         projectCards[i].style.display = 'none';
//     }

//     toggleButton.addEventListener('click', function() {
//         // Determine the current state based on one of the items
//         const isExpanded = projectCards[initialVisibleItems].style.display !== 'none';

//         // Toggle the state
//         for (let i = initialVisibleItems; i < projectCards.length; i++) {
//             projectCards[i].style.display = isExpanded ? 'none' : 'block'; // Or 'flex' if your layout requires
//         }

//         // Update button text accordingly
//         toggleButton.querySelector('.text').textContent = isExpanded ? 'See More' : 'Show Less';
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    let activeSection = 'completed-projects'; // Default active section

    // Function to toggle visibility of project cards based on active section
    function toggleProjectCardsVisibility() {
        const projectCards = document.querySelectorAll(`#${activeSection} .project__card`);
        const isExpanded = projectCards[6] && projectCards[6].style.display !== 'none';

        // Toggle visibility beyond the first 6 cards
        for (let i = 6; i < projectCards.length; i++) {
            projectCards[i].style.display = isExpanded ? 'none' : 'block'; // Or 'flex' if your layout uses flexbox
        }

        // Update button text accordingly
        document.getElementById('button__more').querySelector('.text').textContent = isExpanded ? 'See More' : 'Show Less';
    }

    // Initial hiding of extra project cards beyond the first 6
    toggleProjectCardsVisibility();

    // Event listener for the "See More"/"Show Less" button
    document.getElementById('button__more').addEventListener('click', toggleProjectCardsVisibility);

    // Event listeners for tab switching
    document.querySelectorAll('.project__links').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor action

            const targetId = this.getAttribute('href').replace('#', '') + '-projects';
            activeSection = targetId === 'completed-projects' ? 'completed-projects' : 'current-projects';

            // Toggle section visibility
            document.getElementById('completed-projects').style.display = activeSection === 'completed-projects' ? 'flex' : 'none';
            document.getElementById('current-projects').style.display = activeSection === 'current-projects' ? 'flex' : 'none';

            // Reset visibility of project cards to initial state when tab changes
            toggleProjectCardsVisibility();
        });
    });
});

