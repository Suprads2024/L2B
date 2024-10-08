const toggleMenu = () => {
    const navigation = document.querySelector(".navigation");
    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute("src");
  
    // Verifica si contiene "burger-menu.svg" en la ruta, sin importar si es "Assets" o "../Assets"
    const isBurger = src.includes("burger-menu.svg");
    const iconName = isBurger ? src.replace("burger-menu.svg", "close.svg") : src.replace("close.svg", "burger-menu.svg");

    burgerMenu.setAttribute("src", iconName);

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

// Añadir evento para cerrar el menú al hacer clic en un enlace de navegación
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', () => {
        const navigation = document.querySelector(".navigation");

        // Solo cerrar el menú si está abierto
        if (navigation.classList.contains("navigation--mobile")) {
            toggleMenu();
        }
    });
});
