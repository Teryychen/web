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

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const onScroll = () => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", onScroll);
    onScroll(); 
  });

  gsap.registerPlugin(ScrollTrigger);

gsap.to("#bg-image", {
    scale: 1.2, // Thu nhỏ hình nền còn 80% kích thước ban đầu
    scrollTrigger: {
        trigger: "#content", // Kích hoạt khi cuộn qua vùng nội dung
        start: "top top", // Khi nội dung vừa chạm đỉnh màn hình
        end: "bottom top", // Kết thúc khi nội dung chạm đáy màn hình
        scrub: true, // Hiệu ứng cuộn mượt
    }
});

  

