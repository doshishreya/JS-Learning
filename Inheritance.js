// Parent Class (Base Class)
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating... `);
    }
}

// Child Class (Derived Class)
class Dog extends Animal {
    bark() {
        console.log(`${this.name} says  Woof Woof!`);
    }
}

// Creating an object from the Child Class
const myDog = new Dog("Buddy");

myDog.eat();  
myDog.bark();
