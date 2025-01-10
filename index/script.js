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


// Fetch projects from the server
fetch("/services")
  .then(response => response.json())
  .then(data => {
    const projectContainer = document.getElementById("project-container");
    data.forEach(project => {
      const projectElement = document.createElement("div");
      projectElement.innerHTML = `
        <img src="${project.imgSrc}" alt="${project.modal}" />
        <p>${project.modal}</p>
      `;
      projectContainer.appendChild(projectElement);
    });
  })
  .catch(err => console.error("Error fetching services:", err));

  

const vueProfolio = Vue.createApp({
    data() {
        return {
            Portfolio: []
        };
    },
    mounted() {
        // Gửi yêu cầu AJAX để nhận dữ liệu
        $.ajax({
            url: "/profolio", // API trả về JSON từ server
            method: "get",
            dataType: "json",
            success: (results) => {
                this.Portfolio = results; // Gán dữ liệu vào Portfolio
            },
            error: (err) => {
                console.error("Lỗi khi lấy dữ liệu:", err);
            }
        });
    }
}).mount("#my-work");
