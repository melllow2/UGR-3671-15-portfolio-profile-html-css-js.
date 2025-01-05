
document.addEventListener("DOMContentLoaded", () => {
    // Highlight active nav link
    const navLinks = document.querySelectorAll(".nav-links ul li a");
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  
    // Contact form validation
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name && email && message) {
        alert("Thank you for reaching out! I'll get back to you soon.");
        contactForm.reset();
      } else {
        alert("Please fill out all fields before submitting.");
      }
    });
  });
  