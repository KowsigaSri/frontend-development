document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Stop form from submitting

    // Get input values
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    // Get error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    name.classList.remove("error");
    email.classList.remove("error");
    password.classList.remove("error");

    let isValid = true;

    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        name.classList.add("error");
        isValid = false;
    }

    // Email validation
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        email.classList.add("error");
        isValid = false;
    }

    // Password validation
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        password.classList.add("error");
        isValid = false;
    }

    // If all valid
    if (isValid) {
        alert("Registration Successful!");
    }

});
