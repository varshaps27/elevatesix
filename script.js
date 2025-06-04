document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", function () {
        const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
        const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
        const phone = document.querySelector('input[placeholder="Your Phone"]').value.trim();
        const message = document.querySelector('textarea[placeholder="Message"]').value.trim();

        if (!name || !email || !phone || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        document.querySelector('input[placeholder="Your Name"]').value = "";
        document.querySelector('input[placeholder="Your Email"]').value = "";
        document.querySelector('input[placeholder="Your Phone"]').value = "";
        document.querySelector('textarea[placeholder="Message"]').value = "";
    });
});
