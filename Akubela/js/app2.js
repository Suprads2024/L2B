// Configuraciones generales
const timeRunning = 3000; // Tiempo de animación entre movimientos
const timeAutoNext = 7000; // Tiempo para avanzar automáticamente

// Inicializar todos los carruseles
document.querySelectorAll('.carousel2').forEach((carousel2) => {
    const list = carousel2.querySelector('.list');
    const nextBtn = carousel2.querySelector('.next');
    const prevBtn = carousel2.querySelector('.prev');
    const runningTime = carousel2.querySelector('.timeRunning');
    let items = carousel2.querySelectorAll('.item');
    let autoNextTimeout;

    // Función para mover el carrusel
    function showSlider(direction) {
        items = carousel2.querySelectorAll('.item'); // Actualizar elementos dinámicamente

        if (direction === 'next') {
            // Mover al siguiente: El primer elemento se mueve al final
            list.appendChild(items[0]);
            carousel2.classList.add('next');
        } else if (direction === 'prev') {
            // Mover al anterior: El último elemento se mueve al inicio
            list.prepend(items[items.length - 1]);
            carousel2.classList.add('prev');
        }

        // Reiniciar las clases después de la animación
        setTimeout(() => {
            carousel2.classList.remove('next', 'prev');
        }, timeRunning);

        // Reiniciar temporizadores y animaciones
        resetAutoNext();
        resetTimeAnimation();
    }

    // Función para reiniciar la animación de tiempo
    function resetTimeAnimation() {
        if (runningTime) {
            runningTime.style.animation = 'none';
            runningTime.offsetHeight; // Forzar "reflow" para reiniciar la animación
            runningTime.style.animation = 'runningTime 7s linear 1 forwards';
        }
    }

    // Función para reiniciar el auto-deslizamiento
    function resetAutoNext() {
        clearTimeout(autoNextTimeout);
        autoNextTimeout = setTimeout(() => {
            showSlider('next');
        }, timeAutoNext);
    }

    // Configuración inicial del carrusel
    function initializeCarousel2() {
        // Garantizar que el primer elemento siempre sea visible al inicio
        items = carousel2.querySelectorAll('.item');

        // Colocar el primer elemento como inicial
        while (list.firstChild !== items[0]) {
            list.appendChild(list.firstChild);
        }

        // Configurar animaciones iniciales
        resetTimeAnimation();
        resetAutoNext();
    }

    // Eventos de los botones
    if (nextBtn && prevBtn) {
        nextBtn.onclick = () => showSlider('next');
        prevBtn.onclick = () => showSlider('prev');
    }

    // Pausar el auto-deslizamiento al pasar el mouse o tocar la pantalla
    function pauseAutoNext() {
        clearTimeout(autoNextTimeout);
        if (runningTime) {
            runningTime.style.animation = 'none'; // Detener la animación visual
        }
    }

    // Reanudar el auto-deslizamiento al quitar el mouse o detener el toque
    function resumeAutoNext() {
        resetTimeAnimation();
        resetAutoNext();
    }

    // Añadir eventos para pausar y reanudar en dispositivos táctiles y escritorio
    carousel2.addEventListener('mouseenter', pauseAutoNext); // Pausa en escritorio
    carousel2.addEventListener('mouseleave', resumeAutoNext); // Reanuda en escritorio
    carousel2.addEventListener('touchstart', pauseAutoNext); // Pausa en dispositivos táctiles
    carousel2.addEventListener('touchend', resumeAutoNext); // Reanuda en dispositivos táctiles

    // Inicializar el carrusel actual
    initializeCarousel2();
});
