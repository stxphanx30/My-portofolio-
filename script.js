let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x')
navbar. classList. toggle('active')
}

function sendMail(event) {
    event.preventDefault(); // stop form submission

    const parms = {
        full_name: document.getElementById("full_name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value, // string is fine
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_5klmab6", "template_dnmi9tp", parms)
        .then(() => alert("Email sent!"))
        .catch(err => console.error("Failed to send email:", err));
}
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contact-form").addEventListener("submit", sendMail);
});
