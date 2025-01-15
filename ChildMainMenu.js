document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
  
    if (loggedInUser === "copil@gmail.com") {
      // Query all menu buttons
      const buttons = document.querySelectorAll('.menu-buttons .menu-btn');
  
      // Disable specific buttons by checking their inner text
      buttons.forEach((button) => {
        const buttonText = button.textContent.trim(); // Get the text inside the button
        if (
          buttonText === "Add Card" ||
          buttonText === "Add Funds" ||
          buttonText === "Allowance"
        ) {
          button.disabled = true;
          button.style.opacity = '0.5'; // Optional: Visually indicate the button is disabled
          button.style.pointerEvents = 'none'; // Optional: Prevent hover or click
        }
      });
    }
  });
  