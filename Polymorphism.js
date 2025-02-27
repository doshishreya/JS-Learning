// Parent Class (Base Class)
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method to be overridden by child classes
    makeSound() {
        console.log("Some generic animal sound..."); 
    }
}

// Child Class: Dog 
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} says  Woof Woof!`);
    }
}

// Child Class: Cat 
class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} says  Meow Meow!`);
    }
}

// Child Class: Cow 
class Cow extends Animal {
    makeSound() {
        console.log(`${this.name} says  Moo Moo!`);
    }
}

// Using Polymorphism: Calling the same method on different objects
const animals = [
    new Dog("Buddy"), 
    new Cat("Whiskers"), 
    new Cow("Bessie")
];

// Loop through all animals and call makeSound() without knowing their exact type
animals.forEach(animal => animal.makeSound());
