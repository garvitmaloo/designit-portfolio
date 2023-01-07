const mobileNavbar = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".nav-link");

// For closing the navbar when a navlink is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    mobileNavbar.classList.remove("show");
  });
});
