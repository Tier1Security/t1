// Initialize EmailJS
(function () {
  emailjs.init("wzeoJs_CWViM_9Ym_"); // Replace with your actual public key
})();

// Contact form submission handler
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  // Collect form input values
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const message = form.querySelector("textarea").value;

  // Prepare template parameters for EmailJS
  const templateParams = {
    name: name,
    email: email,
    phone: phone,
    message: message,
    title: "New Inquiry",
    time: new Date().toLocaleString()
  };

  const serviceID = "service_wzip09l";
  const contactTemplateID = "template_wgah8x6";  // Sends to info@tier1security.org
  const autoReplyTemplateID = "template_kkc8fz4"; // Sends to the user

  // Step 1: Send internal notification
  emailjs.send(serviceID, contactTemplateID, templateParams)
    .then(() => {
      console.log("Internal email sent successfully.");

      // Step 2: Send auto-reply to the customer
      return emailjs.send(serviceID, autoReplyTemplateID, templateParams);
    })
    .then(() => {
      alert("Your message was sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
      alert("An error occurred while sending your message. Please try again.");
    });
});

// Newsletter subscription handler
document.getElementById("btn-subscribe").addEventListener("click", function (e) {
  e.preventDefault();
  const emailInput = document.querySelector(".newsletter-input");
  const subscriberEmail = emailInput.value.trim();

  if (subscriberEmail) {
    alert("Thank you for subscribing to our newsletter!");
    console.log("Newsletter subscriber:", subscriberEmail);
    emailInput.value = "";
  }
});
