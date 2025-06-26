// JS/loadNavbar.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("../HTML/nav.html") // Or "../HTML/nav.html" depending on where your HTML files are located
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Highlight active page link
      const navLinks = document.querySelectorAll(".nav-link");
      const currentPage = location.pathname.split("/").pop();

      navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    })
    .catch(err => console.error("Failed to load navbar:", err));
});
