// Selecciona todos los carruseles en la página
document.querySelectorAll('.carousel-container').forEach(carousel => {
    const slider = carousel.querySelector(".slider");
    const leftArrow = carousel.querySelector(".arrow.left");
    const rightArrow = carousel.querySelector(".arrow.right");

    // Detecta si es un carrusel con slider-controls o slider-controls2
    const indicatorParents = carousel.querySelector('.slider-controls ul') || 
                             carousel.querySelector('.slider-controls2 ul');
    const indicators = carousel.querySelectorAll('.slider-controls li') || 
                       carousel.querySelectorAll('.slider-controls2 li');
    const slides = carousel.querySelectorAll('.slider section');
    let sectionIndex = 0;
    const numberOfSlides = slides.length;

    // Actualiza la posición del slider
    function updateSliderPosition() {
        const selectedIndicator = carousel.querySelector('.slider-controls .selected') || 
                                  carousel.querySelector('.slider-controls2 .selected');
        if (selectedIndicator) {
            selectedIndicator.classList.remove('selected');
        }
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

    // Si el carrusel tiene la clase "autoplay-carousel", activa la reproducción automática
    if (carousel.classList.contains('autoplay-carousel')) {
        setInterval(() => {
            sectionIndex = (sectionIndex < numberOfSlides - 1) ? sectionIndex + 1 : 0;
            updateSliderPosition();
        }, 7000); // Cambia de imagen cada 7 segundos
    }
});
