// Example of objects

// Creating an object
const rectangle = {
    length: 1,
    breadth: 2,

    // Behaviour or method
    draw: function() {
        console.log("Drawing...");
    }
};

rectangle.draw ();

// Methods to create multiple objects
// 1. Factory function
function createRectangle (length, breadth) {

    const rectangle = {
        length: length,     // Or we can only write length 
        breadth: breadth,   // same, only write breadth
    
        // Behaviour or method
        draw: function() {
            console.log("Drawing...");
        }
    };

    return rectangle;
}

let rectangleObj = createRectangle (1,3);
console.log (rectangleObj);


// 2. Constructor function  --> Pascal Notation
function Rectangle () {
    this.length = 1;
    this.breadth = 2;
    this.draw = function () {
        console.log ("Hello World");
    }
}

// Object creation using Constructor function
let rectangleObject = new Rectangle ();
rectangleObject.draw ();

// What is the constructor of Rectangle()?
let NewRectangle = new Function ('length', 'breadth', `this.length = 1;
this.breadth = 2;
this.draw = function () {
    console.log ("Hello World");
}`);

let newObj = new NewRectangle (2, 3);
console.log (newObj);



// If we want to check that if any key is present in the object or not then
if ('color' in rectangle) 
    console.log ("Present");
else 
    console.log ("Absent");