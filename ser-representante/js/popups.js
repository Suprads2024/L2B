document.addEventListener("DOMContentLoaded", function () {
    // 🟢 Función para abrir/cerrar popups
    function setupPopup(openElements, popupId, closeBtnId) {
        const popup = document.getElementById(popupId);
        const closeBtn = document.getElementById(closeBtnId);

        if (popup && closeBtn) {
            openElements.forEach(element => {
                element.addEventListener("click", function () {
                    popup.style.display = "flex";
                });
            });

            closeBtn.addEventListener("click", function () {
                popup.style.display = "none";
            });

            // Cerrar si hacen clic fuera del popup
            window.addEventListener("click", function (event) {
                if (event.target === popup) {
                    popup.style.display = "none";
                }
            });
        }
    }

    // 🟢 Popup Starter Kit Fibaro (se abre con la imagen y el socalo-green)
    const starterKitElements = [
        document.getElementById("open-popup"), 
        ...document.querySelectorAll(".carousel .slider img")
    ];
    setupPopup(starterKitElements, "popup-container", "close-popup");

    // 🟢 Popup Yubii Home
    setupPopup([document.getElementById("open-popup-yubii")], "popup-container-yubii", "close-popup-yubii");

    // 🟢 Popup FIBARO Home Center 3
    setupPopup([document.getElementById("open-popup-fibaro")], "popup-container-fibaro", "close-popup-fibaro");
});
