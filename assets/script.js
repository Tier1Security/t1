// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

(function () {
  emailjs.init("aDA3-Kz0X_J7PMRZk"); // Replace with your public key
})();

// Form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const message = form.querySelector("textarea").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    const serviceID = "service_v5gg4d5"; // Replace with your serviceID
    const templateID = "template_ajf5t0v"; // Replace with your templateID

    emailjs.sendForm(serviceID, templateID, this).then(
      function () {
        alert("Message sent successfully!");
        form.reset();
      },
      function (error) {
        console.error("FAILED...", error);
        alert("Something went wrong. Please try again.");
      }
    );
  });

// Newsletter subscription
document
  .getElementById("btn-subscribe")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const email = document.querySelector(".newsletter-input").value;
    if (email) {
      alert("Thank you for subscribing to our newsletter!");
      console.log(email);
      document.querySelector(".newsletter-input").value = "";
    }
  });
