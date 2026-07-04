// ==========================================================================
// CODE CRAFT ACADEMIC GLOBAL MANAGEMENT CORE - MAIN.JS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. MASTER HEADER AUTOMATIC UTILITY INJECTION (EXPANDED NAV ROUTING)
    const headerContainer = document.getElementById('global-header');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header class="master-header">
                <div class="nav-container">
                    <a href="index.html" class="logo">
                        <img src="webnova-logo.png" alt="WebNova Studio Logo" class="brand-logo">
                        <span class="logo-text">WebNova <span>Studio</span></span>
                    </a>
                    
                    <div class="menu-toggle" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    
                    <ul class="nav-links">
                        <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="course.html" class="nav-link">Courses</a></li>
                        <li class="nav-item"><a href="free-resources.html" class="nav-link">Resources</a></li>
                        <li class="nav-item"><a href="practicals-library.html" class="nav-link">Practical Hub</a></li>
                        <li class="nav-item"><a href="visual-posters.html" class="nav-link">Infographic Poster Notes</a></li>
                        
                        <li class="nav-item">
                            <a href="#" class="nav-link">About <i class="fas fa-chevron-down" style="font-size: 0.75rem; margin-left: 4px;"></i></a>
                            <div class="dropdown">
                                <a href="our-story.html" class="dropdown-link">Our Story</a>
                                <a href="mission.html" class="dropdown-link">Our Mission</a>
                                <a href="team.html" class="dropdown-link">Meet the Team</a>
                                <a href="why-choose-us.html" class="dropdown-link">Why Choose Us</a>
                            </div>
                        </li>
                        
                        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                        <li class="nav-item"><a href="requests.html" class="nav-link">Request Vault</a></li>
                        
                    </ul>
                </div>
            </header>
            
            <div class="progress-container" style="position: fixed; top: 85px; left: 0; width: 100%; height: 4px; background: transparent; z-index: 100000;">
                <div class="progress-bar" id="myBar" style="height: 100%; background: #10b981; width: 0%; transition: width 0.1s ease; box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);"></div>
            </div>
        `;
    }

    // 2. UNIFIED MOBILE NAV OPEN/CLOSE TOGGLE HANDLER
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Click outside navigation system container folds panel automatically
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // 3. LOGIC POPUP HUB COOKIE LOOKUP CONTROLLER
    if (!localStorage.getItem('hideLogicModal')) {
        const overlay = document.getElementById('logicModal');
        if (overlay) {
            overlay.style.display = 'flex';
            setTimeout(() => { overlay.classList.add('active'); }, 100);
        }
    }

    // 4. PERFORMANCE OPTIMIZED RUNTIME SCROLL HANDLER (REVEALS & PROGRESS TRAILER)
    const reveals = document.querySelectorAll('.sub-brand-box, .about-card, .course-card, .portfolio-item, .module-card, .phase-card, .guide-card');
    const progressBar = document.getElementById("myBar"); 

    function handleGlobalScrollRoutines() {
        // A. Card element intersection reveal transformations
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < windowHeight - 100) {
                el.classList.add('active');
            }
        });

        // B. Top track reading meter evaluation arithmetic
        if (progressBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
            progressBar.style.width = scrolled + "%";
        }
    }

    window.addEventListener('scroll', handleGlobalScrollRoutines);
    handleGlobalScrollRoutines(); // Handle default view state loading limits immediately
});

// ==========================================================================
// STANDALONE ROUTINES - GLOBAL ATTRIBUTE onclick ROUTERS
// ==========================================================================

// 5. MODAL CONTROL ROUTINES
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

// 6. RESOURCE FLOATER SMOOTH DISMISSAL ANIMATION LOCK WITH FADE OUT
function closeResourceAlert() {
    const alertBox = document.getElementById('resourceAlert');
    if (alertBox) {
        // 1. Add a clean fade-out effect
        alertBox.style.opacity = '0';
        alertBox.style.transform = 'translateY(20px)';
        alertBox.style.transition = 'all 0.5s ease';

        // 2. Remove it from the layout view after the animation completes
        setTimeout(() => {
            alertBox.style.setProperty('display', 'none', 'important');
        }, 500);
    }
}

// 7. HERO AMBIENT BACKGROUND CONNECTIVE MESH CANVAS NODES
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
        constructor() { this.init(true); }
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
            this.y += this.speedY; this.x += this.speedX;
            if (this.y < -10) { this.init(false); }
        }
        draw() {
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color; ctx.globalAlpha = this.opacity;
            ctx.shadowBlur = 6; ctx.shadowColor = this.color;
            ctx.fill(); ctx.closePath();
        }
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) { particles.push(new HeroParticle()); }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.shadowBlur = 0; 
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    createParticles(); animate();
})();
