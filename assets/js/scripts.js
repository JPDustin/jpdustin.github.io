let currentSlide = 0;

// Function to load carousel data from local JSON
function loadCarouselData() {
    fetch('../assets/js/localData.json')
        .then(response => response.json())
        .then(data => {
            const slides = data.slides;
            const carouselInner = document.getElementById('carousel-inner');

            // Create each slide dynamically based on the JSON data
            slides.forEach((slide, index) => {
                const slideElement = document.createElement('div');
                slideElement.className = `carousel-item${index === 0 ? ' active' : ''}`;
                slideElement.innerHTML = `
                    <img src="${slide.image}" alt="${slide.title}">
                    <div class="carousel-caption">
                        <h3><a href="${slide.url}" target="_blank">${slide.title}</a></h3>
                        <p>${slide.description}</p>
                    </div>
                `;
                carouselInner.appendChild(slideElement);
            });

            showSlide(currentSlide);
        })
        .catch(error => console.error('Error loading carousel data:', error));
}

// Function to display a specific slide
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

// Function to move between slides
function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the carousel by loading data
document.addEventListener('DOMContentLoaded', loadCarouselData);
