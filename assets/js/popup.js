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
    const popupSeen = sessionStorage.getItem("popupSeen");
    if (!popupSeen) {
        showPopup();
    }

    const acknowledgeBtn = document.getElementById("acknowledge-btn");
    acknowledgeBtn.addEventListener("click", function() {
        hidePopup();
        sessionStorage.setItem("popupSeen", "true");
    });
}

// Execute the popup logic when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", handlePopup);
