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
        })
        .catch(error => console.error('Error loading carousel data:', error));
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the carousel by loading data
loadCarouselData();
