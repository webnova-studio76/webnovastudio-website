// ==========================================================================
// CODE CRAFT GLOBAL GLOBAL ARCHITECTURE SYSTEM - MAIN.JS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. DYNAMIC HEADER INJECTION
    const headerContainer = document.getElementById('global-header');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header class="master-header">
                <div class="nav-container">
                    <a href="index.html" class="logo">
                        <img src="logo.png" class="brand-logo" alt="Logo">
                        <div class="logo-text">WebNova <span>Studio</span></div>
                    </a>
                    <div class="menu-toggle" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <ul class="nav-links">
                        <li><a href="index.html" class="nav-link">Home</a></li>
                        <li><a href="courses.html" class="nav-link">Courses</a></li>
                        <li><a href="vault.html" class="nav-link">Premium Vault</a></li>
                    </ul>
                </div>
            </header>
        `;
    }

   
    // 3. UNIFIED MOBILE NAVIGATION TOGGLE ENGINE
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // 4. LOGIC MODAL CONFIGURATION LINKAGE
    if (!localStorage.getItem('hideLogicModal')) {
        const overlay = document.getElementById('logicModal');
        if (overlay) {
            overlay.style.display = 'flex';
            setTimeout(() => { overlay.classList.add('active'); }, 100);
        }
    }

    // 5. WINDOW LOAD / SCROLL REVEALS ENGINE
    const reveals = document.querySelectorAll('.sub-brand-box, .about-card, .course-card');
    function checkReveal() {
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                el.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Trigger immediately to catch elements above-the-fold
});

// ==========================================================================
// OUTSIDE CORES - DYNAMIC GLOBAL SCOPE ROUTINES
// ==========================================================================

// 6. GLOBAL LOGIC CLOSE TRIGGERS
function handleLogicClose() {
    const dontShowOpt = document.getElementById('dontShow');
    if (dontShowOpt && dontShowOpt.checked) {
        localStorage.setItem('hideLogicModal', 'true');
    }
    const overlay = document.getElementById('logicModal');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => { overlay.style.display = 'none'; }, 400);
    }
}

// 7. CORNER ALERT WIDGET CLOSER
function closeResourceAlert() {
    const alertBox = document.getElementById('resourceAlert');
    if (alertBox) { 
        alertBox.style.setProperty('display', 'none', 'important'); 
    }
}

// 8. UNIFIED HIGH-PERFORMANCE PARTICLE CANVAS ENGINE
(function() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particles = [];
    const particleCount = 120;

    function resize() {
        const parent = canvas.parentElement;
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class HeroParticle {
        constructor() {
            this.init(true);
        }
        init(isFirstLoad = false) {
            this.x = Math.random() * canvas.width;
            this.y = isFirstLoad ? (Math.random() * canvas.height) : (canvas.height + 20); 
            this.size = Math.random() * 1.5 + 0.4; 
            this.speedY = Math.random() * -0.6 - 0.2; 
            this.speedX = Math.random() * 0.3 - 0.15;  
            this.opacity = Math.random() * 0.4 + 0.1; 
            const colors = ['#3a86ff', '#38bdf8', '#00f2ff', '#10b981']; 
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            if (this.y < -10) {
                this.init(false);
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
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
