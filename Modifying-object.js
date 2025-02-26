// Creating an object representing a car
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "White"
};

// Printing the original object
console.log("Original Car:", car);

// Modifying an existing property
car.year = 2022; 
car.color = "Black"; 

// Adding a new property
car.owner = "John Doe";

// Deleting a property
delete car.model;

// Printing the modified object
console.log("Modified Car:", car);
