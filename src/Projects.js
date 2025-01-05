document.addEventListener("DOMContentLoaded", () => {
    // Highlight active nav link
    const navLinks = document.querySelectorAll(".nav-links ul li a");
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  
    // Toggle project details visibility
    const projectCards = document.querySelectorAll(".project-container");
    projectCards.forEach(card => {
      const toggleButton = card.querySelector(".toggle-details");
      toggleButton.addEventListener("click", () => {
        card.querySelector(".project-details").classList.toggle("visible");
      });
    });
  });
  