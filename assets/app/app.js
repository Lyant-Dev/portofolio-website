// ================= ANIMATION ON SCROLL ===============

AOS.init({
  duration: 900, // durasi animasi (ms)
  once: true, // animasi cuma jalan sekali, gak berulang tiap scroll naik-turun
});

// ===== EMAIL JS ======
const emailJS = function () {
  emailjs.init({
    publicKey: "p2D_UDG0e09W0_P-3",
  });
};
emailJS();

const serviceID = "service_o0myw6w";
const templateID = "template_eh56zba";
const formStatus = document.querySelector("#form-status");
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.classList.add("active");
  formStatus.textContent = "Sending...";
  emailjs
    .sendForm(serviceID, templateID, contactForm)
    .then(() => {
      formStatus.textContent = "Message sent succesfully!";
      contactForm.reset();
    })
    .catch((error) => {
      console.log(error);
      formStatus.textContent = "Failed to send message. Please try again!";
    });
});
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
