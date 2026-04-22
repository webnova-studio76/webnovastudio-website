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