// Describe the concept of memoization in JavaScript. How can it improve the performance of functions?

//Answer:

// Memoization is a technique used to optimize the performance of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again. This can help avoid redundant computations and improve the overall efficiency of the function.

function memoization(func) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
}

// function fibonacci(n) {
//   //n = 4
//   if (n <= 1) {
//     return n;
//   } else {
//     //0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610
//
//     // 0 and 1;
//     // 1 + 0;
//     // 0 1 1
//     // 1 + 1;
//     // 0 1 1 2
//     // 2 + 1;
//     // 0 1 1 2 3
//
//     //Default values
//     //That is the first two numbers in the sequence
//     let prev = 0;
//     let current = 1;
//
//     //The next number in the sequence is the sum of the previous two numbers
//
//
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let prev = 0;
  let current = 1;
  //2
  for (let i = 2; i <= n; i++) {
    let next = prev + current; // 1
    prev = current; // 1;
    current = next; // 1

    // next  = 2;
    // prev = 1;
    // current = 2;

    // next = 3;
    //prev = 2;
    //current = 3;

    // next = 5;
    // prev = 3;
    // current = 5;

    // next = 8;
    // prev = 5;
    // current = 8;
  }
}

function fibonacciWithRecursive(n) {
  if (n <= 1) {
    return n;
  }

  // n = 5;

  // 5 - 1 = 4
  // 5 - 2 = 3
  // 4 - 1 = 3
  // 4 - 2 = 2
  // 3 - 1 = 2
  // 3 - 2 = 1
  // 2 - 1 = 1
  // 2 - 2 = 0

  // 4+3+3+2+2+1+1+ 0;

  // 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610

  return fibonacciWithRecursive(n - 1) + fibonacciWithRecursive(n - 2);
}

const memoizedFibonacci = memoization(fibonacciWithRecursive);
memoizedFibonacci(5); // 5
// In this example, the `memoize` function takes a function `func` as an argument and returns a new function that caches the results of `func` based on its input arguments. The `fibonacci` function is a recursive function that calculates the Fibonacci sequence. By using `memoize` to cache the results of `fibonacci`, we can avoid redundant calculations and improve the performance of the function.

// alert(str); // ?
// let str = "Hello";

// for(let i=0; i<10; i++) {
//   console.log(i);
// }

// let f = function (x) {
//   alert(x);
// };
//
// (function () {
//   f(1);
// })();

// let obj = {
//   0: 1,
//   0: 2,
// };
//
// alert(obj["0"] + obj[0]);

let f0 = function (a, b) {
  return a + b;
};
console.log(f0(1, 2));

let f1 = new Function("a,b", "return a+b");
console.log(f1(1, 2));

let f2 = new Function("a", "b", "return a+b");
console.log(f2(1, 2));
//
let f3 = (a, b) => a + b;
console.log(f3(1, 2));
let f4 = (a, b) => {
  return a + b;
};
//
console.log(f4(1, 2));

let f = function (x) {
  alert(x);
};

(function () {
  f(1);
})();

function User() {}
User.prototype = { admin: false };

console.log(User.prototype);

let user = new User();
console.log(user)

User.prototype = { admin: true };
console.log(User.prototype)

alert(user.admin);


let usr = {
  sayHi: function() {
    alert(this);
  }
};

(usr.sayBye = usr.sayHi)();
