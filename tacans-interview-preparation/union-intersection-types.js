// Explain how TypeScript supports the concept of union types and intersection types.


//Answer:

// Union types and intersection types are two key features introduced in TypeScript to enhance the flexibility and expressiveness of the type system.

// Union Types:

// Union types allow a variable to have multiple types, enabling developers to define a variable that can hold values of different types. The syntax for defining a union type is to separate the types with a vertical bar (|). For example:

// let value: string | number;
// value = "Hello"; // valid

// value = 42; // valid
  
// In the above example, the variable value can hold values of type string or number.

// Intersection Types:

// Intersection types allow developers to combine multiple types into a single type. This enables the creation of new types by merging existing types. The syntax for defining an intersection type is to separate the types with an ampersand (&). For example:

// type Person = {
  // name: string;
  // age: number;
// };

// type Employee = {
  // id: number;
  // department: string;
// };

// type EmployeePerson = Person & Employee;


