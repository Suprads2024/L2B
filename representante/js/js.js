// Selecciona todos los carruseles en la página
document.querySelectorAll('.carousel-container').forEach(carousel => {
    const slider = carousel.querySelector(".slider");
    const leftArrow = carousel.querySelector(".arrow.left");
    const rightArrow = carousel.querySelector(".arrow.right");
    const indicatorParents = carousel.querySelector('.slider-controls ul');
    const indicators = carousel.querySelectorAll('.slider-controls li');
    const slides = carousel.querySelectorAll('.slider section');
    let sectionIndex = 0;
    const numberOfSlides = slides.length;

    // Actualiza la posición del slider
    function updateSliderPosition() {
        carousel.querySelector('.slider-controls .selected').classList.remove('selected');
        indicatorParents.children[sectionIndex].classList.add('selected');
        slider.style.transform = `translateX(-${sectionIndex * 100}%)`;
    }

    // Evento para los indicadores (puntos)
    indicators.forEach((indicator, ind) => {
        indicator.addEventListener('click', () => {
            sectionIndex = ind;
            updateSliderPosition();
        });
    });

    // Evento para flecha derecha
    rightArrow.addEventListener('click', () => {
        sectionIndex = (sectionIndex < numberOfSlides - 1) ? sectionIndex + 1 : 0;
        updateSliderPosition();
    });

    // Evento para flecha izquierda
    leftArrow.addEventListener('click', () => {
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : numberOfSlides - 1;
        updateSliderPosition();
    });
});
