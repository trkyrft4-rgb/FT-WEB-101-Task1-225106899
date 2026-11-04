// =========================
// Dark Mode Toggle
// =========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    // Toggle dark class on body
    document.body.classList.toggle("dark");

    // Check current mode
    const isDark = document.body.classList.contains("dark");

    // Change button icon
    const themeIcon = themeBtn.querySelector(".theme-icon");

    // Change button text
    const themeLabel = themeBtn.querySelector(".theme-label");

    if (isDark) {

        themeIcon.textContent = "🌙";

        themeLabel.textContent = "Dark";

        themeBtn.setAttribute("aria-label", "Switch to light mode");

        themeBtn.setAttribute("aria-pressed", "true");

    } else {

        themeIcon.textContent = "☀️";

        themeLabel.textContent = "Light";

        themeBtn.setAttribute("aria-label", "Switch to dark mode");

        themeBtn.setAttribute("aria-pressed", "false");

    }

});


// =========================
// Contact Form
// =========================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    // Prevent page reload
    event.preventDefault();

    // Get visitor name
    const name = document.getElementById("name").value;

    // Show success message
    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    // Clear form fields
    contactForm.reset();

});