// BooleanStyle_Example.js - Toggle Button Style
let isActive = false; // Boolean variable to track button state

// Function to toggle button style and text
function toggleButton() {
  const button = document.getElementById("toggleButton");

  // Toggle the Boolean value
  isActive = !isActive;

  // Update button style and text based on the Boolean value
  if (isActive) {
    button.textContent = "Active";
    button.style.backgroundColor = "green";
    button.style.color = "white";
  } else {
    button.textContent = "Inactive";
    button.style.backgroundColor = "red";
    button.style.color = "white";
  }
}

// Add event listener to the button
document.getElementById("toggleButton").addEventListener("click", toggleButton);