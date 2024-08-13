// Use destructuring assignment to extract values from an object and log them to the console.

const order = {
  id: 123,
  customer: {
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  },
  items: [
    { id: 1, name: "Item 1", price: 9.99 },
    { id: 2, name: "Item 2", price: 14.99 },
    { id: 3, name: "Item 3", price: 19.99 },
  ],
};

const {
  id,
  customer: { name, address },
  items,
} = order;

console.log(name, address);
