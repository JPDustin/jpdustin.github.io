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
                `;
                carouselInner.appendChild(slideElement);
            });

            // Now that slides are added, start the carousel
            showSlide(currentSlide);
            startAutoAdvance();
        })
        .catch(error => console.error('Error loading carousel data:', error));
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
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
