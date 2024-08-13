// What is the role of the "this" keyword in JavaScript? How does it behave in different contexts?

//Answer:

// The "this" keyword in JavaScript refers to the object that is currently executing the function or method. The behavior of "this" can vary depending on the context in which it is used:

// Global Context: When "this" is used in the global context (outside of any function), it refers to the global object (window in browsers, global in Node.js).

// Function Context: When "this" is used inside a function, its value depends on how the function is called. If the function is called as a method of an object, "this" refers to the object itself. If the function is called as a standalone function, "this" refers to the global object.

// Arrow Functions: Arrow functions do not have their own "this" value. Instead, they inherit the "this" value from the surrounding lexical context. This behavior makes arrow functions useful for maintaining the correct value of "this" in callback functions or event handlers.

// Constructor Functions: When a function is used as a constructor with the new keyword, "this" refers to the newly created object instance.

// Event Handlers: In event handler functions, "this" typically refers to the element that triggered the event.

// Explicit Binding: The "this" value can be explicitly set using methods like call(), apply(), or bind(). These methods allow you to specify the value of "this" for a function call.
console.log("76", second);

// Prototype Methods: When a method is called on an object instance, "this" refers to the object itself. This behavior allows methods to access and modify the object's properties.

//Examples:

// Global Context
console.log(this); // Output: Window

// Function Context
function exampleFunction() {
  console.log(this);
}

exampleFunction(); // Output: Window

const obj = {
  method() {
    console.log(this);
  },
};

obj.method(); // Output: { method: [Function: method] }

// Arrow Functions

// const arrowFunction = () => {
// console.log(this);
// };

// arrowFunction(); // Output: Window

// const obj = {
//   method() {
//     const arrowFunction = () => {
//       console.log(this);
//     };
//     arrowFunction();
//   },
// };

// obj.method(); // Output: { method: [Function: method] }

// Constructor Functions

function ExampleConstructor() {
  console.log(this);
}

const instance = new ExampleConstructor(); // Output: ExampleConstructor {}

// Event Handlers

// document.getElementById("exampleButton").addEventListener("click", function () {
//   console.log(this);
// });

function desired(first, second) {
  console.log("75", first);
  const { name, key } = second;
  console.log(name, key);
  console.log(this);
}

desired.apply("example", [
  "welcome",
  {
    name: "John",
    key: {
      age: 25,
    },
  },
]); // Output: { name: 'example' }

// Explicit Binding

// function exampleFunction() {
//   console.log(this);
// }

// const obj = { name: "example" };

// exampleFunction.call(obj); // Output: { name: 'example' }

// Prototype Methods

// function ExampleConstructor() {
// this.property = "example";
// }

// ExampleConstructor.prototype.method = function () {
// console.log(this.property);
// };

// const instance = new ExampleConstructor();

// instance.method(); // Output: example

// In summary, the behavior of the "this" keyword in JavaScript is context-dependent and can vary based on how a function is called or defined. Understanding the different contexts in which "this" is used is essential for writing effective and maintainable JavaScript code.
