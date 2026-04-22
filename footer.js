document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer class="main-footer">
        <div class="container footer-grid">
            <div class="footer-col branding">
                <div class="logo">WebNova<span>Studio</span></div>
                <p>Empowering businesses through premium design and educating the next generation of digital creators at Code Craft Academic.</p>
                <div class="footer-socials">
                    <a href="#"><i class="fab fa-telegram"></i></a>
                    <a href="#"><i class="fab fa-discord"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>

            <div class="footer-col">
                <h4>WebNova Studio</h4>
                <ul>
                    <li><a href="course.html">Web Development</a></li>
                <li><a href="index.html">Digital Marketing</a></li>
                <li><a href="index.html">Branding & Design</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Code Craft Academic</h4>
                <ul>
                    <li><a href="course.html">Free Notes</a></li>
                <li><a href="index.html">Video Tutorials</a></li>
                <li><a href="index.html">Freelancers Hub</a></li>
                <li><a href="index.html">Career Guides</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                <li><a href="our-story.html">About Us</a></li>
                <li><a href="contact.html">Contact Support</a></li>
                <li><a href="index.html">Privacy Policy</a></li>
                <li><a href="index.html">Terms of Service</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2026 WebNova Studio & Code Craft Academic. All Rights Reserved.</p>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
function closeResourceAlert() {
    const alertBox = document.getElementById('resourceAlert');
    
    // 1. Add a fade-out effect
    alertBox.style.opacity = '0';
    alertBox.style.transform = 'translateY(20px)';
    alertBox.style.transition = 'all 0.5s ease';

    // 2. Remove it from the layout after the animation ends
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 500);
}