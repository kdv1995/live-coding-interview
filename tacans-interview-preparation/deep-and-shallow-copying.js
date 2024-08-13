//Explain the difference between shallow and deep copying in JavaScript objects and arrays.

// with this snippet from deep-and-shallow-copying.js:

// // Deep Copying:
const originalArray = [1, 2, [3, 4]];
const deepCopiedArray = JSON.parse(JSON.stringify(originalArray));
originalArray[2][0] = 5;
console.log(deepCopiedArray); // Output: [1, 2, [3, 4]]

// // Shallow Copying:
const originalObject = { a: 1, b: { c: 2 } };
const shallowCopiedObject = { ...originalObject };
originalObject.b.c = 3;
console.log(shallowCopiedObject); // Output: { a: 1, b: { c: 3 }}

//Why is the deepCopiedArray unaffected by the change to the originalArray, while the shallowCopiedObject is affected by the change to the originalObject? Explain the underlying concepts of deep and shallow copying in JavaScript. Provide examples to illustrate the differences between the two approaches.

// Answer:
// In JavaScript, objects and arrays are reference types, which means that when you create a copy of an object or array, you are actually copying a reference to the original object or array, not the actual values themselves. This distinction is important when discussing deep and shallow copying.

// Shallow Copying:

// Shallow copying creates a new object or array and copies the references of the original object's properties or elements. This means that changes made to the properties or elements of the original object will also affect the copied object, as they both point to the same memory locations.

// In the example provided, when we shallow copy the originalObject using the spread operator ({ ...originalObject }), we create a new object with the same properties as the originalObject. However, the nested object b is still a reference to the same memory location as the originalObject's nested object. Therefore, when we modify the property c of the nested object in the originalObject, the change is reflected in the shallowCopiedObject as well.

// Deep Copying:

// Deep copying creates a new object or array and recursively copies all nested objects and arrays, ensuring that the copied object is completely independent of the original object. This means that changes made to the original object will not affect the copied object, as they are stored in separate memory locations.

// In the example provided, when we deep copy the originalArray using JSON.parse(JSON.stringify(originalArray)), we create a new array with the same values as the originalArray. Since the nested array is also copied recursively, changes made to the nested array in the originalArray do not affect the deepCopiedArray, as they are stored in separate memory locations.

// In summary, shallow copying creates a new object or array with references to the original object's properties or elements, while deep copying creates a new object or array with completely independent copies of all nested objects and arrays. Deep copying is useful when you need to create a true copy of an object or array without any shared references, while shallow copying is more efficient and suitable for cases where shared references are acceptable.

// Additional Example:

// Shallow Copying:
const originalArray = [1, 2, [3, 4]];
const shallowCopiedArray = originalArray.slice();
originalArray[2][0] = 5;
console.log(shallowCopiedArray); // Output: [1, 2, [5, 4]]

// In this example, we use the slice() method to shallow copy the originalArray. The change made to the nested array in the originalArray also affects the shallowCopiedArray, as they share the same reference to the nested array.

// Deep Copying:

const originalArray = [1, 2, [3, 4]];
// const deepCopiedArray = JSON.parse(JSON.stringify(originalArray));

originalArray[2][0] = 5;
console.log(deepCopiedArray); // Output: [1, 2, [3, 4]]
