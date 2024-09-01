let currentSlide = 0;

// Function to load carousel data from local JSON
function loadCarouselData() {
    fetch('./assets/js/localData.json')
        .then(response => response.json())
        .then(data => {
            const slides = data.slides;
            const carouselInner = document.getElementById('carousel-inner');

            slides.forEach((slide, index) => {
                const slideElement = document.createElement('div');
                slideElement.className = `carousel-item${index === 0 ? ' active' : ''}`;
                slideElement.innerHTML = `
                    <img src="${slide.image}" alt="${slide.title}">
                    <div class="carousel-caption">
                        <h3>${slide.link ? `<a href="${slide.link}" class="carousel-link">${slide.title}</a>` : slide.title}</h3>
                        <p>${slide.description}</p>
                    </div>
                    <a class="carousel-control prev" onclick="moveSlide(-1)">&#10094;</a>
                    <a class="carousel-control next" onclick="moveSlide(1)">&#10095;</a>
                `;
                carouselInner.appendChild(slideElement);
            });

            // Start the carousel
            showSlide(currentSlide);
            startAutoAdvance();
        })
        .catch(error => console.error('Error loading carousel data:', error));
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Function to start auto-advancing the slides
function startAutoAdvance() {
    setInterval(() => {
        moveSlide(1); // Move to the next slide
    }, 7000); // Change slides every 7 seconds (7000 milliseconds)
}

// Initialize the carousel by loading data
loadCarouselData();


// JavaScript for "Return to Top" functionality
window.addEventListener('scroll', function () {
    var returnToTop = document.getElementById('return-to-top');
    if (window.scrollY > 200) { // Adjust this number to control when the button appears
        returnToTop.style.display = 'block';
    } else {
        returnToTop.style.display = 'none';
    }
});

document.getElementById('return-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Get the modal
var modal = document.getElementById("campaignModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// Get the button that closes the modal
var closeButton = document.getElementById("closeModalButton");

// Open the modal when the page loads
window.onload = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks on the button, close the modal
closeButton.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}