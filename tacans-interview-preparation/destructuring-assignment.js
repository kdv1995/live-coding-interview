// Explain the concept of destructuring assignment in ES6. How is it useful?

// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient. Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.

// For example, we have an array with the name and surname. And we need to assign them to the variables. That’s how we do it with the destructuring assignment:

let arr = ["Ilya", "Kantor"];

// destructuring assignment
let [firstName, surname] = arr;

console.log(firstName); // Ilya
console.log(surname); // Kantor

// The value of arr is unpacked into the variables. The first element goes into firstName, the second one into surname, and the rest into title that we don’t use in this example.

// We can use any “assignables” at the left side.

// For instance, we can swap variables easily:

let guest = "Jane";
let admin = "Pete";

// Swap values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`); // Pete Jane

// We also can use destructuring with any iterable on the right-side.

// For instance, here we use it with a Set:

let user = {
  name: "John",
  years: 30,
};

// loop over keys-and-values

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); // name:John, then years:30
}

//Object destructuring

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

let { title, width, height } = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200

// If we want to assign a property to a variable with another name, for instance, options.width to go into the variable w, then we can set it using a colon:

let options1 = {
  title: "Menu",
  width: 100,
  height: 200,
};

// { sourceProperty: targetVariable }
let { width: w, height: h, title: t } = options1;
console.log(w); // 100
console.log(t); // Menu
