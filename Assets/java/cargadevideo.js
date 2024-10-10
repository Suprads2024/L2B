document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.video-mobile');

    video.oncanplaythrough = () => {
        video.play();
    };

    video.onerror = () => {
        // Si el video no se carga, muestra una imagen de respaldo
        video.parentElement.innerHTML = '<img src="Assets/Header/Tecnologia y calidad/FondoAlternativo.png" alt="Fondo alternativo">';
    };
});
