window.addEventListener('scroll', function() {
    const logoImg = document.getElementById('logo-img');
    if (window.scrollY > 50) {  // Ajusta este valor según el momento en que quieras que se cambie el logo
        logoImg.src = 'Assets/2daUnidad/L2B_Logo menu.png'; // Ruta de la imagen negra
    } else {
        logoImg.src = 'Assets/2daUnidad/L2B_Logo menu.png'; // Ruta de la imagen blanca
    }
});