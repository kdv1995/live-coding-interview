// Describe how interfaces are used in TypeScript. Provide an example.
// interface Car {
//   make: string;
//   model: string;
//   productionYear: number;
// }

// class Toyota implements Car {
//   make: string;
//   model: string;
//   productionYear: number;
//   constructor(make: string, model: string, productionYear: number) {
//     this.make = make;
//     this.model = model;
//     this.productionYear = productionYear;
//   }
//
//   addCar() {
//     console.log(`New car added: ${this.make} ${this.model} (${this.productionYear})`);
//   }
// }

// Answer:
// In TypeScript, interfaces are used to define the structure of objects, specifying the properties and methods they should have. This helps in enforcing a consistent shape for objects and enables type checking during development.

// Here is an example of using interfaces in TypeScript:

// interface User {
//
//   name: string;
//   email: string;
//   age: number;
// }
//
// function printUser(user: User) {
//   console.log(`Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`);
// }
//
// const newUser: User = {
//   name: 'Alice',
//   email: '',
// }
//

// In this example, we define an interface called User with properties name, email, and age. We then create a function printUser that takes a parameter of type User and logs the user's details. Finally, we create a new object newUser that conforms to the User interface and pass it to the printUser function.

// By using interfaces, we can ensure that objects passed to functions or assigned to variables adhere to a specific structure, reducing the chances of runtime errors and improving code maintainability.
