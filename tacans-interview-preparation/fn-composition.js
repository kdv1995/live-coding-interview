// Discuss the concept of function composition in JavaScript. How can it be used to create reusable code?

//Answer:

// Function composition is a technique used in functional programming to combine multiple functions to create a new function. This allows for the creation of reusable and modular code by breaking down complex operations into smaller, composable functions.

// In JavaScript, function composition can be achieved by chaining multiple functions together, where the output of one function becomes the input of the next function. This can be done using higher-order functions, which take one or more functions as arguments and return a new function that combines their behavior.
//
// For example, consider the following functions:

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function subtract(x, y) {
  return x - y;
}

// We can create a new function that composes these functions together to perform a series of operations:


//Is it an array of functions or a list of functions? I think it is a list of functions.
//I will change the name of the function to reflect that.
//So, does functions recieve it like an array of functions using the spread operator? I think so.



function composeFunctions(...fns) {
  return function (x, y) {
    console.log(x,y)
    let res =  fns.reduce((acc, fn) => fn(acc, y), x);
    return res;
  };
}

const composedFunction = composeFunctions(add, multiply, subtract);

console.log(composedFunction(2, 3)); // Output: 1
console.log(composedFunction(5, 2)); // Output: 8

// In this example, the `composeFunctions` function takes an arbitrary number of functions as arguments and returns a new function that applies each function in sequence to the input values. This allows us to create a reusable function that combines the behavior of multiple functions.

// Function composition can be a powerful tool for creating modular and reusable code in JavaScript, especially in functional programming paradigms. By breaking down complex operations into smaller, composable functions, we can build more maintainable and flexible code that is easier to reason about and test.
