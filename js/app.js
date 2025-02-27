import lottie from 'lottie-web';

// Load animation
lottie.loadAnimation({
    container: document.getElementById('lottie-container'), // ID of the div where animation will be rendered
    renderer: 'svg', // 'svg', 'canvas', or 'html'
    loop: true, // Set to false for a single play
    autoplay: true,
    path: 'animation.json' // Path to your Lottie JSON file
});

// Example: Add scroll animations
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-fade-in, .animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0", "translate-x-0");
        }
      });
    });
  
    elements.forEach((el) => {
      observer.observe(el);
    });
  });