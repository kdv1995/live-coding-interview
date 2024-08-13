// What are decorators in TypeScript? How can they be applied to classes and methods? Provide examples.  Explain me the concept of decorators in TypeScript with examples.

//Answer:

// Decorators in TypeScript are a special kind of declaration that can be attached to a class declaration 

// method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration. Decorators are a proposed feature for JavaScript and are available as an experimental feature in TypeScript.

// Decorators can be used to modify or extend the behavior of classes, methods, or properties at design time. They provide a way to add metadata to a class or its members, which can be used to implement features like logging, validation, or performance monitoring.

// Here is an example of a decorator that logs method calls and parameter values to the console:

// function log(target: any, key: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`Calling ${key} with arguments: ${args}`);
//         const result = originalMethod.apply(this, args);
//         console.log(`Result of ${key}: ${result}`);
//         return result;
//     };
//     return descriptor;
// }

// class Example {
//     @log
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }
  
// const example = new Example();
// example.add(1, 2);
  
// In this example, the log decorator is applied to the add method of the Example class. The log decorator modifies the behavior of the add method by logging the method name, arguments, and result to the console before and after the method is called.

// Decorators can also be applied to classes, properties, and parameters, and can be composed to create more complex behavior. Decorators are a powerful feature of TypeScript that can be used to enhance the functionality and maintainability of code.

// Note: Decorators are an experimental feature in TypeScript and may change in future versions of the language. It is recommended to use decorators with caution and keep up to date with the latest changes and best practices.






