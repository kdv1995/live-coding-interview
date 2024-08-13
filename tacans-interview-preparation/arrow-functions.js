// What is arrow function in JavaScript? How to use it? Explain with examples.
// Arrow functions are a new way to write anonymous function expressions in JavaScript. They are more concise and easier to read than traditional function expressions. Arrow functions are also known as fat arrow functions because they use the => syntax. Here is an example of an arrow function:

// Traditional function expression
const add = function (a, b) {
  return a + b;
};

// Arrow function
const add1 = (a, b) => a + b;

// Arrow functions have a few key differences from traditional function expressions:

// 1. No need to use the function keyword.
// 2. The arrow (=>) separates the function parameters from the function body.
// 3. If the function body consists of a single expression, you can omit the curly braces and the return keyword.
// 4. If the function has only one parameter, you can omit the parentheses around the parameter list.
// 5. Arrow functions do not have their own this value. They inherit the this value from the surrounding code.

// Here are a few more examples of arrow functions:

// Traditional function expression

const square = function (x) {
  return x * x;
};

// Arrow function

const square1 = (x) => x * x;

// Traditional function expression

const greet = function () {
  return "Hello!";
};

// Arrow function

const greet1 = () => "Hello!";

// Traditional function expression

const log = function (message) {
  console.log(message);
};

// Arrow function

const log1 = (message) => console.log(message);

// Arrow functions are especially useful when working with higher-order functions like map, filter, and reduce. They can make your code more concise and easier to read. However, you should be aware of the differences between arrow functions and traditional function expressions, especially when it comes to the this value. Arrow functions do not have their own this value, so they are not suitable for methods or constructors that rely on the this value. In those cases, you should use traditional function expressions instead.

// Path: async-await.js

// What is async/await in JavaScript? How does it work? Explain with examples.
// Async/await is a new way to write asynchronous code in JavaScript. It is built on top of promises and provides a more readable and concise syntax for handling asynchronous operations. Async/await allows you to write asynchronous code that looks and behaves like synchronous code.

// The async keyword is used to define an asynchronous function. An asynchronous function is a function that returns a promise. The await keyword is used to pause the execution of an asynchronous function until a promise is settled (resolved or rejected). Here is an example of an async function that fetches data from an API using the fetch function:

async function fetchData(url) {
  const response = await fetch(url);

  const data = await response.json();

  return data;
}

// In this example, the fetchData function is defined as an asynchronous function using the async keyword. Inside the function, the await keyword is used to pause the execution of the function until the fetch function returns a response. The response is then converted to JSON using the json method, and the data is returned from the function.

// You can call an async function using the await keyword inside another async function or using the then method on the returned promise. Here is an example of calling the fetchData function:

async function main() {
  const data = await fetchData("https://api.example.com/data");

  console.log(data);
}

main();

// In this example, the main function is defined as an asynchronous function. Inside the function, the fetchData function is called using the await keyword, and the data is logged to the console.

// Async/await is a powerful feature that simplifies asynchronous programming in JavaScript. It allows you to write asynchronous code that is easier to read and maintain. However, you should be aware of the limitations of async/await, such as error handling and performance considerations. It is important to use async/await judiciously and understand how it works under the hood to avoid common pitfalls and issues.

// Path: promises.js
// What are promises in JavaScript? How do they work? Explain with examples.
// Promises are a new way to write asynchronous code in JavaScript. They are used to handle asynchronous operations and provide a more readable and maintainable alternative to callback functions. Promises represent the eventual completion (or failure) of an asynchronous operation and allow you to attach callbacks to handle the results. Here is an example of a promise:

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully");
  }, 2000);
});

// In this example, a new Promise object is created with a callback function that takes two parameters: resolve and reject. Inside the callback function, a setTimeout function is used to simulate an asynchronous operation that resolves after 2 seconds. The resolve function is called with the success message 'Data fetched successfully'.

// You can attach callbacks to a promise using the then method. The then method takes two optional callback functions: one for the success case (resolve) and one for the failure case (reject). Here is an example of attaching callbacks to the fetchData promise:

fetchData.then((data) => {
  console.log(data);
});

// In this example, the then method is used to attach a success callback function that logs the data to the console. When the promise is resolved, the success callback function is called with the resolved value.
