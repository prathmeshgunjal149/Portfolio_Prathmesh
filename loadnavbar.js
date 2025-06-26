// JS/loadNavbar.js
document.addEventListener("DOMContentLoaded", () => {
  // Since nav.html is now in the same folder as index.html
  fetch("nav.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Highlight active page link
      const navLinks = document.querySelectorAll(".nav-link");
      const currentPage = location.pathname.split("/").pop() || "index.html";

      navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    })
    .catch(err => console.error("Failed to load navbar:", err));
});
