document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("loginForm");
  const ageInput = document.getElementById("age");
  const ageError = document.getElementById("ageError");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default submission

    const age = parseInt(ageInput.value, 10);
    let isValid = true;

    ageError.textContent = "";

    if (isNaN(age)) {
      ageError.textContent = "Age must be a number!";
      isValid = false;
    } else if (age < 18) {
      ageError.textContent = "Age must be 18 or older!";
      isValid = false;
    }

    if (isValid) {
      sessionStorage.setItem("loginMessage", "Login successfully");
      window.location.href = "2page.html"; // redirect to success page
    }
  });
});
