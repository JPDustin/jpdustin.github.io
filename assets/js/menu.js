document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    const menuToggle = document.querySelector(".menu-toggle");
    console.log("menuToggle:", menuToggle);  // Check if the element is null
    const navMenu = document.querySelector("nav");
    console.log("navMenu:", navMenu);  // Should also log the nav element

    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            console.log("Toggle active class");
        });
    } else {
        console.error("Menu toggle button not found on the page.");
    }
});
