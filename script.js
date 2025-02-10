document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll(".radio");

    radioButtons.forEach(radio => {
        radio.addEventListener("change", function () {
            console.log("Selected Service: " + this.value);
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.querySelector('input[type="date"]');
    const timeInput = document.querySelector('input[type="time"]');

    // Load saved values if they exist
    if (localStorage.getItem("selectedDate")) {
        dateInput.value = localStorage.getItem("selectedDate");
    }
    if (localStorage.getItem("selectedTime")) {
        timeInput.value = localStorage.getItem("selectedTime");
    }

    // Save date when user selects it
    dateInput.addEventListener("change", function () {
        localStorage.setItem("selectedDate", this.value);
        console.log("Saved Date: " + this.value);
    });

    // Save time when user selects it
    timeInput.addEventListener("change", function () {
        localStorage.setItem("selectedTime", this.value);
        console.log("Saved Time: " + this.value);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const serviceInputs = document.querySelectorAll('input[name="service"]');
    const submitButton = document.getElementById("submit");

    // Load saved data when the page loads
    if (localStorage.getItem("userName")) nameInput.value = localStorage.getItem("userName");
    if (localStorage.getItem("userEmail")) emailInput.value = localStorage.getItem("userEmail");
    if (localStorage.getItem("userPhone")) phoneInput.value = localStorage.getItem("userPhone");
    if (localStorage.getItem("selectedDate")) dateInput.value = localStorage.getItem("selectedDate");
    if (localStorage.getItem("selectedTime")) timeInput.value = localStorage.getItem("selectedTime");
    if (localStorage.getItem("selectedService")) {
        serviceInputs.forEach(input => {
            if (input.value === localStorage.getItem("selectedService")) {
                input.checked = true;
            }
        });
    }

    // Save user details when input changes
    nameInput.addEventListener("input", () => localStorage.setItem("userName", nameInput.value));
    emailInput.addEventListener("input", () => localStorage.setItem("userEmail", emailInput.value));
    phoneInput.addEventListener("input", () => localStorage.setItem("userPhone", phoneInput.value));
    dateInput.addEventListener("change", () => localStorage.setItem("selectedDate", dateInput.value));
    timeInput.addEventListener("change", () => localStorage.setItem("selectedTime", timeInput.value));

    // Save selected service when a radio button is clicked
    serviceInputs.forEach(input => {
        input.addEventListener("change", function () {
            localStorage.setItem("selectedService", this.value);
        });
    });

    // Show stored data when the user submits the form
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert(
            `Saved Data:
            Name: ${localStorage.getItem("userName")}
            Email: ${localStorage.getItem("userEmail")}
            Phone: ${localStorage.getItem("userPhone")}
            Date: ${localStorage.getItem("selectedDate")}
            Time: ${localStorage.getItem("selectedTime")}
            Service: ${localStorage.getItem("selectedService")}`
        );
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.querySelector(".info");
    const nextButton = document.querySelector(".bt4");

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            const date = document.querySelector("input[type='date']").value;
            const time = document.querySelector("input[type='time']").value;
            const name = document.querySelector("input[placeholder='name']").value;
            const phone = document.querySelector("input[placeholder='phone number']").value;
            const email = document.querySelector("input[placeholder='email']").value;

            if (date && time && name && phone && email) {
                localStorage.setItem("appointmentDate", date);
                localStorage.setItem("appointmentTime", time);
                localStorage.setItem("appointmentName", name);
                localStorage.setItem("appointmentPhone", phone);
                localStorage.setItem("appointmentEmail", email);
                
                window.location.href = "appointment-details.html";
            } else {
                alert("Please fill in all fields before proceeding.");
            }
        });
    }

    if (window.location.pathname.includes("appointment-details.html")) {
        document.getElementById("appointment-date").textContent = localStorage.getItem("appointmentDate") || "Not provided";
        document.getElementById("appointment-time").textContent = localStorage.getItem("appointmentTime") || "Not provided";
        document.getElementById("appointment-name").textContent = localStorage.getItem("appointmentName") || "Not provided";
        document.getElementById("appointment-phone").textContent = localStorage.getItem("appointmentPhone") || "Not provided";
        document.getElementById("appointment-email").textContent = localStorage.getItem("appointmentEmail") || "Not provided";
    }
});

