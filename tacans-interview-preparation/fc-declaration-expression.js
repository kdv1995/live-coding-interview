// What are the differences between a function declaration and a function expression in JavaScript?



//Answer:
// Function Declaration:
// Function declarations are hoisted, meaning they are available for use before they are declared in the code. This allows you to call a function before it is defined in the code.
// Function declarations are defined using the function keyword followed by the function name and a block of code enclosed in curly braces.
// Function declarations can be used to create named functions that can be called by their name.
// Function Expression:
// Function expressions are not hoisted, meaning they are not available for use before they are declared in the code. You need to define a function expression before calling it.
// Function expressions are defined by assigning a function to a variable or constant. The function can be named or anonymous.
// Function expressions can be used to create anonymous functions or named functions that are assigned to variables or constants.
// Differences:
// Function declarations are hoisted, while function expressions are not hoisted.
// Function declarations create named functions, while function expressions can create named or anonymous functions.
// Function declarations can be called before they are defined in the code, while function expressions need to be defined before they are called.
// Example:
// Function Declaration:
function square(x) {
    return x * x;
}
console.log(square(5)); // Output: 25
// Function Expression:
const square = function(x) {
    return x * x;
};
console.log(square(5)); // Output: 25
// In the above example, the function declaration and function expression both calculate the square of a number. The function declaration is hoisted and can be called before it is defined, while the function expression needs to be defined before it is called. Both approaches achieve the same result, but the syntax and behavior differ between the two.



