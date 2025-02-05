// NestedLoopExample.js

// Generate a multiplication table (1 to 3)
for (let i = 1; i <= 3; i++) {
    console.log(`Multiplication Table for ${i}:`);
    for (let j = 1; j <= 3; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("-------------");
  }
  
  // Example with a 2D array
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log("Matrix:");
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }