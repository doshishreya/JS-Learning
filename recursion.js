function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateFibonacci(count) {
    let sequence = [];
    for (let i = 0; i < count; i++) {
        sequence.push(fibonacci(i));
    }
    return sequence;
}

console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
