// ConditionalExample.js - Example 1

const age = 20;

if (age < 18) {
  console.log("You are a minor."); // Executes if age is less than 18
} else if (age >= 18 && age < 65) {
  console.log("You are an adult."); // Executes if age is between 18 and 64
} else {
  console.log("You are a senior."); // Executes if age is 65 or above
}

// Example with boolean value
const hasPermission = true;

if (hasPermission) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}