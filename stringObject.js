let lastName = "Mandal";    // Primitive type string
let firstName = new String ("Sourav");      // Object 

console.log (typeof (lastName));
console.log (typeof (firstName));

// When we use . notation on any string, JS treats it as an Object
let lengthOfLastName = lastName.length;
console.log (lengthOfLastName);


let message = "This is my first message";
let words = message.split (" ");

console.log (words);