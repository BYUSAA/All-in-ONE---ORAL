document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Input field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventDate = document.getElementById('eventDate').value;
    const tickets = document.getElementById('tickets').value;

    let isValid = true;

    // Name Validation: Letters and spaces only
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        document.getElementById('nameError').textContent = "Invalid name. Letters and spaces only.";
        isValid = false;
    }

    // Email Validation: Basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Invalid email format.";
        isValid = false;
    }

    // Phone Number Validation: (123) 456-7890 format
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = "Phone number format should be (123) 456-7890.";
        isValid = false;
    }

    // Date Validation: MM/DD/YYYY format
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (!dateRegex.test(eventDate)) {
        document.getElementById('dateError').textContent = "Invalid date format. Use MM/DD/YYYY.";
        isValid = false;
    }

    // Number of Tickets Validation: Between 1 and 10
    if (tickets < 1 || tickets > 10) {
        document.getElementById('ticketError').textContent = "Number of tickets must be between 1 and 10.";
        isValid = false;
    }

    // If all inputs are valid, show success message
    if (isValid) {
        document.getElementById('successMessage').textContent = "Registration successful!";
    }
});

// Function to clear error messages
function clearErrors() {
    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('phoneError').textContent = "";
    document.getElementById('dateError').textContent = "";
    document.getElementById('ticketError').textContent = "";
    document.getElementById('successMessage').textContent = "";
}
