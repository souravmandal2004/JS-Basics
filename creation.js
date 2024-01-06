// Hoisting --> It is a process of moving function declaration to the top of the file by the JS engine and JS follows Hoisting

// Define a function
function greet () {
    console.log ("Good Morning");
}
greet ();   // Call the function


// Function Assignment
let run = function running () {
    console.log ("Yes, I am running...");
}
run ();     // Hoisting doesn't work in the case of function assignment


// Anonymous function assignment
let stand = function () {
    console.log ("Yes, I am standing right here.");
}

stand ();