document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Clear previous error messages
    document.querySelectorAll('.error').forEach((el) => el.textContent = '');
    document.getElementById("successMessage").textContent = '';

    // Validate Full Name
    const fullName = document.getElementById("fullName").value;
    if (!/^[A-Za-z\s]+$/.test(fullName)) {
        document.getElementById("fullNameError").textContent = "Invalid name. Only letters and spaces are allowed.";
    }

    // Validate Email
    const email = document.getElementById("email").value;
    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
    }

    // Validate Shipping Address
    const shippingAddress = document.getElementById("shippingAddress").value;
    if (!shippingAddress) {
        document.getElementById("shippingAddressError").textContent = "Shipping address is required.";
    }

    // Validate Credit Card Number
    const creditCardNumber = document.getElementById("creditCardNumber").value;
    if (!/^\d{16}$/.test(creditCardNumber)) {
        document.getElementById("creditCardError").textContent = "Invalid credit card number. It should be 16 digits.";
    }

    // Validate CVV
    const cvv = document.getElementById("cvv").value;
    if (!/^\d{3,4}$/.test(cvv)) {
        document.getElementById("cvvError").textContent = "Invalid CVV. It should be 3 or 4 digits.";
    }

    // Validate Expiration Date
    const expirationDate = document.getElementById("expirationDate").value;
    if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expirationDate)) {
        document.getElementById("expirationDateError").textContent = "Invalid expiration date. Format should be MM/YY.";
    }

    // If no errors, show success message
    if (document.querySelectorAll('.error:empty').length === 6) { // Check if all error messages are empty
        document.getElementById("successMessage").textContent = "Checkout successful! Thank you for your purchase.";
    }
});