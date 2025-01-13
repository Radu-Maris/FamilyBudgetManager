document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector(".add-btn");
    const nameInput = document.getElementById("nameInput");
    const sumInput = document.getElementById("sumInput");
    const dateInput = document.getElementById("dateInput");
    const descInput = document.getElementById("descInput");
  
    const validateSum = (sum) => {
      const regex = /^[0-9]+(\.[0-9]{1,2})?$/;
      return regex.test(sum);
    };
  
    const validateDate = (date) => {
      const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
      return regex.test(date);
    };
  
    const validateForm = () => {
      const name = nameInput.value.trim();
      const sum = sumInput.value.trim();
      const date = dateInput.value.trim();
      const description = descInput.value.trim();
  
      let errorMessage = "";
  
      if (!name || !sum || !date || !description) {
        errorMessage = "All fields are required.";
      }
      else if (!validateSum(sum)) {
        errorMessage = "Sum must be a valid positive number.";
      }
      else if (!validateDate(date)) {
        errorMessage = "Date must be in the format MM/DD/YYYY.";
      }

      if (errorMessage) {
        alert(errorMessage);
        return false;
      }

      return true;
    };
  
    addButton.addEventListener("click", (event) => {
      event.preventDefault();
  
      if (validateForm()) {
        window.location.href = "Events.html";
      }
      else{
        window.location.href = "AddEvent.html";
      }
    });
  });
  