const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const indicatorParents = document.querySelector('.slider-controls ul');
let sectionIndex = 0;
const numberOfSlides = document.querySelectorAll('.slider section').length;

document.querySelectorAll('.slider-controls li').forEach((indicator, ind) => {
    indicator.addEventListener('click', () => {
        sectionIndex = ind;
        updateSliderPosition();
    });
});

rightArrow.addEventListener('click', () => {
    sectionIndex = (sectionIndex < numberOfSlides - 1) ? sectionIndex + 1 : 0;
    updateSliderPosition();
});

leftArrow.addEventListener('click', () => {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : numberOfSlides - 1;
    updateSliderPosition();
});

function updateSliderPosition() {
    document.querySelector('.slider-controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = `translateX(-${sectionIndex * 100}%)`;
}
