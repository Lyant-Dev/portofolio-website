// ===== EMAIL JS ======
const emailJS = function () {
  emailjs.init({
    publicKey: "p2D_UDG0e09W0_P-3",
  });
};
emailJS();

// ======= Navbar Toggle =======
const navbarToggle = document.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});
const navLinks = document.querySelectorAll("#navbar-menu > li > a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });
    link.classList.add("active");
  });
});
