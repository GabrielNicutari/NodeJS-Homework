// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// --------------------------------------
console.log(+numberOne + +numberTwo);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

let total = (+anotherNumberOne + +anotherNumberTwo).toFixed(2);
console.log(total);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

let average = ((one + two + three) / 3).toFixed(5);
console.log(average);

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

let position = letters.search("c");
console.log("The character '" + letters.charAt(position) + "' is on position " + position);

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

let pos = fact.indexOf("j");
let newFact = fact.slice(0, pos) + fact.charAt(pos).toUpperCase() + fact.slice(pos + 1);
console.log(newFact);
// --------------------------------------



