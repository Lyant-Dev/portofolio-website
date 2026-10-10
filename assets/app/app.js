// ================= ANIMATION ON SCROLL ===============

AOS.init({
  duration: 900,
  once: true,
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
const submitBtn = document.querySelector(".submit-btn");
const formStatus = document.querySelector("#form-status");
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.classList.add("active");
  submitBtn.disabled = true;
  formStatus.textContent = "Sending...";
  emailjs
    .sendForm(serviceID, templateID, contactForm)
    .then(() => {
      formStatus.textContent = "Message sent successfully!";
      contactForm.reset();
    })
    .catch((error) => {
      console.log(error);
      formStatus.textContent = "Failed to send message. Please try again!";
    })
    .finally(() => {
      setTimeout(() => {
        submitBtn.disabled = false;
      }, 3000);
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
