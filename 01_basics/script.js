console.log("Hello World!");
console.log(23 + 97);
let a;
a = (4 + 6 + 9) / 77;
console.log(a);

const MAX = 57;
let actual = MAX - 13;
let percentage = actual / MAX;

// function add(a, b) {
//   return a + b;
// }

// embedding js
let myName = "Olamide";
// console.log(`Hello, ${myName}`)

// function declaration
// the func can be called earlier than the declaration
sayHi("John Doe");

function sayHi(_name) {
  console.log(`Hi ${_name}`);
}

// function expression
// sayHi("John"); --> error!
let sayHello = function (_name) {
  console.log(`Hello ${_name}`);
};
// the func CANNOT be called earlier than the declaration
sayHello("Mujeeb");

// hoisting in JS is done with function deckarations and not function expresions

// let age = prompt("What is your age?", 18);

// conditionally declare a function
// if (age < 18) {

//   function welcome() {
//     alert("Hello!");
//   }

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }

// }

// ...use it later
// welcome(); // Error: welcome is not defined

// using ternary operator
// let welcome = (age < 18)?
//   function() {alert("Hi Child");}: // if true
//   function() {alert("Hi Adult");};

// welcome(); // no error now

// Summary
// Functions are values. They can be assigned, copied or declared in any place of the code.
// If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
// If the function is created as a part of an expression, it’s called a “Function Expression”.
// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
// Function Expressions are created when the execution flow reaches them.

// Arrow functions
let sum = (a, b) => a + b;

/**  Function expression format
let sum = function(a, b) {
  return a + b;
};
*/

// it can be shorter if we have only one argument, no need for parenthesis
let square = (n) => n ** 2;

// If there are no arguments, parentheses are empty, but they must be present:
let sayYolo = () => "YOLO!";

// Multiline arrow functions
// The arrow functions that we’ve seen so far were very simple. They took arguments from the left of =>, evaluated and returned the right-side expression with them.

// Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).

let add = (a, b) => {
  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

// alert( add(1, 2) ); // 3

console.log(sum(5, 7));
console.log(square(4));
console.log(sayYolo());

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] * tax;
  }
  return total;
};

// methods are functions associated with objects

//callback functions
const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};

myFunc(function (value) {
  // do something
  console.log(value);
});

// forEach
let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

people.forEach((person, index) => {
  console.log(person.toUpperCase(), index);
});
// you can also declare callback funtions outside

// Arrow function format
myFunc((value) => console.log(value));

// JS Call Stack
// JavaScript engine uses a call stack to manage eat works based on the LIFO (last-in-first-out) principle.xecution contexts.
// The call stack uses the stack data structure th

// function fn() {
//   fn();
// }

// fn(); // stack overflow

let fruit = "Apple";
console.log(fruit[2]);

// Assessment
//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
let capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

console.log(capitalize("lowercase"));
console.log(capitalize("UPPERCASE"));
console.log(capitalize("bOtH"));

// Write a function called lastLetter that takes a string and returns the very last letter of that string
function lastLetter(str) {
  return str.at(-1);
}

console.log(lastLetter("abcd"));

// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// let d = Math.random()
// e = d*100
// e = Math.floor(e)
// console.log(d)
// console.log(e)

// ARRAYS
console.log("ARRAYSsssssssssssss");

const contacts = ["Seye", "Dad", "Aaliyah", "Mum"];
let chat = contacts[0];
console.log(chat);

// document.getElementById("demo").innerHTML = contacts.toString();
// document.getElementById("demo").innerHTML = contacts;

contacts.sort();
console.log(contacts);

let lastContact = contacts[contacts.length - 1];
console.log(lastContact);

for (let i = 0; i < contacts.length; i++) {
  console.log(contacts[i]);
}

for (const contact in contacts) {
  contact.toUpperCase();
  console.log(contact);
}

contacts.push("Habiba");
console.log(contacts);

contacts[contacts.length] = "Fatimat";
console.log(typeof contacts);
console.log(Array.isArray(contacts));

document.getElementById("demo").innerHTML = contacts.join(" || ");

contacts.pop();
console.log(contacts);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

// The map() method creates a new array by applying a function to each item in the original array
function toUpper(string) {
  return string.toUpperCase();
}

const upperChildren = myChildren.map(toUpper);
console.log(upperChildren);

function lChildren(child) {
  return child.startsWith("L");
}

const filtered = myChildren.filter(lChildren);
console.log(filtered);

// use break and continue

// while loops
let c = 0;
while (c < contacts.length) {
  console.log(contacts[c]);
  c++;
}

// do-while loops The do...while loop guarantees that the code block will run at least once, even if the condition is false from the start.
c = 0;
do {
  console.log(contacts[c]);
  c++;
} while (c < contacts.length);
