// Operators_Example.js - Logical Operators
let isLoggedIn = true;
let hasPermission = false;
let isAdmin = true;

// Logical AND (&&)
console.log(`isLoggedIn && hasPermission: ${isLoggedIn && hasPermission}`); // Output: false (both must be true)

// Logical OR (||)
console.log(`isLoggedIn || hasPermission: ${isLoggedIn || hasPermission}`); // Output: true (at least one must be true)

// Logical NOT (!)
console.log(`!isLoggedIn: ${!isLoggedIn}`); // Output: false (inverts the value)
console.log(`!hasPermission: ${!hasPermission}`); // Output: true (inverts the value)

// Combining logical operators
console.log(`isAdmin && (isLoggedIn || hasPermission): ${isAdmin && (isLoggedIn || hasPermission)}`); // Output: true