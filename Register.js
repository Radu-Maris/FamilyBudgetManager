document.addEventListener("DOMContentLoaded", () => {
    const createAccountButton = document.querySelector(".login-button");
    const emailInput = document.getElementById("email");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
  
    const checkFields = () => {
      const email = emailInput.value.trim();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
    };
  
    emailInput.addEventListener("input", checkFields);
    usernameInput.addEventListener("input", checkFields);
    passwordInput.addEventListener("input", checkFields);

    createAccountButton.addEventListener("click", (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      let errorMessage = "";
  
      if (!email || !username || !password) {
        errorMessage = "All fields are required.";
      } else if (!email.endsWith("@gmail.com")) {
        errorMessage = "Email must be in the format *@gmail.com.";
      }

      if(password.length < 3){
        errorMessage = "Password is too short";
      }
  
      if (errorMessage) {
        alert(errorMessage);
        window.location.href = "Register.html";
      } else {
        window.location.href = "Login.html";
      }
    });
  });
  