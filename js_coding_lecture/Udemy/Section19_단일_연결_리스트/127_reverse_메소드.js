// piece of data - val
// reference to nexdt node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    !this.head ? (this.head = newNode) : (this.tail.next = newNode);

    this.tail = newNode;
    this.length += 1;

    return this;
  }

  pop() {
    let pre = this.head;
    let after = pre;

    if (this.length <= 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return pre;
    }

    while (after.next) {
      pre = after;
      after = pre.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length -= 1;

    return after;
  }

  shift() {
    if (this.length <= 0) return undefined;

    const tmp = this.head;
    this.head = tmp.next;
    if (this.length === 1) this.tail = null;

    this.length -= 1;

    return tmp;
  }

  unshift(val) {
    const newNode = new Node(val);

    newNode.next = this.head;

    if (!this.head) {
      this.tail = newNode;
    }

    this.head = newNode;
    this.length += 1;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let answerNode = this.head;

    for (let i = 1; i <= index; i += 1) {
      answerNode = answerNode.next;
    }

    return answerNode;
  }

  set(index, value) {
    const targetNode = this.get(index);

    if (!targetNode) return false;

    targetNode.val = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length -= 1;
    return removed;
  }

  reverse() {
    if (!this.head) return undefined;
    if (this.length === 1) return this;

    let pre = this.head;
    let cur = pre.next;
    let after = cur.next;

    while (after !== null) {
      cur.next = pre;
      pre = cur;
      cur = after;
      after = cur.next;
    }

    cur.next = pre;

    this.head.next = null;
    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

const test = new SinglyLinkedList();
test.push(1);
test.push(2);
test.push(3);
test.push(4);
test.push(5);

console.log(test);
test.print();
console.dir(test.reverse());
test.print();
