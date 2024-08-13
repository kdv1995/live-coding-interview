// What are the differences between ambient declarations and regular declarations in TypeScript?

//Answer: Ambient declarations in TypeScript are used to describe the shape of existing JavaScript code that is not natively written in TypeScript. They are typically used to define types for libraries or modules that are written in JavaScript and do not have type definitions included. Ambient declarations are declared using the declare keyword and are used to provide type information for external code.

// Regular declarations in TypeScript are used to define types, interfaces, classes, functions, and variables within a TypeScript file. They are used to define the structure and behavior of the code written in TypeScript. Regular declarations are declared using the appropriate keywords such as interface, class, function, or variable.

// In summary, ambient declarations are used to describe external JavaScript code, while regular declarations are used to define the structure and behavior of TypeScript code. Ambient declarations are typically used in conjunction with regular declarations to provide type information for external code that is used within a TypeScript project.

//Example:

// Ambient declaration for an external library
// declare module 'external-library' {
//   export function someFunction(): void;
// }

// Regular declaration for a TypeScript class

// class MyClass {
//   private property: string;
//
//   constructor(property: string) {
//     this.property = property;
//   }
//
//   public method(): void {
//     console.log(this.property);
//   }
// }

// In this example, the ambient declaration describes the shape of an external library called 'external-library' that has a function called someFunction. The regular declaration defines a TypeScript class called MyClass with a private property and a method that logs the property to the console. Ambient declarations are used to provide type information for external code, while regular declarations define the structure and behavior of TypeScript code.
