// Using loop
function sum () {
    let total = 0;
    for (let value of arguments) 
        total += value;
    return total;
}

let ans = sum (1, 2, 3, 4, 5);
console.log (ans);


// Using Rest operator (...)
function print (...args) {
    console.log (args);
}
print (1, 2, 3, 4, 5);