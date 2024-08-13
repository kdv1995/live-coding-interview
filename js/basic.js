// Revert the string
function revertTheString(string) {
  return string.split("").reverse().join("");
}

function reverTheStringWithFor(string) {
  let reversedString = "";
  let splittedStrign = string.split("");
  for (let i = 0; i < splittedStrign.length; i++) {
    reversedString += splittedStrign[i];
  }
  return reversedString;
}

console.log(revertTheString("hello")); // olleh
console.log(reverTheStringWithFor("oleg")); // olleh

function findTheMaximumInTheArray(arr) {
  return Math.max(...arr);
}

console.log(findTheMaximumInTheArray([1, 2, 3, 4, 5])); // 5

function findTheMaximumInTheArrayWithFor(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findTheMaximumInTheArrayWithFor([1, 2, 3, 55, 15])); // 5

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

// У бульбашковому сортуванні ми використовуємо два вкладені цикли для порівняння суміжних елементів і міняємо їх місцями, якщо вони розташовані в неправильному порядку. Давайте розберемося, навіщо нам два цикли:
//
// Зовнішній контур (i):
//
// Призначення зовнішнього циклу - контролювати кількість проходів через масив.
// Під час кожного проходу ми гарантуємо, що найбільший несортований елемент «булькає» у правильне положення.
// Після кожного проходу найбільший елемент гарантовано буде в кінці масиву, тому нам не потрібно буде знову порівнювати його в наступних проходах.
// Внутрішній контур (j):
//
// Внутрішній цикл відповідає за порівняння сусідніх елементів і за необхідності їх заміну місцями.
// Він виконує ітерацію по невідсортованій частині масиву (за винятком елементів, які вже знаходяться в правильному положенні).
// Кількість ітерацій зменшується з кожним проходом, тому що найбільші елементи «згортаються» на свої правильні позиції.
// Ось чому нам особливо потрібен внутрішній цикл у зовнішньому циклі:
//
// Зовнішній цикл контролює кількість проходів, необхідних для сортування всього масиву. Без нього ми б не знали, скільки разів повторювати масив.
// Внутрішній цикл порівнює сусідні елементи і міняє їх місцями, якщо вони розташовані в неправильному порядку. Без нього ми не змогли б виконувати попарні порівняння, необхідні для сортування.
// Таким чином, зовнішній цикл гарантує, що ми робимо достатньо проходів для повного сортування масиву, тоді як внутрішній цикл виконує попарне порівняння та заміну, щоб поступово переміщувати більші елементи до їх правильних позицій. Комбінація цих двох циклів дозволяє бульбашковому сортуванню поступово сортувати масив, доки він не буде повністю впорядкований.

function isPalindrome(string) {
  return string === string.split("").rerverse().join("");
}

function fibonacci(n) {
  if (n <= 1) return n;
  let arr = [];

  let prev = 0,
    curr = 1;
  arr.push(prev, curr);
  for (let i = 2; i <= n; i++) {
    prev = arr[i - 1];
    curr = arr[i - 2] + arr[i - 1];
    arr.push(curr);
  }

  return arr;
}

// 1. Create a function that will take a number and return the fibonacci sequence up to that number.
// 2. Check that if n <= 1 than we return the number that means that we return 0 or 1.
// 3. Create an array to store the fibonacci sequence.
// 4. Create a two variables prev and curr and set them to 0 and 1, because the first two numbers in the fibonacci sequence are 0 and 1.
// 5. Push the first two numbers to the array.
// 6. Create a for loop and start iteration from 2 because we already have the first two numbers in the array.
// 7. Set the prev to the last element in the array.
// 8. Set the curr to the sum of the last two elemens in the array.
// 9. Push the curr to the array.
// 10. Return the array.

fibonacci(5);

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// Implemenation of Stack;

// Stack:
// A stack is a data structure that follows the Last-In-First-Out (LIFO) principle. It means the last element added to the stack is the first one to be removed.
// Think of it like a stack of plates. You add plates on top of each other, and when you need to take one, you take the top one first.
// In JavaScript, you can implement a stack using an array and using the push() method to add elements to the top and the pop() method to remove elements from the top.
// With the examples of the stack of plates, it is clear that if i want to take a plate from the stack, i will take the top one first. This is the LIFO principle.
// Does it mean that when i push it is last in first out? Yes, it is. When you push an element to the stack, it is added to the top of the stack. When you pop an element from the stack, it is removed from the top of the stack. And when i pop the last element is it first out? Yes, it is. The last element added to the stack is the first one to be removed.

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    // If we don't have any elements in the stack we return "Underflow"
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

// Four methods of array helps us understand the Stack and Queue data structures: push(), pop(), shift(), unshift().

const stack = new Stack();
console.log(stack);

stack.push(1);
stack.push(2);
stack.push(3);
stack.peek(); // 3

// Implementation of Queue

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) return "No elements in Queue";
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }

  length() {
    return this.items.length;
  }
}

// Does it mean that in stack the operations are performed from top to bottom and in queue the operations are performed from front to back? Yes, it is. In stack, the operations are performed from top to bottom, and in queue, the operations are performed from front to back.

// Implementations of Linked List
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index > 0 && index > this.size) return false;
    else {
      let node = new Node(element);
      let curr, prev;
      curr = this.head;
      if (index === 0) {
        node.next = head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;

        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  removeFrom(index) {
    if (index > 0 && index > this.size) return -1;
    else {
      let curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;

          curr = curr.next;
        }

        prev.next = curr.next;
      }
      this.size--;

      return curr.element;
    }
  }

  removeElement(element) {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  indexOf(element) {
    let count = 0;
    let current = this.head;

    while (current != null) {
      if (current.element === element) return count;
      count++;
      current = current.next;
    }

    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  sizeOfList() {
    return this.size;
  }

  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    return str;
  }
}

// implementation of of Map

class Map {
  constructor() {
    this.map = {};
  }

  set(key, value) {
    this.map[key] = value;
  }

  get(key) {
    this.map[key];
  }
  has(key) {
    return this.map.hasOwnProperty(key);
  }
}

// what the difference between Map and Set in JavaScript?
// Map:
// A Map is a collection of key-value pairs where each key is unique.
// It allows you to store and retrieve values using a key.
// You can iterate over the keys and values in the map.
// Set:
// A Set is a collection of unique values.
// It allows you to store and retrieve values.
// You can iterate over the values in the set.
// In summary, a Map is a collection of key-value pairs, while a Set is a collection of unique values.

// Implementations of Set
class Set {
  constructor() {
    this.set = {};
  }

  add(value) {
    this.set[value] = value;
  }

  delete(value) {
    delete this.set[value];
  }

  has(value) {
    return this.set.hasOwnProperty(value);
  }

  values() {
    return Object.keys(this.set);
  }

  size() {
    return Object.keys(this.set).length;
  }
}

// What the difference between setters and getters in JavaScript?
// Setters:
// Setters are used to set the value of a property.
// They are defined using the set keyword followed by the property name.
// They are used to set the value of a property.
// Getters:
// Getters are used to get the value of a property.
// They are defined using the get keyword followed by the property name.
// They are used to get the value of a property.

// Implementations of Graph

// Graph:
// A graph is a data structure that consists of a set of nodes (vertices) and a set of edges that connect the nodes.
// It is used to represent relationships between objects.
// There are two main types of graphs: directed graphs and undirected graphs.
// In a directed graph, the edges have a direction, while in an undirected graph, the edges do not have a direction.
// Graphs can be represented using an adjacency matrix or an adjacency list.
// In an adjacency matrix, a two-dimensional array is used to represent the edges between nodes.
// In an adjacency list, each node has a list of its adjacent nodes.
// Graphs can be used to represent many real-world problems, such as social networks, computer networks, and transportation networks.

// Is node an object in the graph? Yes, it is. In a graph, a node is an object that represents a vertex or a point in the graph. It can have properties and methods associated with it. The edges in the graph connect the nodes and represent the relationships between them.

// Is nodes is a simply list here to store the nodes? Yes, it is. In a graph, the nodes are stored in a list or an array. The list of nodes is used to keep track of all the nodes in the graph. Each node is represented by an object that contains information about the node, such as its value or label.
// Can we add edge only to existing nodes? Yes, we can. In a graph, an edge is a connection between two nodes. We can add an edge between two existing nodes in the graph. The edges are stored in a data structure, such as an adjacency list or an adjacency matrix, that keeps track of the connections between the nodes.

// So all the time each node has two addge which connects to other nodes? No, it doesn't. In a graph, a node can have any number of edges that connect it to other nodes. The edges represent the relationships between the nodes in the graph. Each edge is stored in a data structure, such as an adjacency list or an adjacency matrix, that keeps track of the connections between the nodes.

// It's not like a binary tree where each node has only two children. In a graph, a node can have any number of edges that connect it to other nodes. The edges represent the relationships between the nodes in the graph. Each edge is stored in a data structure, such as an adjacency list or an adjacency matrix, that keeps track of the connections between the nodes.

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
  }

  addEdge(node1, node2) {
    this.edges[node1].push(node2);
    this.edges[node2].push(node1);
  }

  printGraph() {
    let graph = "";
    this.nodes.forEach((node) => {
      graph += node + "->" + this.edges[node].join(", ") + "\n";
    });
    return graph;
  }
}

const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log(graph.printGraph());

// Is it correct that if we add to node A a B , then node B will also have a connection to node A? Yes, it is. In a graph, an edge is a connection between two nodes. When we add an edge between two nodes, we are creating a relationship between them. If we add an edge from node A to node B, then node B will also have a connection to node A. This is because the edge represents a two-way relationship between the nodes.
// So, when adding to node A and edge of B, do we have both way connection? Yes, we do. In a graph, an edge is a connection between two nodes. When we add an edge between two nodes, we are creating a relationship between them. If we add an edge from node A to node B, then node B will also have a connection to node A. This is because the edge represents a two-way relationship between the nodes.

console.log(graph);

// Why it's deep copy?
// A deep copy creates a new object and recursively copies the properties of the original object into the new object. This means that if the original object contains nested objects, the deep copy will also create copies of the nested objects, rather than just copying references to them. This ensures that changes made to the new object do not affect the original object, and vice versa.

// Why we use JSON.stringify() and JSON.parse()?
// We use JSON.stringify() to convert the object to a JSON string, and JSON.parse() to convert the JSON string back to an object. This allows us to create a deep copy of the object by creating a new object with the same properties and values as the original object.

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = deepCopy(obj1);
console.log(obj2); // Output: { a: 1, b: { c: 2 } }

// How for of works with objects?
// The for...of loop is used to iterate over the values of an iterable object, such as an array or a string. It does not work with objects, as objects are not iterable by default. However, you can use the Object.entries() method to convert an object into an iterable array of key-value pairs, and then use the for...of loop to iterate over the entries.

// How operator in works with objects?
// The in operator is used to check if a property exists in an object. It returns true if the property exists, and false otherwise. You can use the in operator with an object to check if a property exists in the object.

function isValidParentheses(str) {
  const stack = [];
  const map = { "(": ")", "[": "]", "{": "}" };
  for (let char of str) {
    if (char in map) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (char !== map[top]) return false;
    }
  }
  return stack.length === 0;
}

function arrayOfSquareNumbers() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i * i);
  }
  return arr;
}

const findMaxConsecutiveOnes = function (nums) {
  // Is it function declaration or function expression? It's a function expression.
  // What is the context of the function? The context of the function is the global context.
  // What is the name of the function? The name of the function is findMaxConsecutiveOnes.
  // What is the parameter of the function? The parameter of the function is nums.
  // What is the return value of the function? The return value of the function is the maximum number of consecutive ones in the array.
  // What is the output of the function? The output of the function is the maximum number of consecutive ones in the array.
  // What is the input of the function? The input of the function is an array of numbers.
  // What is the purpose of the function? The purpose of the function is to find the maximum number of consecutive ones in the array.
  // What is the implementation of the function? The implementation of the function is to iterate over the array and count the number of consecutive ones, and return the maximum count.
  // What is the complexity of the function? The complexity of the function is O(n), where n is the number of elements in the array.

  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
    } else {
      maxCount = Math.max(maxCount, currentCount);
      currentCount = 0;
    }
  }
  maxCount = Math.max(maxCount, currentCount);

  return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3

console.log(isValidParentheses("(){}[]")); // Output: true
console.log(isValidParentheses("([)]")); // Output: false
