document.getElementById('subscriptionForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Input field values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const preferences = document.querySelectorAll('input[name="preferences"]:checked');

    let isValid = true;

    // First Name Validation: Letters only
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(firstName)) {
        document.getElementById('firstNameError').textContent = "First name can only contain letters.";
        isValid = false;
    }

    // Last Name Validation: Letters only
    if (!nameRegex.test(lastName)) {
        document.getElementById('lastNameError').textContent = "Last name can only contain letters.";
        isValid = false;
    }

    // Email Validation: Basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Invalid email format.";
        isValid = false;
    }

    // Subscription Preferences Validation: At least one checkbox must be checked
    if (preferences.length === 0) {
        document.getElementById('preferencesError').textContent = "Please select at least one subscription preference.";
        isValid = false;
    }

    // Password Validation: Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and one special character (!@#$%^&*).";
        isValid = false;
    }

    // If all inputs are valid, show success message
    if (isValid) {
        document.getElementById('successMessage').textContent = "Subscription successful!";
    }
    // Redirect after a delay (e.g., 3 seconds)
    setTimeout(function() {
        window.location.href = "/Variation4/HTML/Index.html"; // Update this to the actual path of Variation 2
    }, 3000);
});

// Function to clear error messages
function clearErrors() {
    document.getElementById('firstNameError').textContent = "";
    document.getElementById('lastNameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('preferencesError').textContent = "";
    document.getElementById('passwordError').textContent = "";
    document.getElementById('successMessage').textContent = "";
}