// What are Promises in JavaScript? How do they help in handling asynchronous operations?
// Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They help in handling asynchronous operations by providing a cleaner and more readable way to work with asynchronous code, avoiding callback hell and improving error handling.

// Promises have three states: pending, fulfilled, and rejected. When a promise is pending, it means the asynchronous operation is still in progress. When a promise is fulfilled, it means the operation was successful, and the promise returns a value. When a promise is rejected, it means the operation failed, and the promise returns an error.

// Promises can be chained using the .then() method to handle the success case and the .catch() method to handle errors. This allows for more structured and organized code when dealing with multiple asynchronous operations. Additionally, promises can be combined using methods like Promise.all() and Promise.race() to handle multiple asynchronous operations concurrently or sequentially. This makes it easier to manage complex asynchronous workflows and dependencies. Promises also support error propagation, allowing errors to be caught and handled at different levels of the promise chain. This helps in debugging and maintaining asynchronous code. Overall, promises provide a more elegant and efficient way to work with asynchronous operations in JavaScript.

// Describe the async/await syntax introduced in ES8 (ES2017). How does it simplify asynchronous code?
// The async/await syntax introduced in ES8 (ES2017) is a feature of JavaScript that allows for easier handling of asynchronous operations. It simplifies asynchronous code by providing a more synchronous and readable way to write asynchronous functions.

// The async keyword is used to define an asynchronous function, which returns a promise. Within an async function, the await keyword is used to pause the execution of the function until a promise is resolved. This allows for sequential and synchronous-looking code, even though it is still asynchronous under the hood. The await keyword can only be used within async functions.

// By using async/await, developers can write asynchronous code that looks and behaves like synchronous code, making it easier to understand and maintain. It eliminates the need for nested callbacks or promise chaining, reducing the complexity of asynchronous code. Error handling is also simplified with async/await, as try/catch blocks can be used to catch and handle errors within the asynchronous function. This makes it easier to manage errors and maintain code readability. Overall, async/await provides a more intuitive and elegant way to work with asynchronous operations in JavaScript.

// Give example of callback hell and how to avoid it using promises
// Callback hell is a common issue in JavaScript when dealing with multiple asynchronous operations that depend on each other. It occurs when callbacks are nested within each other, leading to deeply nested and hard-to-read code. This can make the code difficult to understand, debug, and maintain. Here is an example of callback hell:

function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 2000);
}

fetchData((data) => {
  console.log("Data fetched:", data);
  fetchData((data) => {
    console.log("Data fetched:", data);
    fetchData((data) => {
      console.log("Data fetched:", data);
    });
  });
});

// function one(callback) {
//   return function two() {
//     return function three() {
//       return function four() {
//         return callback();
//       };
//     };
//   };
// }
//
// function callback() {
//   console.log("Callback function called");
// }
//
// one(callback)()()();

//Examples of promises and async/await syntax
// Promises in JavaScript
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let res = false;
//       if (res === false) {
//         reject("Error fetching data");
//       }
//       const data = { name: "John", age: 30 };
//       // Simulate success
//       resolve(data);
//       // Simulate error
//       // reject('Error fetching data');
//     }, 2000);
//   });
// }
//
// fetchData()
//   .then((data) => {
//     console.log("Data fetched:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
//
// // Async/await in JavaScript
//
// async function fetchDataAsync() {
//   try {
//     const data = await fetchData();
//     console.log("Data fetched:", data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
//
// let promises = [fetchData(), fetchData(), fetchData()];
// let result = (Promise.allSettled = function (promises, callback) {
//   return Promise.all(
//     promises.map((promise) =>
//       promise
//         .then((value) => ({ status: "fulfilled", value }))
//         .catch((reason) => ({ status: "rejected", reason })),
//     ),
//   ).then(callback);
// });
//
// fetchDataAsync().allSettled((data) => {
//   console.log("All settled:", data);
// });
