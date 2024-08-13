// What is the spread operator in JavaScript? Give an example of its usage.

// Answer:
// The spread operator (...) in JavaScript is used to expand an iterable (like an array) into individual elements. It allows us to copy the contents of an array or object into another array or object, making it easier to work with data structures.
// How to expand with spread operator an iterable into individual elements in JavaScript? Give an example of its usage.

// The spread operator can be used in a variety of ways, such as:

// 1. Combining arrays:
// 2. Copying arrays:
// 3. Passing function arguments:
// 4. Merging objects:
// 5. Copying objects:

const obj = { a: 1, b: 2 };

const obj1 = { a: 3 };
const obj2 = { ...obj, ...obj1 };
console.log(obj2);

//Show examples of passing function arguments with spread operator in JavaScript. Give an example of its usage.

// The spread operator can be used to pass function arguments in JavaScript. It allows us to pass an array of arguments to a function as individual arguments. This can be useful when working with functions that accept a variable number of arguments. Here is an example:

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

const result = sum(...numbers);
//Why sum function sums all arguments in the numbers array? Explain the result. Give an example of its usage.

// In this example, the sum function takes three arguments (a, b, c) and returns their sum. The spread operator (...) is used to pass the elements of the numbers array as individual arguments to the sum function. This allows the function to sum the values in the array (1 + 2 + 3) and return the result.

console.log(result); // Output: 6

// The spread operator can be used to combine two or more arrays into a single array. It can also be used to create a shallow copy of an array or object. The spread operator is denoted by three dots (...) and can be used in a variety of contexts to expand the contents of an iterable.

// Here is an example of using the spread operator to combine two arrays:

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// In this example, the spread operator (...) is used to combine the elements of arr1 and arr2 into a new array called combinedArray.

// The spread operator can also be used to create a shallow copy of an array or object. For example:

const originalArray = [1, 2, 3];

const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]

// In this case, the spread operator is used to create a new array copiedArray that contains the same elements as the originalArray. This ensures that changes made to copiedArray do not affect the originalArray.

// The spread operator is a powerful feature in JavaScript that simplifies working with arrays and objects by providing a concise way to expand and copy their contents. It is commonly used in modern JavaScript development to improve code readability and maintainability.
