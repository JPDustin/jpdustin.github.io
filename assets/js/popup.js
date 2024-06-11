// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

// Function to show the popup
function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}

// Function to hide the popup
function hidePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Function to handle popup logic
function handlePopup() {
    const popupSeen = getCookie("popupSeen");
    if (!popupSeen) {
        showPopup();
    }

    const acknowledgeBtn = document.getElementById("acknowledge-btn");
    acknowledgeBtn.addEventListener("click", function() {
        hidePopup();
        setCookie("popupSeen", "true", 1); // Set cookie to expire in 1 day
    });
}

// Clear the popup cookie when the window is closed
window.addEventListener("unload", function() {
    document.cookie = "popupSeen=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
});

// Execute the popup logic when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", handlePopup);
