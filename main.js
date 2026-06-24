// ==========================================================================
// MASTER CORE CENTRAL APPLICATION SYSTEM - MAIN.JS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. MASTER HEADER AUTOMATIC UTILITY INJECTION
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
                        <li><a href="course.html" class="nav-link">Courses</a></li>
                        <li><a href="vault.html" class="nav-link">Premium Vault</a></li>
                    </ul>
                </div>
            </header>
        `;
    }

    // 2. UNIFIED MOBILE DRAWER ACCESSIBILITY TOGGLE ENGINE
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Safe auto-closing handler when clicking structural background coordinates
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // 3. PERSISTENT REGISTRATION MODAL CONTROLLER
    if (!localStorage.getItem('hideLogicModal')) {
        const overlay = document.getElementById('logicModal');
        if (overlay) {
            overlay.style.display = 'flex';
            setTimeout(() => { overlay.classList.add('active'); }, 100);
        }
    }

    // 4. UNIFIED CONSOLIDATED RUNTIME SCROLL ENGINE (REVEALS & PROGRESS BAR)
    const reveals = document.querySelectorAll('.sub-brand-box, .about-card, .course-card, .portfolio-item, .module-card, .phase-card, .guide-card');
    const progressBar = document.getElementById("myBar"); 

    function handleGlobalScrollRoutines() {
        // A. Dynamic Scroll Reveal Animation Calculations
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < windowHeight - 100) {
                el.classList.add('active');
            }
        });

        // B. Re-Engineered Real-Time Reading Progress Track Calculations
        if (progressBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
            progressBar.style.width = scrolled + "%";
        }
    }

    window.addEventListener('scroll', handleGlobalScrollRoutines);
    handleGlobalScrollRoutines(); // Execute layout check immediately on viewport entry
});

// ==========================================================================
// GLOBAL TARGET BOUNDARIES - STANDALONE ATTRIBUTE ROUTINES
// ==========================================================================

// 5. REGISTRATION MODAL OPT-OUT DISPATCH INTERCEPTOR
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

// 6. FLOATING TELEGRAM ACTION ALERT CORNER CARD CLOSER
function closeResourceAlert() {
    const alertBox = document.getElementById('resourceAlert');
    if (alertBox) {
        alertBox.style.opacity = '0';
        alertBox.style.transform = 'translateY(20px)';
        alertBox.style.transition = 'all 0.4s ease';
        setTimeout(() => {
            alertBox.style.setProperty('display', 'none', 'important');
        }, 400);
    }
}

// 7. HIGH-PERFORMANCE FLUID HARMONIC HERO CANVAS ENGAGEMENT SYSTEM
(function() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particles = [];
    const particleCount = 120; // Rebalanced processing threshold allocation footprint

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
