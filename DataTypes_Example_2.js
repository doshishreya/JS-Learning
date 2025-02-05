// DataTypes_Example.js - Complex Data Types
let person = { // Object
    name: "Alice",
    age: 25,
    isEmployed: true
  };
  
  let hobbies = ["Reading", "Traveling", "Coding"]; // Array
  
  let greet = function(name) { // Function
    return `Hello, ${name}!`;
  };
  
  console.log(`Person: ${JSON.stringify(person)}, Type: ${typeof person}`); // Output: Person: {"name":"Alice","age":25,"isEmployed":true}, Type: object
  console.log(`Hobbies: ${hobbies}, Type: ${typeof hobbies}`); // Output: Hobbies: Reading,Traveling,Coding, Type: object
  console.log(`Greeting: ${greet("Alice")}, Type: ${typeof greet}`); // Output: Greeting: Hello, Alice!, Type: function