const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
let interval;

// Show Slide
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

// Next Slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Previous Slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Auto Play
function startAutoPlay() {
    interval = setInterval(nextSlide, 3000);
}

// Stop Auto Play
function stopAutoPlay() {
    clearInterval(interval);
}

// Event Listeners
nextBtn.addEventListener("click", () => {
    nextSlide();
    stopAutoPlay();
    startAutoPlay();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
});

// Start automatically
startAutoPlay();