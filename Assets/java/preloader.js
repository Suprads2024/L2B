// Cuando la ventana termina de cargar
window.addEventListener('load', function() {
    // Espera a que termine la animación antes de ocultar el preloader
    setTimeout(function() {
      document.getElementById('preloader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, 600); // 600ms para que coincida con la duración de la animación closeIn
  });