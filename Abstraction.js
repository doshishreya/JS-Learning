// Abstract Class (Base Class)
class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("Cannot instantiate abstract class Animal");
        }
        this.name = name;
    }

    makeSound() {
        throw new Error("makeSound() must be implemented by subclasses");
    }
}

// Dog Class (Concrete Class)
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} says Woof Woof!`);
    }
}

// Cat Class (Concrete Class)
class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} says Meow Meow!`);
    }
}

// Using the classes
const dog = new Dog("Buddy");
dog.makeSound(); 

const cat = new Cat("Whiskers");
cat.makeSound(); 

