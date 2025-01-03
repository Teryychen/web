// Splash Screen
window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    setTimeout(() => {
        splash.style.display = 'none';
    }, 2000);
});

// Add click event to project images
document.querySelectorAll('.project-image').forEach(image => {
    image.addEventListener('click', function () {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = this.src; // Set the clicked image source to modal image
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    });
});

