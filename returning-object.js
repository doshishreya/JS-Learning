function createUser(name, age) {
    return {
        name: name,
        age: age,
        isAdult: age >= 18
    };
}

const user = createUser("Alice", 22);
console.log(user); 
// Output: { name: 'Alice', age: 22, isAdult: true }
