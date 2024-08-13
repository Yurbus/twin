const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('visible', 'top', 'middle', 'bottom');
        slide.style.display = 'none';
    });

    // Set the three visible slides
    let nextIndex = (currentSlide + 1) % slides.length;
    let nextNextIndex = (currentSlide + 2) % slides.length;

    slides[currentSlide].classList.add('visible', 'top');
    slides[currentSlide].style.display = 'block';

    slides[nextIndex].classList.add('visible', 'middle');
    slides[nextIndex].style.display = 'block';

    slides[nextNextIndex].classList.add('visible', 'bottom');
    slides[nextNextIndex].style.display = 'block';
}

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
});

// Initial setup
updateSlides();
