const events = require("node:events");

// const eventEmitter = new events.EventEmitter();
//
// eventEmitter.on("sayHello", () => {
//   console.log("Hello there!");
// });
//
// eventEmitter.on("welcome", () => {
//   console.log("Welcome to the event emitter!");
// });
// eventEmitter.prependListener("absolute", () => {
//   console.log("Absolute listener");
// });
//
// eventEmitter.emit("sayHello");
// eventEmitter.emit("welcome");
// eventEmitter.emit("absolute");

// console.log(eventEmitter.eventNames());

class MyCustomEmitter extends events.EventEmitter {
  constructor() {
    super();
  }
}

const myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on("sayHello", (...args) => {
  const binaryArray = new Uint8Array([0, 1, 2, 3]);
  console.log(args);
  console.log(binaryArray);
  return binaryArray;
});

myCustomEmitter.emit("sayHello", { name: "John Doe", age: 25 });
