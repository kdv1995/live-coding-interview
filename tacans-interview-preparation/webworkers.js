// What are Web Workers in JavaScript? How do they enable parallel processing in web applications?

//Answer:

// Web Workers in JavaScript are a feature that allows developers to run scripts in the background, separate from the main execution thread of a web application. This enables parallel processing by utilizing multiple threads to perform tasks concurrently, improving performance and responsiveness.

// Web Workers are useful for handling computationally intensive operations, such as complex calculations, data processing, or image manipulation, without blocking the main UI thread. By offloading these tasks to separate worker threads, the main thread remains responsive, providing a smoother user experience.

// Web Workers communicate with the main thread using a messaging system, allowing data to be passed back and forth between the worker and the main application. This enables coordination and synchronization between the main thread and worker threads, facilitating parallel processing and efficient task execution.

// Overall, Web Workers are a powerful tool for optimizing web applications, enabling developers to leverage parallel processing capabilities and improve performance by distributing workloads across multiple threads.

// Example of using a Web Worker in JavaScript:

// // Create a new Web Worker from an external script file
// const worker = new Worker('worker.js');

// // Send a message to the worker
// worker.postMessage('Hello from the main thread!');
// // Receive messages from the worker
// worker.onmessage = (event) => {
//   console.log('Message from worker:', event.data);
// };
