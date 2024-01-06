let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

// Using concat method
let combined = firstArray.concat (secondArray);

// Using spread operator
let combine = [...firstArray, ...secondArray];
console.log (combine);

console.log (combined);

// Slicing an array
let sliced = combined.slice (2, 3); 
console.log (sliced);