const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`
const services = [
    
    {
        name: "Procurement",
        description: "We source quality products at competitive prices."
    },
    {
        name: "Supply",
        description: "Reliable supply of goods for businesses."
    },
    {
        name: "Distribution",
        description: "Fast and secure delivery services."
    }
];
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});
const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
const emailInput = document.querySelector("#email");
const emailMsg = document.querySelector("#email-msg");

if (emailInput && emailMsg) {
    emailInput.addEventListener("input", () => {
        if (emailInput.value.includes("@")) {
            emailMsg.textContent = "✓ Valid email";
            emailMsg.style.color = "green";
        } else {
            emailMsg.textContent = "Please enter a valid email";
            emailMsg.style.color = "red";
        }
    });
}
// ===============================
// DOM ELEMENTS
// ===============================

const form = document.querySelector(".contact-form");
const messageBox = document.querySelector("#message");
const output = document.createElement("p");

// Add output to form (DOM modification)
if (form) {
    form.appendChild(output);
}

// ===============================
// FUNCTION 1 - DISPLAY SERVICES
// ===============================

function displayServices() {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        if (services[index]) {
            card.innerHTML = `
                <h3>${services[index].name}</h3>
                <p>${services[index].description}</p>
            `;
        }
    });
}

// ===============================
// FUNCTION 2 - FORM VALIDATION
// ===============================

function validateForm(event) {
    event.preventDefault();

    const name = document.querySelector("#fullname").value;
    const email = document.querySelector("#email").value;

    if (!name || !email) {
        output.textContent = `Please fill in all required fields.`;
        output.style.color = "red";
        return;
    }

    // Save to localStorage
    const userData = {
        name: name,
        email: email,
    };


    localStorage.setItem("contactData", JSON.stringify(userData));

    output.textContent = `Thank you ${name}, Your message has been received, we will contact you soon.`;
    output.style.color = "green";

    form.reset();
}

// ===============================
// FUNCTION 3 - LOAD SAVED DATA
// ===============================

function loadSavedData() {
    const saved = localStorage.getItem("contactData");

    if (saved) {
        const data = JSON.parse(saved);

        if (form) {
            document.querySelector("#fullname").value = data.name || "";
            document.querySelector("#email").value = data.email || "";
            messageBox.value = data.message || "";
        }
    }
}

// ===============================
// EVENT LISTENERS
// ===============================

if (form) {
    form.addEventListener("submit", validateForm);
}

// ===============================
// INIT
// ===============================
const testimonials = [
    {
        name: "John",
        review: "Excellent service and timely delivery."
    },
    {
        name: "Sarah",
        review: "Professional team and quality products."
    },
    {
        name: "David",
        review: "Highly recommended."
    }
];

let current = 0;

function showTestimonial() {
    document.querySelector("#testimonial").innerHTML = `
        <p>"${testimonials[current].review}"</p>
        <h3>- ${testimonials[current].name}</h3>
    `;

    current = (current + 1) % testimonials.length;
}

setInterval(showTestimonial, 4000);
showTestimonial();
displayServices();
loadSavedData();