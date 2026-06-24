// Mobile Navigation Toggle Engine
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents immediate closing glitches
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Closes the menu automatically if you click anywhere outside of it
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});

const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
        window.addEventListener('resize', resizeCanvas); resizeCanvas();

        let dots = []; const dotCount = 45;
        class Dot {
            constructor() { this.reset(); }
            reset() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.vx = (Math.random() - 0.5) * 0.4; this.vy = (Math.random() - 0.5) * 0.4; this.radius = Math.random() * 2 + 1; }
            update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > canvas.width) this.vx *= -1; if (this.y < 0 || this.y > canvas.height) this.vy *= -1; }
            draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.fillStyle = 'rgba(37, 99, 235, 0.15)'; ctx.fill(); }
        }
        function init() { for (let i = 0; i < dotCount; i++) dots.push(new Dot()); }
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dots.forEach((dot, i) => {
                dot.update(); dot.draw();
                for (let j = i + 1; j < dots.length; j++) {
                    const dist = Math.hypot(dot.x - dots[j].x, dot.y - dots[j].y);
                    if (dist < 130) {
                        ctx.beginPath(); ctx.strokeStyle = `rgba(37, 99, 235, ${0.08 * (1 - dist / 130)})`;
                        ctx.lineWidth = 1; ctx.moveTo(dot.x, dot.y); ctx.lineTo(dots[j].x, dots[j].y); ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(animate);
        }
        init(); animate();

        window.addEventListener('scroll', () => {
            const reveals = document.querySelectorAll('.sub-brand-box, .about-card');
            reveals.forEach(el => {
                if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
            });
        });

function closeResourceAlert() {
    const alertBox = document.getElementById('resourceAlert');
    if (alertBox) { 
        alertBox.style.setProperty('display', 'none', 'important'); 
    }
}

        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        menuToggle.addEventListener('click', () => { menuToggle.classList.toggle('active'); navLinks.classList.toggle('active'); });

        window.onload = function() {
            if (!localStorage.getItem('hideLogicModal')) {
                const overlay = document.getElementById('logicModal');
                overlay.style.display = 'flex';
                setTimeout(() => { overlay.classList.add('active'); }, 100);
            }
            const reveals = document.querySelectorAll('.sub-brand-box, .about-card');
            reveals.forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('active'); });
        }
        function handleLogicClose() {
            if (document.getElementById('dontShow').checked) localStorage.setItem('hideLogicModal', 'true');
            const overlay = document.getElementById('logicModal');
            overlay.classList.remove('active'); setTimeout(() => { overlay.style.display = 'none'; }, 400);
        }

        // DYNAMIC FOOTER RENDER MATRIX INSULATOR
(function injectProfessionalFooter() {
    const footerHTML = `
    <footer class="main-footer">
        <div class="footer-grid">
            
            <!-- COLUMN 1: BRAND SUMMARY & SOCIALS -->
            <div class="footer-col">
                <h4 class="footer-brand-title">WebNova Studio</h4>
                <p>Empowering businesses through premium design and educating the next generation of digital creators at Code Craft Academic.</p>
                <div class="footer-socials">
                    <a href="https://t.me/CodeCraftAcademic" target="_blank" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
                    <a href="#" aria-label="Discord"><i class="fab fa-discord"></i></a>
                    <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>

            <!-- COLUMN 2: STUDIO SERVICES -->
            <div class="footer-col">
                <h4>WebNova Studio</h4>
                <ul>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                    <li><a href="#">Branding & Design</a></li>
                    <li><a href="#">Portfolio</a></li>
                </ul>
            </div>

            <!-- COLUMN 3: ACADEMY EDITIONS -->
            <div class="footer-col">
                <h4>Code Craft Academic</h4>
                <ul>
                    <li><a href="free-resources.html">Free Notes</a></li>
                    <li><a href="#">Video Tutorials</a></li>
                    <li><a href="#">Freelancers Hub</a></li>
                    <li><a href="#">Career Guides</a></li>
                </ul>
            </div>

            <!-- COLUMN 4: NAV UTILITIES -->
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="contact.html">Contact Support</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>

        </div>

        <!-- LOWER CREDITS RUNTIME -->
        <div class="footer-bottom">
            <p>&copy; 2026 WebNova Studio | Designed & Developed by Rakesh Jadhav | Rashmi Divantgi</p>
        </div>
    </footer>
    `;

    // Append safely straight to the body stream
    document.body.insertAdjacentHTML('beforeend', footerHTML);
})();


    (function() {
        const canvas = document.getElementById('hero-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let particles = [];
        const particleCount = 120; // Perfect optimization density for hero box bounding fields

        // Dynamic resize engine to track only parent hero constraints
        function resize() {
            const parent = canvas.parentElement;
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
        }

        window.addEventListener('resize', resize);
        resize();

        class HeroParticle {
            constructor() {
                this.init(true); // Random starting height distributions on load loop
            }

            init(isFirstLoad = false) {
    this.x = Math.random() * canvas.width;
    this.y = isFirstLoad ? (Math.random() * canvas.height) : (canvas.height + 20); 
    this.size = Math.random() * 1.5 + 0.4; // Made particles smaller and sharper
    this.speedY = Math.random() * -0.6 - 0.2; // Slowed drift down for an elegant look
    this.speedX = Math.random() * 0.3 - 0.15;  
    this.opacity = Math.random() * 0.4 + 0.1; // Reduced opacity max from 0.6 to 0.4 so they blend softer
    
    // Smooth, unified palette matching the digital stack theme
    const colors = ['#3a86ff', '#38bdf8', '#00f2ff', '#10b981']; 
    this.color = colors[Math.floor(Math.random() * colors.length)];
}

            update() {
                this.y += this.speedY;
                this.x += this.speedX;

                // Loop reset mechanics when nodes leave viewport top line boundary
                if (this.y < -10) {
                    this.init(false);
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                
                // Embedded Hardware Glow Matrix Rendering
                ctx.shadowBlur = 6;
                ctx.shadowColor = this.color;
                
                ctx.fill();
                ctx.closePath();
            }
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new HeroParticle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Turn off shadows for calculations to maintain smooth frame rendering loops
            ctx.shadowBlur = 0; 
            
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            
            requestAnimationFrame(animate);
        }

        createParticles();
        animate();
    })();
