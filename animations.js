document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll(
        ".sub-brand-box, .about-card, .portfolio-item, .phase-card, .module-card, .guide-card"
    );

    // Add the 'reveal' class to all target elements automatically
    revealElements.forEach(el => el.classList.add("reveal"));

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 120; // Pixels from bottom of screen to trigger

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add("active");
            }
        });
    };

    // Run on scroll and once on load
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
});

window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    const progressBar = document.getElementById("myBar");
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
}