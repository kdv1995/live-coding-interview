// FIRST QUESTION
// 1. Key features of ES6

//What does it mean that function has it's own this context? It means that the value of this inside a function is determined by how the function is called. It can be the global object, the object that the function is a method of, or undefined.
//Show an examples of how this can change depending on how a function is called. // 1.1. In the global context, this refers to the global object. // 1.2. In a method, this refers to the object that the method is a property of. // 1.3. In a constructor, this refers to the object being created. // 1.4. In an event handler, this refers to the element that the event is fired on. // 1.5. In a function called with call, apply, or bind, this refers to the first argument passed to the function. // 1.6. In a function called with new, this refers to the newly created object. // 1.7. In a function called with arrow function, this refers to the value of this in the surrounding lexical context.

// 1.1. let and const // let is block scoped, const is block scoped and can't be reassigned.  // var is function scoped and can be reassigned.
// 1.2. Arrow functionn // const add = (a, b) => a + b; // const square = x => x * x; // const greet = () => 'Hello';
// 1.4. Template literals ``
// 1.5. Destructuring;  const numbers = [1,2,3]; const [one, two, three] = numbers; const person = {name: 'John', age: 30}; const {name, age} = person;
// 1.6. Rest and Spread  //Spread is for merging, copying, and spreading arrays and objects. //Rest is for destructuring arrays and objects.;
// Rest is for destructuring arrays and objects. And a way to to accept a variable number of arguments in a function.
// 1.7. Object literals
// 1.8. Promises Promises are objects that represent the eventual outcome of an asynchronous operation. A promise can be in one of three states: pending, resolved, or rejected. Methods: .then(), .catach(), .finally(), .all(),  .race() , .allSettled(), .any(), .resolve(), .reject(), .try(), .tryAll(), .tryRace(), .tryAny(). We can use async/await with promises, which is a human readable way to work with promises. Inside async/await, we can use try/catch to handle errors.
// 1.9. Classes; This is a syntax sugar for the prototype-based inheritance.  class Person { constructor(name) { this.name = name; } greet() { return `Hello, my name is ${this.name}`; } } const john = new Person('John'); console.log(john.greet()); // Hello, my name is John
// 1.10. Modules
// 1.11. Generators
// 1.12. Maps and Sets

// Filling the gaps on this keyword in JavaScript
// 1. Implicit binding:
// When a function is called as a method of an object, this refers to the object the method is called on.
const obj = {
  name: "John",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

obj.greet(); // Output: Hello, John!

// 2. Explicit binding:
// You can explicitly set the value of this using methods like call(), apply(), or bind().

//Why we need call, bind and apply methods? To explicitly set the value of this in a function. To borrow methods from other objects. To call a function with a specific context.
// I don't really understand why we need call bind and apply and it's practical usage. Can you explain? To explicitly set the value of this in a function. To borrow methods from other objects. To call a function with a specific context.  // Can you show me an example of how to use call, bind and apply methods? // 2.1. call() // 2.2. apply() // 2.3. bind() // 2.4. Global context // 2.5. Constructor Functions // 2.6. Arrow Functions // 2.7. Event Handlers // 2.8. Callback Functions    // 2.9. Method chaining

function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = { name: "Alice" };

greet.call(person); // Output: Hello, Alice!
greet.apply(person); // Output: Hello, Alice!

const boundGreet = greet.bind(person);
boundGreet(); // Output: Hello, Alice!

//3. Global context
// In the global scope or when a function is called without any context, this refers to the global object (window in browsers, global in Node.js).

console.log(this === window); // Output (in a browser): true

function logThis() {
  console.log(this);
}

logThis(); // Output (in a browser): Window {...}

// 4. Constructor Functions:
// When a function is used as a constructor(with the new keyword), this refers to the newly created instance.

function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name); // Output: John

// 5. Arrow Functions:
//
// Arrow functions lexically bind this, meaning they inherit this from the surrounding code.

const one = {
  name: "Sarah",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  },
};

one.greet(); // Output: Hello, Sarah!
//Does arrow functions have their own this context? No, arrow functions do not have their own this context. They inherit this from the surrounding code.

// 6. Event Handlers:
//
// In event handlers, this usually refers to the element that triggered the event.
//

<button onclick="console.log(this)">Click me</button>;

// SECOND QUESTION

// 2. What is the difference between let, const, and var in JavaScript? // 2.1. let and const // 2.2. var // 2.3. Hoisting // 2.4. Scope // 2.5. Reassignment // 2.6. Temporal Dead Zone // 2.7. Global Object // 2.8. Block Scope // 2.9. Function Scope // 2.10. Redeclaration // 2.11. Garbage Collection // 2.12. Memory Leaks // 2.13. Performance // 2.14. Best Practices

// 2.1. let and const
// let and const are block-scoped, meaning they are only accessible within the block they are declared in.
// const is block-scoped and cannot be reassigned.
// let is block-scoped and can be reassigned.
// var is function-scoped and can be reassigned.
// 2.2. var
// var is function-scoped and can be reassigned.
// 2.3. Hoisting
// var declarations are hoisted to the top of their function scope, while let and const declarations are not hoisted.
// 2.4. Scope
// var is function-scoped, while let and const are block-scoped.
// 2.5. Reassignment
// const cannot be reassigned, while let and var can be reassigned.
// 2.6. Temporal Dead Zone
// let and const are not accessible before they are declared, resulting in a temporal dead zone.
// 2.7. Global Object
// var declarations are added to the global object, while let and const are not.
// 2.8. Block Scope
// let and const are block-scoped, meaning they are only accessible within the block they are declared in.
// 2.9. Function Scope
// var is function-scoped, meaning it is only accessible within the function it is declared in.
// 2.10. Redeclaration
// var can be redeclared within the same scope, while let and const cannot.
// 2.11. Garbage Collection
// var declarations are not automatically garbage collected, while let and const are.
// 2.12. Memory Leaks
// var declarations can lead to memory leaks due to their global scope, while let and const are more memory-efficient.

// 2.13. Performance
// let and const have better performance compared to var due to their block scope.
// 2.14. Best Practices
// It is recommended to use const by default and only use let when reassignment is necessary.

// THIRD QUESTION
