// Explain the concept of prototypal inheritance in JavaScript. How does it differ from classical inheritance?

// Prototypal inheritance is a style of object-oriented programming in which objects inherit directly from other objects, without the need for classes. In prototypal inheritance, objects can serve as prototypes for other objects, allowing them to inherit properties and methods from their prototypes. This is in contrast to classical inheritance, which is based on the concept of classes and instances. In classical inheritance, classes define the structure and behavior of objects, and instances are created from these classes. Objects inherit from classes, rather than directly from other objects. Prototypal inheritance is more flexible and dynamic than classical inheritance, as objects can be easily modified and extended at runtime.

//Examples of prototypal inheritance in JavaScript:

//1. Creating objects with a shared prototype:
let animal = {
  type: "Animal",
  sound: function () {
    console.log("Animal sound");
  },
};

let dog = Object.create(animal);
dog.type = "Dog";
dog.breed = "Labrador";
dog.sound = function () {
  console.log("Woof");
};

let cat = Object.create(animal);

// console.log(dog.type); // "Dog"
// console.log(dog.sound()); // "Woof"
// console.log(cat.type); // "Animal"
// console.log(cat.sound()); // "Animal sound"

//2. Using constructor functions and prototypes:

// function Animal(type) {
//   this.type = type;
// }
//
// Animal.prototype.sound = function () {
//   console.log("Animal sound");
// };
//
// function Dog(breed) {
//   this.breed = breed;
// }
//
// Dog.prototype = new Animal("Dog");

// let labrador = new Dog("Labrador");

// console.log(labrador.type); // "Dog"
// console.log(labrador.sound()); // "Animal sound"

//3. Using ES6 classes and extends keyword:

class Animal {
  constructor(type) {
    this.type = type;
  }

  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  constructor(breed) {
    super("Dog");
    this.breed = breed;
  }
}

let d = new Dog("Labrador");
console.log(d);

//In all these examples, objects inherit properties and methods from their prototypes, demonstrating the concept of prototypal inheritance in JavaScript. This approach allows for flexible and dynamic object creation and modification, making it a powerful feature of the language.
