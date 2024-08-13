// Discuss the purpose of the fetch API in JavaScript. How does it differ from traditional AJAX requests?

// Answer:
// The fetch API in JavaScript is used to make asynchronous HTTP requests to servers. It provides a modern, promise-based interface for fetching resources from the web. The fetch API is built into modern browsers and does not require additional libraries or plugins to use. It supports various options for customizing requests, such as setting headers, specifying request methods, and handling response data. The fetch API is commonly used in modern web development for fetching data from APIs, loading external resources, and interacting with server-side endpoints. It simplifies the process of making network requests and handling responses in JavaScript applications. The fetch API differs from traditional AJAX requests in several ways:
// 1. Simplicity: The fetch API provides a more streamlined and modern approach to making HTTP requests compared to the older XMLHttpRequest object used in AJAX. It uses promises and a more intuitive syntax for handling asynchronous operations.
// 2. Promise-based: The fetch API returns a promise that resolves to the response from the server, allowing developers to work with asynchronous data more easily.
// 3. Built-in support: The fetch API is built into modern browsers, eliminating the need for external libraries or plugins to handle network requests.
// 4. Fetch options: The fetch API supports various options for customizing requests, such as setting headers, specifying request methods, and handling response data.
// Overall, the fetch API is a powerful tool for making network requests in JavaScript applications and provides a modern, efficient way to interact with server-side resources. It offers a more straightforward and flexible approach compared to traditional AJAX requests, making it a preferred choice for many developers working on web projects.

//Show an equivalent example of using the fetch API and traditional AJAX requests in JavaScript. Compare the two approaches.

// Traditional AJAX request using XMLHttpRequest:

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

let data;
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      data = JSON.parse(xhr.responseText);

      let list = document.createElement("ul");
      data.forEach((item) => {
        let listItem = document.createElement("li");
        listItem.textContent = item.title;
        list.appendChild(listItem);
      });

      document.body.appendChild(list);
    } else {
      console.error("Error fetching data");
    }
  }
};

const element = document.createElement("div");
element.innerHTML = "Loading...";
document.body.appendChild(element);

xhr.send();

// Fetch API request:

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// In this example, the traditional AJAX request using XMLHttpRequest involves creating a new XMLHttpRequest object, opening a connection to the server, setting up an event listener to handle the response, and sending the request. The response is then processed based on the status and data received from the server. This approach is more verbose and requires manual handling of the request and response.

// On the other hand, the fetch API request uses the fetch function to make an asynchronous GET request to the specified URL. The response is then processed using promise-based syntax, where the data is extracted from the response and logged to the console. The fetch API provides a more concise and modern approach to making network requests, with built-in support for promises and error handling. It simplifies the process of fetching data from servers and interacting with APIs, making it a preferred choice for many developers working on web projects.

// Overall, the fetch API offers a more streamlined and efficient way to handle network requests in JavaScript applications compared to traditional AJAX requests using XMLHttpRequest. It provides a modern, promise-based interface for fetching resources from the web, making it easier to work with asynchronous data and interact with server-side endpoints. The fetch API is widely used in modern web development for loading external resources, fetching data from APIs, and handling network requests in JavaScript applications.
