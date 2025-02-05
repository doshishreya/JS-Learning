// DataTypes_Example.js - Type Conversion
let numString = "123";
let stringToNumber = Number(numString); // Convert string to number
let numberToString = String(456); // Convert number to string
let boolToString = String(true); // Convert boolean to string
let stringToBool = Boolean("true"); // Convert string to boolean

console.log(`String to Number: ${stringToNumber}, Type: ${typeof stringToNumber}`); // Output: String to Number: 123, Type: number
console.log(`Number to String: ${numberToString}, Type: ${typeof numberToString}`); // Output: Number to String: 456, Type: string
console.log(`Boolean to String: ${boolToString}, Type: ${typeof boolToString}`); // Output: Boolean to String: true, Type: string
console.log(`String to Boolean: ${stringToBool}, Type: ${typeof stringToBool}`); // Output: String to Boolean: true, Type: boolean