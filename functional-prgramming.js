// Sample data
const numbers = [1, 2, 3, 4, 5];

// Pure function: Doubles a number 
const double = (n) => n * 2;

// Pure function: Filters even numbers
const isEven = (n) => n % 2 === 0;

// Pure function: Sums two numbers
const sum = (a, b) => a + b;

// Functional programming approach: Map, Filter, Reduce
const doubledNumbers = numbers.map(double); 
const evenNumbers = doubledNumbers.filter(isEven); 
const totalSum = evenNumbers.reduce(sum, 0); 

console.log(doubledNumbers);
console.log(evenNumbers);
console.log(totalSum);
