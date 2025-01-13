document.addEventListener("DOMContentLoaded", () => {
    const createAccountButton = document.querySelector(".button.send");
    const ronInput = document.querySelector(".sum-input");

    createAccountButton.addEventListener("click", (event) => {
      event.preventDefault();
  
      const ron = ronInput.value.trim();
      let errorMessage = "";
  
      if (!ron) {
        errorMessage = "Must input a sum";
      }
      else if (isNaN(ron) || Number(ron) <= 0) {
        errorMessage = "Sum must be a valid positive number";
      }

      if (errorMessage) {
        alert(errorMessage);
        window.location.href = "ChildFunds.html";
    } else {
        window.location.href = "FundsAssigned.html";
      }
    });
  });
  