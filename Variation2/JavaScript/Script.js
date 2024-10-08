document.getElementById('jobApplicationForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Input field values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const coverLetter = document.getElementById('coverLetter').value;
    const salary = document.getElementById('salary').value;

    let isValid = true;

    // Full Name Validation: Letters and spaces only
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(fullName)) {
        document.getElementById('nameError').textContent = "Invalid name. Letters and spaces only.";
        isValid = false;
    }

    // Email Validation: Basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Invalid email format.";
        isValid = false;
    }

    // Phone Number Validation: 123-456-7890 format
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = "Phone number format should be 123-456-7890.";
        isValid = false;
    }

    // LinkedIn URL Validation: Must start with https://www.linkedin.com/
    const linkedinRegex = /^https:\/\/www\.linkedin\.com\/.+/;
    if (!linkedinRegex.test(linkedin)) {
        document.getElementById('linkedinError').textContent = "Invalid LinkedIn URL. It must start with https://www.linkedin.com/";
        isValid = false;
    }

    // Cover Letter Validation: No special characters
    const coverLetterRegex = /^[a-zA-Z0-9\s.,!?]+$/;
    if (!coverLetterRegex.test(coverLetter)) {
        document.getElementById('coverLetterError').textContent = "Cover letter contains invalid characters.";
        isValid = false;
    }

    // Salary Validation: Valid number with up to two decimal places
    const salaryRegex = /^\d+(\.\d{1,2})?$/;
    if (!salaryRegex.test(salary)) {
        document.getElementById('salaryError').textContent = "Invalid salary format. Must be a number with up to two decimal places.";
        isValid = false;
    }

    // If all inputs are valid, show success message
    if (isValid) {
        document.getElementById('successMessage').textContent = "Application submitted successfully!";
    }
});

// Function to clear error messages
function clearErrors() {
    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('phoneError').textContent = "";
    document.getElementById('linkedinError').textContent = "";
    document.getElementById('coverLetterError').textContent = "";
    document.getElementById('salaryError').textContent = "";
    document.getElementById('successMessage').textContent = "";
}
