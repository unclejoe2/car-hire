let leftSlider = document.getElementById("left-slider");
let rightSlider = document.getElementById("right-slider");

let leftImages = leftSlider.querySelectorAll("img");
let rightImages = rightSlider.querySelectorAll("img");

let currentLeft = 0;
let currentRight = 0;

function switchImage(slider, images, currentIndex) {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
    return currentIndex;
}

function autoSlide() {
    currentLeft = switchImage(leftSlider, leftImages, currentLeft);
    currentRight = switchImage(rightSlider, rightImages, currentRight);
}

setInterval(autoSlide, 2000);
