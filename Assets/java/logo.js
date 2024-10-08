window.addEventListener('scroll', function() {
    const logoImg = document.getElementById('logo-img');
    const currentSrc = logoImg.getAttribute('src');

    // Define la parte común de la ruta de la imagen sin los "../" o "Assets/"
    const logoPathWhite = "L2B_Logo menu.png"; // nombre de la imagen blanca
    const logoPathBlack = "L2B_Logo menu.png"; // nombre de la imagen negra

    // Verifica si el src contiene "L2B_Logo menu.png" para blanco o negro según sea el caso
    if (window.scrollY > 50) {
        // Cambia a la imagen negra
        if (currentSrc.includes("../")) {
            logoImg.src = `../Assets/2daUnidad/${logoPathBlack}`;
        } else {
            logoImg.src = `Assets/2daUnidad/${logoPathBlack}`;
        }
    } else {
        // Cambia a la imagen blanca
        if (currentSrc.includes("../")) {
            logoImg.src = `../Assets/2daUnidad/${logoPathWhite}`;
        } else {
            logoImg.src = `Assets/2daUnidad/${logoPathWhite}`;
        }
    }
});
