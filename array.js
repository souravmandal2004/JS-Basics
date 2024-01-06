// Creating an array
let nums = [1, 3, 4, 5];
console.log (nums);

// Insertion
// 1.In the END of the array
nums.push (69);

// 2.In the Beginning of the array
nums.unshift (8);


// 3.In the middle of the array
nums.splice (2, 0, 696, 696);       // (Index, deleteCount, elements)
console.log (nums);

// If we want to check if a number exists or not
if (nums.indexOf(69) != -1) 
    console.log ("Present");
else
    console.log ("Absent");

// Another method
console.log (nums.includes(696));


// Removing
// 1.End
nums.pop ();

// 2.Begin
nums.shift ();

// 3.Middle
nums.splice (2, 1);     // (index, count of elements want to delete)



// Emptying an array
let numbers = [1, 2, 3, 4, 5];

// 1. numbers.length = 0;
// 2. numbers.splice (0, numbers.length);
// 3. Using loop
while (numbers.length > 0) 
    numbers.pop ();


console.log (numbers);


