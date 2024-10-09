const toggleMenu = () => {
    const navigation = document.querySelector(".navigation");
    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute("src");
  
    // Cambia el ícono del menú hamburguesa
    const isBurger = src.includes("burger-menu.svg");
    const iconName = isBurger ? src.replace("burger-menu.svg", "close.svg") : src.replace("close.svg", "burger-menu.svg");
    burgerMenu.setAttribute("src", iconName);

    // Mostrar o esconder el menú principal
    if (!isBurger) {
        navigation.classList.add("navigation--mobile--fadeout");
        setTimeout(() => {
            navigation.classList.toggle("navigation--mobile");
        }, 300);
    } else {
        navigation.classList.remove("navigation--mobile--fadeout");
        navigation.classList.toggle("navigation--mobile");
    }
};

// Evento para abrir/cerrar submenús al hacer clic en elementos con submenú
document.querySelectorAll('.navigation > li:has(ul) > a').forEach(link => {
    link.addEventListener('click', (event) => {
        // Evitar redirección
        event.preventDefault();
        
        // Evitar cerrar el menú si el enlace tiene un submenú
        event.stopPropagation();
        
        const parentLi = event.target.parentElement;

        // Alternar el submenú
        parentLi.classList.toggle('open-submenu');

        // Alternar flecha de submenú
        const arrow = parentLi.querySelector('.dropdown-arrow');
        if (arrow) {
            arrow.classList.toggle('rotate-arrow');
        }
    });
});

// Evento para cerrar el menú al hacer clic en un enlace sin submenú
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', (event) => {
        const parentLi = event.target.closest('li');
        const hasSubmenu = parentLi && parentLi.querySelector('.submenu');
        
        // Si el enlace no tiene submenú, cierra el menú móvil
        if (!hasSubmenu) {
            toggleMenu();
        }
    });
});
