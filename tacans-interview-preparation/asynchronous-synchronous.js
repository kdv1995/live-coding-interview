// What are the differences between synchronous and asynchronous code execution in JavaScript?

//Answer:

// Synchronous code execution refers to the sequential execution of code where each statement is executed one after the other in the order they appear. This means that the program waits for each statement to complete before moving on to the next one. Synchronous code is easy to read and understand, but it can lead to blocking behavior, where long-running tasks prevent other code from executing.

// Asynchronous code execution, on the other hand, allows multiple tasks to be executed concurrently without waiting for each other to complete. This is achieved using callbacks, promises, async/await, and other mechanisms that enable non-blocking behavior. Asynchronous code is commonly used for tasks that involve I/O operations, such as fetching data from a server, reading files, or handling user input.

//Examples:

// Synchronous code example:
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result); // Output: 5

// Asynchronous code example using a Promise:
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Output: Data fetched successfully
  })
  .catch((error) => {
    console.error(error);
  });

console.log("Fetching data..."); // Output: Fetching data...

// In the above example, the fetchData function simulates fetching data asynchronously using a Promise. The program continues executing the console.log('Fetching data...') statement without waiting for the data to be fetched, demonstrating the non-blocking nature of asynchronous code execution. Once the data is fetched, the resolved value is logged to the console using the .then() method of the Promise.
