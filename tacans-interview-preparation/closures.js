// Describe the concepts of closures and lexical scope in JavaScript. This is a common topic in interviews, as it demonstrates an understanding of how JavaScript handles scope and variable access. You can explain how closures allow functions to "remember" variables from their parent scope even after the parent function has finished executing. Additionally, you can discuss how lexical scope determines the visibility and accessibility of variables in JavaScript based on their location in the code. Provide examples to illustrate these concepts and their practical applications. You can also discuss how closures are used in event handling, callbacks, and maintaining state in functional programming. This question can lead to further discussions on advanced topics like currying, memoization, and higher-order functions.

// With this snippet from closures.js:
// // Closures and Lexical Scope:
// //
// // Closures in JavaScript allow functions to retain access to variables from their lexical scope even after the parent function has finished executing. This behavior is useful for maintaining state, creating private variables, and implementing callback functions. Closures are created whenever a function is defined within another function, allowing the inner function to access the outer function's variables. Here's an example of a closure in action:

// function outerFunction() {
//   let outerVariable = "I am from the outer function";
//
//   function innerFunction() {
//     console.log(outerVariable);
//   }
//
//   return innerFunction;
// }
//
// const innerFunc = outerFunction();
// innerFunc(); // Output: I am from the outer function

// In this example, the innerFunction retains access to the outerVariable even after the outerFunction has finished executing. This is possible due to closures and lexical scope in JavaScript. By understanding these concepts, developers can write more efficient and maintainable code, especially when dealing with asynchronous operations and functional programming paradigms.

// You can provide a clear explanation of closures and lexical scope, along with a simple example to demonstrate their usage. This can help candidates showcase their understanding of fundamental JavaScript concepts and their ability to apply them in real-world scenarios.

//What kind of scope exists in JavaScript? Explain the differences between them.

const obj = {
  name: "John",
  call: function () {},
};

//Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from any part of the code, including other functions or blocks. Global variables are not recommended as they can lead to naming conflicts and make it harder to track variable usage.

//Local Scope: Variables declared within a function or block have local scope. They are only accessible within that function or block and are not visible outside of it. Local variables are preferred for encapsulation and avoiding unintended side effects.

//Block Scope: Introduced in ES6 with the let and const keywords, block scope allows variables to be scoped to the nearest enclosing block, such as a loop or conditional statement. Block-scoped variables are not hoisted and are only accessible within the block where they are declared.

//Lexical Scope: Also known as static scope, lexical scope determines variable visibility based on the location of the variable declaration in the code. Inner functions have access to variables declared in their outer functions, creating a chain of scope that follows the lexical structure of the code. Lexical scope is a key concept in closures and functional programming.

//Does outer function has an access to variables of inner function in JavaScript? Explain with example. (closure) (lexical scope)

//Yes, outer functions can access variables declared in inner functions in JavaScript due to closures and lexical scope. When a function is defined within another function, it creates a closure that retains access to the outer function's variables even after the outer function has finished executing. This behavior allows inner functions to "remember" and use variables from their lexical scope.

//Dynamic Scope: In contrast to lexical scope, dynamic scope determines variable visibility based on the call stack at runtime. Languages like Perl and Bash use dynamic scoping, where variables are resolved based on the order of function calls. JavaScript uses lexical scope, making variable access more predictable and easier to reason about.

//Understanding the different types of scope in JavaScript is essential for writing clean and maintainable code. By using local and block scope effectively, developers can reduce the risk of bugs and unintended side effects. Lexical scope and closures provide powerful mechanisms for managing variable access and maintaining state in complex applications.

// Why it is considered that react is build on closure concept? Explain with example.
// React is built on the concept of closures and functional programming principles, which allow components to maintain their own state and manage side effects in a predictable manner. By using closures, React components can encapsulate their internal state and behavior, making them self-contained and reusable.

// Here's an example of a simple React component that uses closures to manage state:
// import React, { useState } from 'react';
//
// const Counter = () => {
//   const [count, setCount] = useState(0);
//
//   const increment = () => {
//     setCount(count + 1);
//   };
//
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// In this example, the Counter component uses the useState hook to create a local state variable count and a function setCount to update it. The increment function uses closures to access and modify the count variable, which is preserved between re-renders.

// By leveraging closures and functional programming concepts, React components can manage their own state, handle side effects, and compose complex UIs in a declarative and efficient manner. This approach promotes modularity, reusability, and maintainability, making React a popular choice for building modern web applications. Candidates can demonstrate their understanding of closures by explaining how React components use them to manage state and behavior effectively.

// Explain the concept of lexical scoping in JavaScript. How does it affect variable access and visibility?

// Lexical scoping is a key concept in JavaScript that determines variable visibility and access based on the location of the variable declaration in the code. In lexical scoping, variables are resolved based on their lexical environment, which is defined by the structure of the code at the time of declaration. This allows inner functions to access variables declared in their outer functions, creating a chain of scope that follows the lexical structure of the code.

// Here's an example to illustrate lexical scoping in JavaScript:

function outerFunction() {
  const outer = "I am from the outer function";
  console.log(result);

  function innerFunction() {
    console.log(result);
    console.log(outer);
  }

  innerFunction();
}

outerFunction(); // Output: I am from the outer function
