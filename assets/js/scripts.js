let currentSlide = 0;

// Function to load carousel data from local JSON
function loadCarouselData() {
    fetch('../assets/js/localData.json')
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

            showSlide(currentSlide);
            startAutoAdvance(); // Start the auto-advance after loading the slides
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
