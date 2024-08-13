//
// Understanding the concept of this in JavaScript can indeed be challenging due to its dynamic nature and varied behavior across different contexts. Let's break down the concept of this in different contexts to make it clearer:
//
// Global Context:
//
// In the global context (outside of any function), this refers to the global object (window in browsers, global in Node.js).
// javascript
// Copy code
// console.log(this === window); // Output (in a browser): true
// Function Context:
//
// Inside a function, the value of this depends on how the function is called.
// When a function is called as a standalone function, this refers to the global object (in non-strict mode) or undefined (in strict mode).
// javascript
// Copy code

console.log(this);
// Standlaon means окрема функція
function logThis() {
  console.log(this);
}
logThis(); // Output (in a browser): Window {...}
//
// logThis(); // Output (in a browser): Window {...}
// Method Context:
//
// When a function is called as a method of an object, this refers to the object on which the method is called.
// javascript
// Copy code
const obj = {
  name: "John",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};
//
obj.greet(); // Output: Hello, John!
// Constructor Context:
//
// When a function is used as a constructor with the new keyword, this refers to the newly created instance.
// javascript
// Copy code
function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name); // Output: John
// Event Handler Context:
//
// In event handlers, this typically refers to the element that triggered the event.
// html
// Copy code
// / <button onclick="console.log(this)">Click me</button>
// const button = document.querySelector(".button");
// button.onclick = function () {
//   button.innerHTML = "Clicked!";
// };
// const btn = document.querySelector(".button");
//
// btn.addEventListener("click", function () {
//   console.log(this);
// });
// Arrow Function Context:
//
// Arrow functions lexically bind this, meaning they inherit this from the surrounding code.
// Inside an arrow function, this refers to the this value of the enclosing lexical scope.
// javascript
// Copy code
const obj2 = {
  name: "Sarah",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  },
};
function f(welcome) {
  console.log(welcome + "" + this.name);
}
console.log(f.call(obj2, "welcome"));

const f2 = f.bind(obj2, "welcome");
f2();

obj2.greet(); // Output after 1 second: Hello, Sarah!
// Understanding the context in which a function is called is crucial for determining the value of this within the function. It's essential to be aware of these different contexts to avoid unexpected behavior and ensure that this behaves as intended in your JavaScript code.

// What the neccessity to bind with apply, call and bind ?
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// The call() method calls a function with a given this value and arguments provided individually.

// The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
