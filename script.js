let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

function sendMail(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_ghp8lc2", "template_p441nc9", parms)
        .then(() => {
            alert("Email sent successfully! ✅");
            document.getElementById("contact-form").reset(); // Clear the form
        })
        .catch(err => {
            console.error("Failed to send email:", err);
            alert("Failed to send email. Please try again.");
        });
}

window.addEventListener("DOMContentLoaded", () => {
    emailjs.init("f9iNhMxuaooaYZXoH"); // Your public key
    document.getElementById("contact-form").addEventListener("submit", sendMail);
});
