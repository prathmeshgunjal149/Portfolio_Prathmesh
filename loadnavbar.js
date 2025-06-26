// JS/loadNavbar.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // ✅ Highlight current page link
      const navLinks = document.querySelectorAll(".nav-link");
      const currentPage = location.pathname.split("/").pop() || "index.html";

      navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });

      // ✅ Toggle menu for mobile
      const toggleBtn = document.getElementById("menuToggle");
      const navMenu = document.getElementById("navMenu");

      if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
          navMenu.classList.toggle("show");
        });
      }
    })
    .catch(err => console.error("Failed to load navbar:", err));
});
