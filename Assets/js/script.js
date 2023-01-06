const navbarTogglerButton = document.querySelector(".navbar-toggler");
const navLinks = document.querySelectorAll("nav .nav-link");

// For closing the navbar when a navlink is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navbarTogglerButton.click();
  });
});
