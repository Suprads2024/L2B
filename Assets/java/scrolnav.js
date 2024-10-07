window.addEventListener('scroll', function() {
  const menuBar = document.querySelector('.menu__bar');
  if (window.scrollY > 50) {  // Cambia '50' por la cantidad de scroll en píxeles donde quieres que se active
      menuBar.classList.add('scrolled');
  } else {
      menuBar.classList.remove('scrolled');
  }
});
