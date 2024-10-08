document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Input field values
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
    const rating = document.getElementById('rating').value;
    const surveyDate = document.getElementById('surveyDate').value;

    let isValid = true;

    // Age Validation: Number between 18 and 100
    if (age < 18 || age > 100) {
        document.getElementById('ageError').textContent = "Age must be between 18 and 100.";
        isValid = false;
    }

    // Email Validation: Basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Invalid email format.";
        isValid = false;
    }

    // Feedback Validation: No special characters
    const feedbackRegex = /^[a-zA-Z0-9\s]+$/;
    if (!feedbackRegex.test(feedback)) {
        document.getElementById('feedbackError').textContent = "Feedback cannot contain special characters.";
        isValid = false;
    }

    // Rating Validation: Number between 1 and 5
    if (rating < 1 || rating > 5) {
        document.getElementById('ratingError').textContent = "Rating must be between 1 and 5.";
        isValid = false;
    }

    // Survey Date Validation: DD-MM-YYYY format
    const dateRegex = /^([0-2][0-9]|(3)[0-1])-(0[1-9]|1[0-2])-(\d{4})$/;
    if (!dateRegex.test(surveyDate)) {
        document.getElementById('surveyDateError').textContent = "Date must be in DD-MM-YYYY format.";
        isValid = false;
    }

    // If all inputs are valid, show success message
    if (isValid) {
        document.getElementById('successMessage').textContent = "Survey submitted successfully!";
    }
});

// Function to clear error messages
function clearErrors() {
    document.getElementById('ageError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('feedbackError').textContent = "";
    document.getElementById('ratingError').textContent = "";
    document.getElementById('surveyDateError').textContent = "";
    document.getElementById('successMessage').textContent = "";
}
