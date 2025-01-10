const vueProfolio = Vue.createApp({
    data() {
      return {
        Portfolio: [] // Danh sách hình ảnh
      };
    },
    mounted() {
      // Gửi yêu cầu AJAX để nhận dữ liệu từ API
      $.ajax({
        url: "/portfolio", // URL API
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
  