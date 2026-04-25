document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
 
    <header class="master-header">   
    <div class="nav-container">
        <a href="index.html" class="logo">WebNova<span>Studio</span></a>
        <ul class="nav-links">
            <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="course.html" class="nav-link">Courses</a></li>

            <!--<li class="nav-item">
                <a href="#" class="nav-link">Services <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="brand-identity.html" class="dropdown-link">Brand Identity</a>
                    <a href="ui-ux.html" class="dropdown-link">UI/UX Design</a>
                    <a href="full-stack.html" class="dropdown-link">Full-Stack Development</a>
                    <a href="seo-growth.html" class="dropdown-link">SEO & Digital Growth</a>
                </div>
            </li>-->
            
            <li class="nav-item"><a href="free-resources.html" class="nav-link">Resources</a></li>
            <li class="nav-item"><a href="practicals-library.html" class="nav-link">Practical Hub</a></li>
            <!--<li class="nav-item">
                <a href="#" class="nav-link">Resources <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="" class="dropdown-link">Technical PDF Notes</a>
                    <a href="#" class="dropdown-link">Cheat Sheets</a>
                    <a href="#" class="dropdown-link">Academic Slide Decks (PPTs)</a>
                    <a href="#" class="dropdown-link">Developer Toolkit (Softwares)</a>
                    <a href="#" class="dropdown-link">UI/UX Landing Pages</a>
                    <a href="#" class="dropdown-link">Full-Scale Web Templates</a>
                    <a href="tutorial-player.html" class="dropdown-link">Video Tutorials</a>
                </div>
            </li>-->

                <!--<li class="nav-item">
                <a href="#" class="nav-link">Success Hub <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="career-guide.html" class="dropdown-link">Career Guide</a>
                    <a href="freelancers-hub.html" class="dropdown-link">Freelancer's Hub</a>
                    
                </div>
            </li>-->

            <li class="nav-item">
                <a href="#" class="nav-link">About <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="our-story.html" class="dropdown-link">Our Story</a>
                    <a href="mission.html" class="dropdown-link">Our Mission</a>
                    <a href="team.html" class="dropdown-link">Meet the Team</a>
                    <a href="why-choose-us.html" class="dropdown-link">Why Choose Us</a>
                </div>
            </li>
            <li class="nav-item"><a href="portfolio.html" class="nav-link">Portfolio</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            <li class="nav-item"><a href="requests.html" class="nav-link">Request vault</a></li>
        </ul>
    </div>
</header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});

// Add this line inside the headerHTML string in your header.js
// Place it right after the </header> tag
const headerHTML = `
<header class="master-header">
    </header>
<div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
</div>
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
`;
