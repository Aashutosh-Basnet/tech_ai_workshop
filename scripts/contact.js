const contactForm = document.getElementById("contactForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!firstName || !lastName || !email || !message) {
        formStatus.textContent = "Please fill all required fields.";
        formStatus.style.color = "crimson";
        return;
    }

    if (!email.includes("@")) {
        formStatus.textContent = "Please enter a valid email address.";
        formStatus.style.color = "crimson";
        return;
    }

    formStatus.textContent = "Form submitted successfully.";
    formStatus.style.color = "green";
    contactForm.reset();
});
