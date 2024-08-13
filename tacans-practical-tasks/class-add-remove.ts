// Implement a class in TypeScript with methods for adding and removing items from an array.

interface Stack {
  add(item: any): void;
  remove(): any;
}
interface Item {
  id: number;
  name: string;
}

class Stack {
  private items: Item[] = [];

  add(item: Item) {
    this.items.push(item);
  }
  remove() {
    return this.items.pop();
  }
}
