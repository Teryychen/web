document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form tự động gửi

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }


    fetch("/contact_me", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    })
    
    .then(response => {
        if (response.ok) {
            alert("Your message has been sent!");
            document.getElementById("contactForm").reset(); 
        } else {
            alert("There was an error. Please try again later.");
        }
    })
    .catch(error => {
        alert("Network error. Please try again later.");
    });
});
