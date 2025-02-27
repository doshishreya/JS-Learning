function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30)); // Output: 60
console.log(sum(5, 15));      // Output: 20
