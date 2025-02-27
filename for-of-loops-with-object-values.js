const user = {
    name: "Alice",
    age: 25,
    city: "New York"
};

// Extract values and iterate
for (const value of Object.values(user)) {
    console.log(value); 
}
