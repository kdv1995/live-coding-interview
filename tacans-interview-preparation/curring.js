// Explain the concept of currying in functional programming with JavaScript.

// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function.

// For example, a function add that takes 2 arguments:

function add(x, y) {
  return x + y;
}

// With currying, this function can be called as add(2)(3) instead of add(2, 3).

// Here is a simple implementation of the curry function:

function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

let curriedAdd = curry(add);

console.log(curriedAdd(2)(3)); // 5

// The curry function takes a function fn and returns a new function that takes the first argument for fn. When the first argument is passed, it returns another function that takes the second argument for fn. When all the arguments are passed, it returns the result. This is a simple implementation and it can be generalized to work with functions of any length.

// Currying is useful in partial application of functions, where some arguments are fixed and others are set when the function is called later. It is also useful in simplifying the callback functions in event handling, promises, and functional programming libraries like lodash, ramda, etc.

// Currying is also used in mathematical functions and algorithms. For example, the fast exponentiation algorithm can be implemented using currying.

//What is practical usage of currin in JS?

// Currying is useful in partial application of functions, where some arguments are fixed and others are set when the function is called later. It is also useful in simplifying the callback functions in event handling, promises, and functional programming libraries like lodash, ramda, etc.

// Currying is also used in mathematical functions and algorithms. For example, the fast exponentiation algorithm can be implemented using currying.
