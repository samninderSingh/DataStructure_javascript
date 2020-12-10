class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log('yes');
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    // https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12324578#overview
    if (!this.head.next) {
      return this.head;
    }
    let prev = this.head;
    let currentNode = prev.next;
    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = nextNode;
    }
    this.head.next = null;
    this.head = prev;
    return this;
  }
  reverse2() {
    // https://www.youtube.com/watch?v=Tk_fi5l8cag
    let prevNode = 0;
    let nextNode;
    let currentNode = (nextNode = this.head);
    while (nextNode != null) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    // this.head = prevNode;
    console.log(this.head);
    this.head.next = null;
    this.head = prevNode;
    return this;
  }
  reverse3(node) {
    // https://www.youtube.com/watch?v=KYH83T4q6Vs&t=193s
    // Good Explaination: https://www.youtube.com/watch?v=S92RuTtt9EE

    console.log(1);
    if (node == null) return;
    if (node.next == null) {
      this.head = node;
      return node;
    }
    let node1 = this.reverse3(node.next);
    console.log(node1);
    console.log(2);
    node1.next = node;
    node.next = null;
    return node;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.reverse2();
// myLinkedList.reverse3(myLinkedList.head);
console.log(myLinkedList.head);
myLinkedList.printList();
