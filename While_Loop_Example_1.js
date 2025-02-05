// WhileLoopExample.js

// Print numbers from 1 to 5
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}

// Example with a condition
let isRunning = true;
let attempts = 0;

while (isRunning) {
  console.log("Attempt:", attempts);
  attempts++;
  if (attempts === 3) {
    console.log("Stopping the loop...");
    isRunning = false;
  }
}