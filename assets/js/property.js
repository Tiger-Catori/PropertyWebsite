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

// document.addEventListener('DOMContentLoaded', function() {
//     //let activeSection = 'completed-projects'; // Default active section

//     // Function to toggle visibility of project cards based on active section
//     function toggleProjectCardsVisibility() {
//         const projectCards = document.querySelectorAll(`#${activeSection} .project__card`);
//         const isExpanded = projectCards[6] && projectCards[6].style.display !== 'none';

//         // Toggle visibility beyond the first 6 cards
//         for (let i = 6; i < projectCards.length; i++) {
//             projectCards[i].style.display = isExpanded ? 'none' : 'block'; // Or 'flex' if your layout uses flexbox
//         }

//         // Update button text accordingly
//         document.getElementById('button__more').querySelector('.text').textContent = isExpanded ? 'See More' : 'Show Less';
//     }

//     // Initial hiding of extra project cards beyond the first 6
//     toggleProjectCardsVisibility();

//     // Event listener for the "See More"/"Show Less" button
//     document.getElementById('button__more').addEventListener('click', toggleProjectCardsVisibility);

//     // Event listeners for tab switching
//     document.querySelectorAll('.project__links').forEach(tab => {
//         tab.addEventListener('click', function(e) {
//             e.preventDefault(); // Prevent default anchor action

//             const targetId = this.getAttribute('href').replace('#', '') + '-projects';
//             activeSection = targetId === 'completed-projects' ? 'completed-projects' : 'current-projects';

//             // Toggle section visibility
//             document.getElementById('completed-projects').style.display = activeSection === 'completed-projects' ? 'flex' : 'none';
//             document.getElementById('current-projects').style.display = activeSection === 'current-projects' ? 'flex' : 'none';

//             // Reset visibility of project cards to initial state when tab changes
//             toggleProjectCardsVisibility();
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     let activeSection = 'completed-projects'; // Default active section

//     // // Function to toggle visibility of project cards based on active section
//     // function toggleProjectCardsVisibility() {
//     //     const projectCards = document.querySelectorAll(`#${activeSection} .project__card`);
//     //     const isExpanded = projectCards[6] && projectCards[6].style.display !== 'none';

//     //     // Toggle visibility beyond the first 6 cards
//     //     for (let i = 6; i < projectCards.length; i++) {
//     //         projectCards[i].style.display = isExpanded ? 'none' : 'block'; // Or 'flex' if your layout uses flexbox
//     //     }

//     //     // Update button text accordingly
//     //     document.getElementById('button__more').querySelector('.text').textContent = isExpanded ? 'See More' : 'Show Less';
//     // }

//     // Initial hiding of extra project cards beyond the first 6
//     toggleProjectCardsVisibility();

//     // Event listener for the "See More"/"Show Less" button
//     document.getElementById('button__more').addEventListener('click', toggleProjectCardsVisibility);

//     // Event listeners for tab switching
//     document.querySelectorAll('.project__links').forEach(tab => {
//         tab.addEventListener('click', function(e) {
//             e.preventDefault(); // Prevent default anchor action

//             const targetId = this.getAttribute('data-bs-target').replace('#', '') + '-projects';
//             activeSection = targetId; // Set the active section based on clicked tab

//             // Toggle section visibility
//             document.querySelectorAll('.tab-pane').forEach(tabPane => {
//                 if (tabPane.id === targetId) {
//                     tabPane.classList.add('show', 'active');
//                     tabPane.style.display = 'flex'; // Make sure to display flex if your cards are flex items
//                 } else {
//                     tabPane.classList.remove('show', 'active');
//                     tabPane.style.display = 'none'; // Hide other tabs
//                 }
//             });

//             // Reset visibility of project cards to initial state when tab changes
//             toggleProjectCardsVisibility();
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     let activeSection = 'current-projects'; 
//     let currentSection = 'current-projects'; 
//     let completedSection = 'completed-projects'

//     // Function to toggle visibility of project cards beyond the first 6
//     function toggleProjectCardsVisibility() {
//         const projectCards = document.querySelectorAll(`#${activeSection} .project__card`);
//         const isExpanded = projectCards[6] && projectCards[6].style.display !== 'none';

//         // Toggle visibility of cards beyond the first six
//         for (let i = 6; i < projectCards.length; i++) {
//             projectCards[i].style.display = isExpanded ? 'none' : 'block'; // Or 'flex' if your layout uses flexbox
//         }

//         // Update button text accordingly
//         document.getElementById('button__more').querySelector('.text').textContent = isExpanded ? 'See More' : 'Show Less';
//     }

//     // Initial setup to hide extra project cards beyond the first 6 for the default section
//     toggleProjectCardsVisibility();

//     // Event listener for the "See More"/"Show Less" button
//     document.getElementById('button__more').addEventListener('click', toggleProjectCardsVisibility);

//     // Event listeners for tab switching
//     document.querySelectorAll('.project__links').forEach(tab => {
//         tab.addEventListener('click', function(e) {
//             e.preventDefault(); // Prevent default anchor action

//             const targetId = this.getAttribute('data-bs-target').replace('#', '') + '-projects';
//             activeSection = targetId; // Set the active section based on clicked tab

//             // Toggle section visibility
//             document.querySelectorAll('.tab-pane').forEach(tabPane => {
//                 if (tabPane.id === targetId) {
//                     tabPane.classList.add('show', 'active');
//                     tabPane.style.display = 'flex'; // Ensure it uses display flex
//                 } else {
//                     tabPane.classList.remove('show', 'active');
//                     tabPane.style.display = 'none'; // Hide inactive tabs
//                 }
//             });

//             // Reset visibility of project cards to initial state when tab changes
//             toggleProjectCardsVisibility();
//         });
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     // Start with 'current-projects' as the active tab
//     // let activeSection = currentSection; 
//     let activeSection = completedSection;
//     let currentSection = 'current-projects'; 
//     let completedSection = 'completed-projects'

//     // Function to toggle visibility of project cards beyond the first 6
//     function toggleProjectCardsVisibility() {
//         const projectCards = document.querySelectorAll(`#${activeSection} .project__card`);
//         const isExpanded = projectCards[6] && projectCards[6].style.display !== 'none';

//         // Toggle visibility of cards beyond the first six
//         for (let i = 6; i < projectCards.length; i++) {
//             projectCards[i].style.display = isExpanded ? 'none' : 'block'; // Adjust based on the current expansion state
//         }

//         // Update button text accordingly
//         document.getElementById('button__more').querySelector('.text').textContent = isExpanded ? 'See More' : 'Show Less';
//     }

//     // Initial hiding of extra project cards beyond the first 6 for the 'current-projects' section
//     toggleProjectCardsVisibility();

//     // Event listener for the "See More"/"Show Less" button
//     document.getElementById('button__more').addEventListener('click', function() {
//         toggleProjectCardsVisibility();
//     });

//     // Event listeners for tab switching
//     document.querySelectorAll('.project__links').forEach(tab => {
//         tab.addEventListener('click', function(e) {
//             e.preventDefault(); // Prevent default anchor action

//             const targetId = this.getAttribute('data-bs-target').replace('#', '') + '-projects';
//             activeSection = targetId; // Update the active section based on clicked tab

//             // Toggle visibility and class state of each tab pane
//             document.querySelectorAll('.tab-pane').forEach(tabPane => {
//                 if (tabPane.id === targetId) {
//                     tabPane.classList.add('show', 'active');
//                     tabPane.style.display = 'flex'; // Show active tab with flex display
//                 } else {
//                     tabPane.classList.remove('show', 'active');
//                     tabPane.style.display = 'none'; // Hide inactive tabs
//                 }
//             });

//             // Reset visibility of project cards to initial state when tab changes
//             toggleProjectCardsVisibility();
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     let currentSection = 'current-projects'; 
//     let completedSection = 'completed-projects';
//     let activeSection = completedSection;  // Start with 'completed-projects' as the default active section

//     // Function to toggle visibility of project cards beyond the first 6
//     function toggleProjectCardsVisibility() {
//         const projectCards = document.querySelectorAll(`#${activeSection} .project__card`);
//         const isExpanded = projectCards[6] && projectCards[6].style.display !== 'none';

//         // Toggle visibility of cards beyond the first six
//         for (let i = 6; i < projectCards.length; i++) {
//             projectCards[i].style.display = isExpanded ? 'none' : 'block'; // Or 'flex' if your layout uses flexbox
//         }

//         // Update button text accordingly
//         document.getElementById('button__more').querySelector('.text').textContent = isExpanded ? 'See More' : 'Show Less';
//     }

//     // Initial hiding of extra project cards beyond the first 6 for the default section
//     toggleProjectCardsVisibility();

//     // Event listener for the "See More"/"Show Less" button
//     document.getElementById('button__more').addEventListener('click', function() {
//         toggleProjectCardsVisibility();
//     });

//     // Event listeners for tab switching
//     document.querySelectorAll('.project__links').forEach(tab => {
//         tab.addEventListener('click', function(e) {
//             e.preventDefault(); // Prevent default anchor action

//             const targetId = this.getAttribute('data-bs-target').replace('#', '') + '-projects';
//             activeSection = targetId; // Update the active section based on clicked tab

//             // Toggle visibility and class state of each tab pane
//             document.querySelectorAll('.tab-pane').forEach(tabPane => {
//                 if (tabPane.id === targetId) {
//                     tabPane.classList.add('show', 'active');
//                     tabPane.style.display = 'flex'; // Ensure it uses display flex
//                 } else {
//                     tabPane.classList.remove('show', 'active');
//                     tabPane.style.display = 'none'; // Hide inactive tabs
//                 }
//             });

//             // Reset visibility of project cards to initial state when tab changes
//             toggleProjectCardsVisibility();
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements to avoid repeated queries
    const tabs = document.querySelectorAll('.project__links');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const buttonMore = document.getElementById('button__more');
    const buttonText = buttonMore.querySelector('.text');

    let activeSection = 'completed-projects';  // Default active section

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

    // Hide extra cards on initial load
    toggleProjectCardsVisibility();

    // Event listener for the "See More"/"Show Less" button
    buttonMore.addEventListener('click', function() {
        toggleProjectCardsVisibility();
    });

    // Event listeners for tab switching
    // tabs.forEach(tab => {
    //     tab.addEventListener('click', function(e) {
    //         e.preventDefault(); // Prevent default anchor action

    //         // Update active section
    //         activeSection = this.getAttribute('data-bs-target').replace('#', '') + '-projects';

    //         // Toggle tab pane visibility
    //         tabPanes.forEach(tabPane => {
    //             if (tabPane.id === activeSection) {
    //                 tabPane.classList.add('show', 'active');
    //                 tabPane.style.display = 'flex'; // Make sure it uses display flex or adjust as per your CSS
    //             } else {
    //                 tabPane.classList.remove('show', 'active');
    //                 tabPane.style.display = 'none'; // Hide inactive tabs
    //             }
    //         });

    //         // Reset visibility of project cards to initial state
    //         toggleProjectCardsVisibility();
    //     });
    // });
    // const completedSection = 
});
