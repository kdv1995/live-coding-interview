// What is the role of the prototype chain in JavaScript's inheritance model?

// The prototype chain is used to implement inheritance in JavaScript. It is a series of objects connected to each other through their prototypes. Each object has a prototype object from which it inherits properties. All objects created from object literals have Object.prototype as their prototype. Object.prototype is the root of the prototype chain. When you try to access a property of an object, JavaScript will first look at the object itself to see if it has that property. If it doesn't, it will look at the object's prototype, and so on up the chain until it finds the property or reaches the end of the chain. This is how JavaScript implements inheritance, as objects can inherit properties from their prototype objects.

// What is the difference between prototypal inheritance and classical inheritance?

// Prototypal inheritance is a style of object-oriented programming in which objects inherit directly from other objects, without the need for classes. In prototypal inheritance, objects can serve as prototypes for other objects, allowing them to inherit properties and methods from their prototypes. This is in contrast to classical inheritance, which is based on the concept of classes and instances. In classical inheritance, classes define the structure and behavior of objects, and instances are created from these classes. Objects inherit from classes, rather than directly from other objects. Prototypal inheritance is more flexible and dynamic than classical inheritance, as objects can be easily modified and extended at runtime.

let obj = {
  key: "value",
  age: 25,
};

obj.__proto__.mark = "value";
console.log(obj);
console.log(obj.mark);

//Does Object.assign create a deep copy? Why or why not?  // No, Object.assign does not create a deep copy. It only creates a shallow copy. This means that it only copies the properties of the object itself, but not the properties of its prototype. If you want to create a deep copy, you can use Object.create() or a library like lodash.
