// Background Image Slideshow
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function changeSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
}

// Change slide every 5 seconds
setInterval(changeSlide, 5000);
