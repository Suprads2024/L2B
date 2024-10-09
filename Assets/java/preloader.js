// Espera a que la ventana cargue completamente
window.addEventListener('load', function() {
  // Al finalizar la carga, ocultar el preloader después de la animación
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('content').style.display = 'block';
});
