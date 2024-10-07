// JavaScript para controlar los popups
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const popupId = this.getAttribute('data-id');
        const popup = document.getElementById('popup-' + popupId);
        popup.style.display = 'flex'; // Mostrar el popup correspondiente
    });
});

// Cerrar los popups al hacer clic en la "X"
document.querySelectorAll('.popup-close').forEach(button => {
    button.addEventListener('click', function() {
        const popupId = this.getAttribute('data-id');
        document.getElementById('popup-' + popupId).style.display = 'none';
    });
});


