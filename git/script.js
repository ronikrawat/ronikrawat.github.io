document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".toggle-header");

    headers.forEach(header => {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const isVisible = content.style.display === "block";

            // Close all content sections first
            document.querySelectorAll(".content").forEach(content => {
                content.style.display = "none";
            });

            // Toggle the clicked section
            content.style.display = isVisible ? "none" : "block";
        });
    });

    // Optional: Collapse all sections by default
    document.querySelectorAll(".content").forEach(content => {
        content.style.display = "none";
    });
});
