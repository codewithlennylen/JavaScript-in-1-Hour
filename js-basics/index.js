// PRIMITIVE TYPES
// in JS, number includes integer as well as floating point numbers.
let firstName = "John"; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let lastName; // Undefined
let selectedColor = null; // Null.
console.log(firstName);

// LET vs CONST
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

const interestRateConst = 0.3;
// interestRateConst = 1;
console.log(interestRateConst);

// JAVASCRIPT IS DYNAMICALLY TYPED
// Type of variable is determined at runtime.
console.log(typeof firstName); // The typeof keyword gets us the type (primitive-type )
firstName = 200;
console.log(typeof firstName);

//  REFERENCE TYPES -> Object, Array, Function.

let name = "Mosh";
let myAge = 30;
// This can be represented as an Object
let person = {
  // Object Literal
  name: "Mosh",
  myAge: 30,
};
console.log(person);

// Dot Notation
person.name = "John";
console.log(person.name);

// Bracket Notation
person["name"] = "Mary";
console.log(person["name"]);

// ARRAYS
let selectedColors = ["red", "blue"];
selectedColors[2] = 1; // Length of array is dynamic so it the types inside the array
// console.log(typeof selectedColors);
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);


// FUNCTIONS
function greet(name, lastName) { // name is a parameter
    console.log('Hello ' + name + ' ' + lastName); // This code can be cleaned up using template literals
}

greet('Lenny','Nganga'); // Lenny is an argument

function square(number){
    return number * number;
}

console.log(square(2));