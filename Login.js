document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login-button");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
  
    const checkFields = () => {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
    };
  
    emailInput.addEventListener("input", checkFields);
    passwordInput.addEventListener("input", checkFields);
  
    loginButton.addEventListener("click", (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      let errorMessage = "";
  
      if (!email || !password) {
        errorMessage = "Both fields are required.";
      } else if (!email.endsWith("@gmail.com")) {
        errorMessage = "Email must be in the format *@gmail.com.";
      }
  
      if (errorMessage) {
        alert(errorMessage);
        window.location.href = "Login.html";
      } else {
        window.location.href = "FamilyView.html";
      }
    });
  });
  