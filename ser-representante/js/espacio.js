document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href'); // Obtiene el ID del destino
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault(); // Previene el comportamiento predeterminado

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 150; // Altura en píxeles que quieres compensar
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Calcula la posición absoluta
                const adjustedPosition = elementPosition - offset; // Ajusta la posición final

                // Realiza el scroll ajustado
                window.scrollTo({
                    top: adjustedPosition,
                    behavior: 'smooth' // Animación suave
                });
            }
        }
    });
});
