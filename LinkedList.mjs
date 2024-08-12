import Node from "./Node.mjs";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let curNode = this.head;
      while (curNode.nextNode) {
        curNode = curNode.nextNode;
      }
      curNode.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    this.size++;
  }

  getSize() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index > this.size || (index < 0 && index < -this.size)) {
      console.log("Out of range :(");
      return;
    }

    if (index < 0) index = this.size + index;

    let curNode = this.head;
    for (let i = 0; i <= index; i++) {
      if (i === index) return curNode;
      curNode = curNode.nextNode;
    }
  }

  pop() {
    const popped = this.at(-1);
    this.tail = this.at(-2);
    this.tail.nextNode = null;
    this.size--;
    return popped;
  }

  contains(value) {
    let curNode = this.head;
    let contain = false;
    while (curNode) {
      if (curNode.value === value) contain = true;
      curNode = curNode.nextNode;
    }
    return contain;
  }

  find(value) {
    let curNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (curNode.value === value) return i;
      curNode = curNode.nextNode;
    }
    return null;
  }

  toString() {
    let curNode = this.head;
    let string = "";
    while (curNode) {
      string += `( ${curNode.value} ) -> `;
      curNode = curNode.nextNode;
    }
    string += "null";
    return string;
  }

  insertAt(value, index) {
    const newNode = new Node(value);

    if (index > this.size || (index < 0 && index < -this.size)) {
      console.log("Out of range :(");
      return;
    }
    if (index < 0) index = this.size + index + 1;

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === -1) {
      this.append(value);
      return;
    }

    newNode.nextNode = this.at(index);
    this.at(index - 1).nextNode = newNode;
    this.size++;
  }

  removeAt(index) {
    if (index > this.size || (index < 0 && index < -this.size)) {
      console.log("uehfeh", index, -this.size);
      console.log("Out of range :(");
      return;
    }

    if (index === 0 || index === -this.size) {
      this.head = this.at(index + 1);
      this.size--;
      return;
    }

    if (index === -1) {
      this.pop();
      return;
    }

    if (index < 0) index = this.size + index;

    this.at(index - 1).nextNode = this.at(index + 1);
    this.size--;
  }
}
