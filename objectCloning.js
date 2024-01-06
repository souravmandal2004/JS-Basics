// There are three methods available
// 1.Iteration method
let rectangle = {
    length: 10, 
    breadth: 20
};

let copied = {};

for (let key in rectangle) {
    copied[key] = rectangle[key ];
}
console.log (copied);


// 2.Assign
let destination = Object.assign ({}, rectangle);
console.log (destination);

// Spread operator
let dest = {...rectangle};
console.log (dest);