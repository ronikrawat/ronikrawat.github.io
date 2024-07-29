// script.js

// Function to dynamically add a new project to the list
function addProject() {
    const projectList = document.getElementById('project-list');
    const newProject = document.createElement('li');
    const projectName = prompt("Enter the project name:");
    const projectDescription = prompt("Enter the project description:");
    newProject.innerHTML = `<strong>${projectName}</strong>: ${projectDescription}`;
    projectList.appendChild(newProject);
}

// Function to display the current date in the footer
function displayDate() {
    const footer = document.querySelector('footer');
    const date = new Date();
    footer.innerHTML = `<p>&copy; ${date.getFullYear()} Ronik Rawat. All rights reserved.</p>`;
}

// Call displayDate on page load
window.onload = displayDate;
