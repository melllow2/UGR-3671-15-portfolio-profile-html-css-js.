document.addEventListener("DOMContentLoaded", () => {
    // Highlight active nav link
    const navLinks = document.querySelectorAll(".nav-links ul li a");
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  
    // Expand/collapse functionality for education sections
    const sections = document.querySelectorAll(".education-section");
  
    sections.forEach(section => {
      const toggleButton = section.querySelector(".toggle-button");
      toggleButton.addEventListener("click", () => {
        section.classList.toggle("expanded");
      });
    });
  });
  