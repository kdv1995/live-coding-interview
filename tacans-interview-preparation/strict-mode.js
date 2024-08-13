// How does the use strict directive impact JavaScript code? When should it be used?
// Answer:

// The "use strict" directive enables strict mode in JavaScript, which helps catch common coding errors and prevent potentially problematic code from running. It enforces stricter parsing and error handling rules, making it easier to write secure and reliable code. Strict mode also disables certain features that are prone to errors or considered bad practice, such as implicit global variables and octal literals. It should be used at the beginning of a script or function to apply its effects to the entire code block. Strict mode is recommended for all modern JavaScript projects to improve code quality and maintainability. It can help identify and prevent common bugs, improve performance, and ensure compatibility with future versions of the language. By using strict mode, developers can write cleaner, more robust code that is less likely to break or behave unexpectedly. It is especially useful in large-scale projects where consistency and reliability are crucial.

// With this snippet from strict-mode.js:
// // How does the use strict directive impact JavaScript code? When should it be used?
// // Answer:

// // The "use strict" directive enables strict mode in JavaScript, which helps catch common coding errors and prevent potentially problematic code from running. It enforces stricter parsing and error handling rules, making it easier to write secure and reliable code. Strict mode also disables certain features that are prone to errors or considered bad practice, such as implicit global variables and octal literals. It should be used at the beginning of a script or function to apply its effects to the entire code block. Strict mode is recommended for all modern JavaScript projects to improve code quality and maintainability. It can help identify and prevent common bugs, improve performance, and ensure compatibility with future versions of the language. By using strict mode, developers can write cleaner, more robust code that is less likely to break or behave unexpectedly. It is especially useful in large-scale projects where consistency and reliability are crucial.

//Show an examples of how strict mode prevent erros in JavaScript code

// Example 1: Preventing the use of undeclared variables

// In non-strict mode, assigning a value to an undeclared variable creates a global variable. This can lead to unexpected behavior and difficult-to-debug errors. Strict mode prevents this by throwing a ReferenceError when attempting to assign a value to an undeclared variable.

// Non-strict mode

// x = 10; // Creates a global variable 'x'

// console.log(x); // 10

// Strict mode

// 'use strict';

// x = 10; // Throws a ReferenceError: x is not defined

// Example 2: Preventing the use of reserved keywords as variable names

// In non-strict mode, using reserved keywords as variable names does not throw an error. This can lead to confusion and potential conflicts with built-in functionality. Strict mode prevents this by throwing a SyntaxError when using reserved keywords as variable names.

// Non-strict mode

// var let = 10; // No error

// console.log(let); // 10

// Strict mode

// 'use strict';

// var let = 10; // Throws a SyntaxError: Unexpected strict mode reserved word

// Example 3: Preventing duplicate parameter names in functions

// In non-strict mode, defining multiple parameters with the same name in a function does not throw an error. This can lead to unexpected behavior and make the code harder to understand. Strict mode prevents this by throwing a SyntaxError when defining duplicate parameter names in a function.

// Non-strict mode

// function sum(a, a) {

//     return a + a;

// }

// console.log(sum(1, 2)); // 4

// Strict mode

// 'use strict';

// function sum(a, a) { // Throws a SyntaxError: Duplicate parameter name not allowed in this context

//     return a + a;

// }

// Example 4: Preventing the use of octal literals

// In non-strict mode, octal literals (numbers with a leading zero) are allowed. This can lead to confusion and unexpected behavior, as octal literals are treated differently in JavaScript. Strict mode prevents this by throwing a SyntaxError when using octal literals.

// Non-strict mode

// var num = 010; // Octal literal

// console.log(num); // 8

// Strict mode

// 'use strict';

// var num = 010; // Throws a SyntaxError: Octal literals are not allowed in strict mode

// Example 5: Preventing the use of with statement

// In non-strict mode, the with statement is allowed, which can lead to performance issues and make the code harder to understand. Strict mode prevents this by throwing a SyntaxError when using the with statement.

// Non-strict mode

// var obj = { x: 10 };

// with (obj) {

//     console.log(x); // 10

// }

// Strict mode

// 'use strict';

// var obj = { x: 10 };

// with (obj) { // Throws a SyntaxError: Strict mode code may not include a with statement

//     console.log(x);

// }

// Example 6: Preventing the use of eval

// In non-strict mode, the eval function is allowed, which can introduce security vulnerabilities and make the code harder to debug. Strict mode prevents this by throwing a SyntaxError when using the eval function.

// Non-strict mode

// var code = 'console.log("Hello, World!")';

// eval(code); // Hello, World!

// Strict mode

// 'use strict';

// var code = 'console.log("Hello, World!")';

// eval(code); // Throws a SyntaxError: eval is not allowed in strict mode

// Example 7: Preventing the use of delete on non-configurable properties

// In non-strict mode, the delete operator can be used to delete non-configurable properties of an object. This can lead to unexpected behavior and make the code harder to maintain. Strict mode prevents this by throwing a TypeError when attempting to delete non-configurable properties.

// Non-strict mode

// var obj = {};

// Object.defineProperty(obj, 'x', {

//     value: 10,

//     configurable: false

// });

// delete obj.x; // No error

// console.log(obj.x); // undefined

// Strict mode

// 'use strict';

// var obj = {};

// Object.defineProperty(obj, 'x', {

//     value: 10,

//     configurable: false

// });

// delete obj.x; // Throws a TypeError: Cannot delete property 'x' of #<Object>

// Example 8: Preventing the use of duplicate object property names

// In non-strict mode, defining multiple properties with the same name in an object literal does not throw an error. This can lead to unexpected behavior and make the code harder to maintain. Strict mode prevents this by throwing a SyntaxError when defining duplicate property names in an object literal.

// Non-strict mode

// var obj = {

//     x: 10,

//     x: 20

// };

// console.log(obj.x); // 20

// Strict mode

// 'use strict';

// var obj = {

//     x: 10,

//     x: 20

// };

// console.log(obj.x); // Throws a SyntaxError: Duplicate data property in object literal not allowed in strict mode

// Example 9: Preventing the use of arguments.callee and arguments.caller

// In non-strict mode, the arguments.callee and arguments.caller properties are allowed, which can introduce security vulnerabilities and make the code harder to maintain. Strict mode prevents this by throwing a TypeError when using arguments.callee and arguments.caller.

// Non-strict mode

// function factorial(n) {

//     if (n <= 1) {

//         return 1;

//     }

//     return n * arguments.callee(n - 1);

// }

// console.log(factorial(5)); // 120

// Strict mode
