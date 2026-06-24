// ==========================================================================
// CODE CRAFT ACADEMIC GLOBAL FOOTER DISPATCH WIDGET - FOOTER.JS
// ==========================================================================

document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer class="main-footer">
        <div class="footer-grid">
            
            <div class="footer-col branding">
                <div class="logo">
                    <div class="logo-text" style="color: #ffffff !important; font-size: 1.25rem; font-weight: 900; letter-spacing: -0.5px;">
                        WebNova <span style="color: #38bdf8 !important;">Studio</span>
                    </div>
                </div>
                <p style="color: #94a3b8 !important; font-size: 0.9rem; line-height: 1.65; margin-top: 15px; margin-bottom: 20px;">
                    Empowering businesses through premium design and educating the next generation of digital creators at Code Craft Academic.
                </p>
                <div class="footer-socials">
                    <a href="https://t.me/CodeCraftAcademic" target="_blank" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
                    <a href="#" aria-label="Discord"><i class="fab fa-discord"></i></a>
                    <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>

            <div class="footer-col">
                <h4 style="color: #ffffff !important;">WebNova Studio</h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 12px;"><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Web Development</a></li>
                    <li style="margin-bottom: 12px;"><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Digital Marketing</a></li>
                    <li style="margin-bottom: 12px;"><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Branding & Design</a></li>
                    <li style="margin-bottom: 12px;"><a href="portfolio.html" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Portfolio</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4 style="color: #ffffff !important;">Code Craft Academic</h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 12px;"><a href="free-resources.html" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Free Notes</a></li>
                    <li style="margin-bottom: 12px;"><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Video Tutorials</a></li>
                    <li style="margin-bottom: 12px;"><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Freelancers Hub</a></li>
                    <li style="margin-bottom: 12px;"><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Career Guides</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4 style="color: #ffffff !important;">Quick Links</h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 12px;"><a href="our-story.html" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600;">About Us</a></li>
                    <li style="margin-bottom: 12px;"><a href="contact.html" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Contact Support</a></li>
                    <li style="margin-bottom: 12px;"><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Privacy Policy</a></li>
                    <li style="margin-bottom: 12px;"><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Terms of Service</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom" style="text-align: center; margin-top: 50px; padding-top: 25px; border-top: 1px solid rgba(255, 255, 255, 0.05);">
            <p style="color: #475569 !important; font-size: 0.85rem; font-weight: 600;">
                &copy; 2026 WebNova Studio | Designed & Developed by Rakesh Jadhav | Rashmi Divantgi
            </p>
        </div>
    </footer>
    `;

    // Safe injection wrapper directly at the end of the markup flow
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
