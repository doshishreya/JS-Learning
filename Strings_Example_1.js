// StringsExample.js - Example 1

const firstName = "John";
const lastName = "Doe";

// Concatenation
const fullName = firstName + " " + lastName;
console.log("Full Name:", fullName); // "John Doe"

// String Length
console.log("Length of Full Name:", fullName.length); // 8

// Accessing Characters
console.log("First Character:", fullName[0]); // "J"
console.log("Last Character:", fullName[fullName.length - 1]); // "e"

// Changing Case
console.log("Uppercase:", fullName.toUpperCase()); // "JOHN DOE"
console.log("Lowercase:", fullName.toLowerCase()); // "john doe"

// Includes and Index Of
console.log("Includes 'John':", fullName.includes("John")); // true
console.log("Index of 'Doe':", fullName.indexOf("Doe")); // 5