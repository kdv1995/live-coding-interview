// Explain the purpose of memoization in JavaScript. How can it improve the performance of recursive functions?

//Answer:

// Memoization is a technique used to optimize recursive functions by storing the results of expensive function calls and returning the cached result when the same inputs occur again. This can significantly improve the performance of recursive functions by avoiding redundant calculations.

// In JavaScript, memoization can be implemented using an object to store the results of function calls based on their input arguments. Here's an example of how memoization can be applied to a recursive function to calculate the Fibonacci sequence:

const fibonacci = (n, memo = {}) => {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

console.log(fibonacci(10)); // Output: 55


// In this example, the `fibonacci` function uses an object `memo` to store the results of previous function calls. If the result for a specific input `n` is already cached in the `memo` object, the function returns the cached result instead of recalculating it. This approach reduces the number of recursive calls and improves the overall performance of the function.

// Memoization is particularly useful for recursive functions with overlapping subproblems, such as the Fibonacci sequence, where the same calculations are repeated multiple times. By caching the results of function calls, memoization eliminates redundant computations and speeds up the execution of recursive algorithms.

// Overall, memoization is a powerful optimization technique that can be applied to recursive functions to improve their performance and efficiency by avoiding unnecessary calculations. It is commonly used in dynamic programming and other algorithmic problems to optimize recursive solutions.


