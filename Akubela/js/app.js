// Seleccionamos los elementos principales
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const carousel = document.querySelector('.carousel');
const list = document.querySelector('.list');
const runningTime = document.querySelector('.carousel .timeRunning');
let items = document.querySelectorAll('.item'); // Lista actualizada de elementos

// Configuraciones
const timeRunning = 3000; // Tiempo de animación entre movimientos
const timeAutoNext = 7000; // Tiempo para avanzar automáticamente
let autoNextTimeout;

// Función para mover el carrusel
function showSlider(direction) {
    // Actualizamos los elementos del carrusel (por si cambian dinámicamente)
    items = document.querySelectorAll('.item');

    if (direction === 'next') {
        // Mover al siguiente: El primer elemento se mueve al final
        list.appendChild(items[0]);
        carousel.classList.add('next');
    } else if (direction === 'prev') {
        // Mover al anterior: El último elemento se mueve al inicio
        list.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }

    // Reiniciar las clases después de la animación
    setTimeout(() => {
        carousel.classList.remove('next', 'prev');
    }, timeRunning);

    // Reiniciar temporizadores y animaciones
    resetAutoNext();
    resetTimeAnimation();
}

// Función para reiniciar la animación de tiempo
function resetTimeAnimation() {
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; // Fuerza un "reflow" para reiniciar la animación
    runningTime.style.animation = 'runningTime 7s linear 1 forwards';
}

// Función para reiniciar el auto-deslizamiento
function resetAutoNext() {
    clearTimeout(autoNextTimeout);
    autoNextTimeout = setTimeout(() => {
        showSlider('next');
    }, timeAutoNext);
}

// Eventos de los botones
nextBtn.onclick = () => showSlider('next');
prevBtn.onclick = () => showSlider('prev');

// Configuración inicial
resetTimeAnimation();
resetAutoNext();