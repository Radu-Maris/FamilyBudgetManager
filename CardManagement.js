document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector(".submit-btn");
    const cardNumberInput = document.getElementById("cardNumberInput");
    const cardholderInput = document.getElementById("cardholderInput");
    const expirationInput = document.getElementById("expirationInput");
    const cvcInput = document.getElementById("cvcInput");
  
    const validateCardNumber = (cardNumber) => {
      const regex = /^[0-9]{4}(\s?[0-9]{4}){3}$/;
      return regex.test(cardNumber);
    };
  
    const validateExpirationDate = (expirationDate) => {
      const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      return regex.test(expirationDate);
    };
  
    const validateCvc = (cvc) => {
      const regex = /^[0-9]{3}$/;
      return regex.test(cvc);
    };
  
    const validateForm = () => {
      const cardNumber = cardNumberInput.value.trim();
      const cardholder = cardholderInput.value.trim();
      const expirationDate = expirationInput.value.trim();
      const cvc = cvcInput.value.trim();
  
      let errorMessage = "";
  
      if (!cardNumber || !cardholder || !expirationDate || !cvc) {
        errorMessage = "All fields are required.";
      }
      else if (!validateCardNumber(cardNumber)) {
        errorMessage = "Card number must be in the format: 1234 5678 9012 3456";
      }
      else if (!validateExpirationDate(expirationDate)) {
        errorMessage = "Expiration date must be in the format: MM/YY";
      }
      else if (!validateCvc(cvc)) {
        errorMessage = "CVC must be exactly 3 digits.";
      }
  
      if (errorMessage) {
        alert(errorMessage);
        return false;
      }

      return true;
    };
  
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
  
      if (validateForm()) {
        window.location.href = "CardInfoUpdate.html";
      }
      else{
        window.location.href = "CardManagement.html";
      }
    });
  });
  