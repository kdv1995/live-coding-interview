// Describe the role of type guards in TypeScript. How do they help in handling different types at runtime?


//Answer:

// The role of type guards in TypeScript is to narrow down the type of a variable within a conditional block based on a certain condition. This helps in handling different types at runtime by providing more specific type information to the TypeScript compiler, which can lead to better type checking and code completion.

/* Type guards are typically implemented using the `typeof`, `instanceof`, or custom type predicates to check the type of a variable and narrow it down within a conditional block. For example: */

// function isNumber(value: any): value is number {
//   return typeof value === 'number';
// }
//
// function isString(value: any): value is string {
//   return typeof value === 'string';
// }
//
// function processValue(value: number | string) {
//   if (isNumber(value)) {
//     console.log(`Received a number: ${value.toFixed(2)}`);
//   } else if (isString(value)) {
//     console.log(`Received a string: ${value.toUpperCase()}`);
//   }
// }
//
// const numValue: number = 42;
// const strValue: string = 'hello';
//   
// processValue(numValue); // Output: Received a number: 42.00
// processValue(strValue); // Output: Received a string: HELLO

/* In this example, the `isNumber` and `isString` functions act as type guards that narrow down the type of the `value` parameter within the `processValue` function based on the condition specified in the guard functions. This allows for more precise type checking and handling of different types at runtime. */

// Type guards are especially useful when working with union types or dynamic data where the type of a variable may change based on runtime conditions. They help improve type safety and code readability by providing more specific type information to the TypeScript compiler.
  

