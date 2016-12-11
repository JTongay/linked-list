'use strict'

function Node(val, next, prev) {
  this.val = val;

  if(!!next) {
    this.next = next;
  } else {
    this.next = null;
  }
  if(!!prev) {
    this.prev = prev;
  } else {
    this.prev = null;
  }
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.__getNodeAt = function(index) {
  var currentNode = this.head;
  var length = this.length;
  var count = 0;

  if(length === 0 || index < 0 || index > length){
    return undefined;
  }

  while(count < index){
    currentNode = currentNode.next;
    count++
  }

  return currentNode;

};

DoublyLinkedList.prototype.push = function(val) {
  var node = new Node(val);

  if(this.length){
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  } else {
    this.head = node;
    this.tail = node;
  }
  this.length++;

  return this;

};

DoublyLinkedList.prototype.clear = function() {

};

DoublyLinkedList.prototype.pop = function() {
  var val;

  if(!this.head){
    return undefined;
  }

  if(this.length <= 1){
    val = this.head.val;
    this.head = null;
    this.tail = null;
    this.length = 0;
    return val;
  }

  var previousNode = this.tail.prev;
  val = this.tail.val;
  previousNode.next = null;
  this.tail.prev = undefined;
  this.tail = previousNode;
  this.length--;
  return val;

};

DoublyLinkedList.prototype.unshift = function(val) {
  if(!this.head) {
    return this.push(val)
  }

  var newNode = new Node(val);

  this.head.prev = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.length++;

  return this;

};

DoublyLinkedList.prototype.shift = function() {

  // If there is only one node, just pop it out.
  if(this.length <= 1){
    return this.pop()
  }

  //Grab the value of the current Head
  var value = this.head.val;
  //Grab the next node
  var nextNode = this.head.next;
  //Set the original head to null
  nextNode.prev = null;
  //set the original heads next property to null
  this.head.next = null;
  // Set the new head as the next Node variable
  this.head = nextNode;
  // Decrease the length by one;
  this.length--;
  // Return the value;
  return value;

};

DoublyLinkedList.prototype.get = function(index) {
  if(index >= this.length){
    return undefined
  } else {
    var node = this.__getNodeAt(index)
    return node.val
  }
};

DoublyLinkedList.prototype.set = function(index, val) {
  if(index >= this.length){
    return undefined
  }

  var node = this.__getNodeAt(index);
  node.val = val
};

DoublyLinkedList.prototype.insert = function(index, val) {
  if(index < 0 || index > this.length){
    return undefined
  }
  // If you just want to put it in the first position, just use unshift()
  if(index === 0){
    return this.unshift(val)
  } else if(index === this.length){
    //just use push if you want it at the end
    return this.push(val)
  } else {
  //get the node at the current index
  var node = this.__getNodeAt(index);
  //get the node at the previous index
  var previousNode = node.prev;
  //create a new node
  var newNode = new Node(val, previousNode, node);
  // set the previous nodes next Node to the newest node.
  previousNode.next = newNode;
  //set the current previous node to the new Node.
  node.prev = newNode;
  console.log(this.head);
  console.log(this.head.next);
  console.log(this.tail);
  //increase the length
  this.length++;
  return this;
  }
};

DoublyLinkedList.prototype.remove = function(index) {
  //Remove from front of list
  if(index === 0){
    return this.shift();
  }
  //Remove from back of list
  if(index === this.length - 1){
    return this.pop();
  }
  //Remove from anywhere else
  var node = this.__getNodeAt(index);
  if(node){
    //Get the next and previous nodes.
    var previousOne = node.prev;
    var nextOne = node.next;
    //Set the previous node's next to the nextOne
    previousOne.next = nextOne;
    //Set the next node's prev to the previous node
    nextOne.prev = previousOne;
    //Decrement length by one
    this.length--;
    //Set the current nodes prev and next to null;
    node.prev = null;
    node.next = null;
    return node.val;

  }

};

module.exports = DoublyLinkedList;
