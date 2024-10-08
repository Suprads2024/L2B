let onSlide = false;
let intervalId = null;

window.addEventListener("load", () => {
   startAutoSlide();

   const dots = document.querySelectorAll(".carousel_dot");
   for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => {
         stopAutoSlide();  // Detenemos el autoSlide cuando se interactúa manualmente
         slide(i);
         startAutoSlide(); // Reiniciamos el autoSlide después de la interacción
      });
   }

   const buttonPrev = document.querySelector(".carousel_button__prev");
   const buttonNext = document.querySelector(".carousel_button__next");
   buttonPrev.addEventListener("click", () => {
      stopAutoSlide();
      slide(getItemActiveIndex() - 1);
      startAutoSlide();
   });
   buttonNext.addEventListener("click", () => {
      stopAutoSlide();
      slide(getItemActiveIndex() + 1);
      startAutoSlide();
   });
});

function startAutoSlide() {
   intervalId = setInterval(() => {
      slide(getItemActiveIndex() + 1);
   }, 3000); // Cambiar el tiempo si necesitas ajustar la velocidad del autoSlide
}

function stopAutoSlide() {
   clearInterval(intervalId);
}

function slide(toIndex) {
   if (onSlide) return;
   onSlide = true;

   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   let newItemActive = null;

   // Ajustar toIndex para ciclo infinito
   if (toIndex >= itemsArray.length) toIndex = 0;
   if (toIndex < 0) toIndex = itemsArray.length - 1;

   newItemActive = itemsArray[toIndex];

   // Transición hacia la derecha
   if (toIndex > itemActiveIndex) {
      newItemActive.classList.add("carousel_item__pos_next");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__next");
         itemActive.classList.add("carousel_item__next");
      }, 20);
   } else { // Transición hacia la izquierda
      newItemActive.classList.add("carousel_item__pos_prev");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__prev");
         itemActive.classList.add("carousel_item__prev");
      }, 20);
   }

   // Limpieza y reactivación
   newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
      onSlide = false;
   }, { once: true });

   slideIndicator(toIndex);
}

function getItemActiveIndex() {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   return itemsArray.indexOf(itemActive);
}

function slideIndicator(toIndex) {
   const dots = document.querySelectorAll(".carousel_dot");
   const dotActive = document.querySelector(".carousel_dot__active");
   const newDotActive = dots[toIndex];

   dotActive.classList.remove("carousel_dot__active");
   newDotActive.classList.add("carousel_dot__active");
}
