// ConditionalExample.js - Example 2

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the workweek!");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("It's a regular weekday.");
}

// Example with numbers
const score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  case score >= 60:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}