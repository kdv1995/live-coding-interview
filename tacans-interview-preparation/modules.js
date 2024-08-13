// What are modules in JavaScript? How do they help in organizing code?
// Modules are reusable pieces of code that can be exported from one program and imported for use in another program. They help in organizing code by keeping the code clean and separated into different files. This makes it easier to maintain and debug the code. Modules also help in reducing the complexity of the code by breaking it down into smaller, manageable pieces. This makes it easier to understand and work with the code. Modules also help in reusability of code, as they can be imported and used in different programs without having to rewrite the code. This makes it easier to develop new programs and applications by reusing existing code. Modules also help in reducing the chances of naming conflicts, as each module has its own scope and does not interfere with other modules. This makes it easier to work with different modules in the same program without worrying about naming conflicts. Overall, modules help in organizing code, making it easier to maintain, debug, and reuse code in different programs.

//Examples of modules in JavaScript:
//1. CommonJS modules: CommonJS is a module system for JavaScript that allows you to define modules using the `module.exports` and `require` keywords. For example:

// math.js
module.exports = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

// app.js
const math = require("./math");
console.log(math.add(2, 3)); // Output: 5
console.log(math.subtract(5, 2)); // Output: 3

//2. ES6 modules: ES6 introduced a new module system for JavaScript that allows you to define modules using the `export` and `import` keywords. For example:

// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// app.js
import { add, subtract } from "./math";
console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3

//3. Node.js modules: Node.js is a JavaScript runtime that uses CommonJS modules for organizing code. Node.js provides built-in modules that can be imported and used in your programs. For example:

// fs.js
const fs = require("fs");
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//4. Third-party modules: There are many third-party modules available for JavaScript that provide additional functionality and features. These modules can be installed using package managers like npm and imported into your programs. For example:

// axios.js
const axios = require("axios");
axios
  .get("https://api.github.com/users")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

//Overall, modules are an essential part of organizing code in JavaScript and help in making the code more maintainable, reusable, and easier to work with.
