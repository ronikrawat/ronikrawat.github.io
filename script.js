// script.js

// Function to display the current year in the footer
function displayYear() {
    const footerYear = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    footerYear.textContent = currentYear;
}

// Call displayYear on page load
window.onload = displayYear;
