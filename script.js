// Define the init function
function init() {
  // Get references to the button, input field, and headline
  const alertButton = document.getElementById('alertButton');
  const inputField = document.getElementById('inputField');
  const headline = document.getElementById('headline');

  // Add event listener to the button
  alertButton.addEventListener('click', function() {
    // Get the value of the input field
    const inputValue = inputField.value;
    
    // Show alert with your name and the input value
    alert(`Jesse-James Horne: ${inputValue}`);
    
    // Update the headline with the input value
    headline.textContent = inputValue;
  });
}

// Ensure the init function is called once the window has fully loaded
window.addEventListener('load', init);
