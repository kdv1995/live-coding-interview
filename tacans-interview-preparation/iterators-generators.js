// Discuss the role of iterators and generators in JavaScript. Provide examples of their usage.

//Answer:

// Iterators and generators are powerful features introduced in ES6 that allow developers to work with sequences of data more efficiently. Iterators are objects that define a sequence and potentially a return value upon reaching the end of the sequence. They provide a way to access the elements of a collection one at a time, without exposing the underlying representation of the collection.

// Generators, on the other hand, are functions that can be paused and resumed, allowing for more complex control flow and lazy evaluation of values. They are defined using the function* syntax and yield keyword, which allows them to yield multiple values over time.

// Here is an example of an iterator in JavaScript:

function createIterator(array) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const iterator = createIterator([1, 2, 3]);

// And here is an example of a generator in JavaScript:

function* generateSequence() {
  yield "welcome";
  yield 2;
  yield 3;
  yield 4;
}

const generator = generateSequence();
console.log(generator.return({ key: "welcome", arr: [2, 3, 4, 5] }));
