/**
 * FILE: script.js
 * PROJECT: Mood Cafe and Lounge Bar
 * AUTHOR: Coded and designed by Cielle Mae Peñamora
 * DATE: 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    /**
     * Show a specific section and update navigation state
     * @param {string} sectionId - The ID of the section to show
     */
    function showSection(sectionId) {
        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Show the selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            // Home section uses grid layout
            if (sectionId === 'home') {
                targetSection.style.display = 'grid';
                body.classList.remove('section-view');
            } else {
                targetSection.style.display = 'flex';
                body.classList.add('section-view');
            }
        }

        // Add active class to corresponding link
        const activeLink = Array.from(navLinks).find(link => link.dataset.section === sectionId);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.dataset.section;
            if (sectionId) {
                showSection(sectionId);
            }
        });
    });

    // Handle initial state if needed
    // showSection('home');
});
