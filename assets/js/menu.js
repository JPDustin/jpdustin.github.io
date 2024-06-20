document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    console.log("Script loaded and DOMContentLoaded event fired");

    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            console.log("Menu toggled");
        });
    } else {
        console.error("Menu toggle button not found");
    }

    // Optional: Close menu when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
});
