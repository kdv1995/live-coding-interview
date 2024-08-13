// Describe the purpose of the Map and Set data structures introduced in ES6.


//Answer:

// The Map and Set data structures were introduced in ES6 to provide more efficient ways of storing and managing data in JavaScript.

// Map:
// The Map object is a collection of key-value pairs where each key can be of any type. It allows for quick lookups of values based on their associated keys. Maps are useful for scenarios where you need to store data in a structured way and access it efficiently. Some key features of the Map data structure include:

// The ability to store keys of any type, including objects and functions.
// Iteration over the elements in the order of their insertion.
// Efficient lookups and updates of values based on keys. 

// Set:
// The Set object is a collection of unique values, where each value can occur only once. Sets are useful for scenarios where you need to store a list of distinct elements and perform operations like checking for membership or removing duplicates. Some key features of the Set data structure include:

// Automatic removal of duplicate values when adding elements to the set.
// Efficient membership checks and removal of elements.
// Iteration over the elements in the order of their insertion.

// Both the Map and Set data structures provide efficient ways of storing and managing data in JavaScript, making them valuable additions to the language's standard library. They offer improved performance and functionality compared to traditional data structures like arrays and objects, especially in scenarios where you need to work with unique or structured data sets.

// Example usage of Map and Set:
  
// Map:
const user1 = { name: 'Alice' };
const user2 = { name: 'Bob' };

const userRoles = new Map();

userRoles.set(user1, 'admin');
userRoles.set(user2, 'user');

console.log(userRoles.get(user1)); // Output: admin

// Set:
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 1, 2, 3]);

console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4, 5 }

// In the above examples, we use a Map to store user roles based on user objects and a Set to store unique numbers. Both data structures provide efficient ways of storing and accessing data, making them useful in a variety of scenarios.

// Overall, the Map and Set data structures introduced in ES6 offer valuable features for managing data in JavaScript, providing improved performance and functionality compared to traditional data structures. They are widely used in modern JavaScript applications to handle a variety of data storage and manipulation tasks.



