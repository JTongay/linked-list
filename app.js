'use strict'

function Node(val, next=null){
  this.val = val;
  this.next = next;
}

function SinglyLinkedList(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype._getNodeAt = function(index){
  var currentNode = this.head;
  var count = 0;
  var length = this.length

  if(length === 0 || index < 0 || index > length){
    return undefined;
  }

  while(count < index) {
    currentNode = currentNode.next;
    console.log(currentNode.val);
    count++
  }

  return currentNode;
}

SinglyLinkedList.prototype.push = function(val) {
  var node = new Node(val);
  if(!this.tail){
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;

  return this;
};

SinglyLinkedList.prototype.clear = function() {

};

SinglyLinkedList.prototype.pop = function() {
  if(!this.head) {
    return undefined;
  }

  if(this.length === 1){
    var returnVal = this.tail.val;
    this.length = 0;
    this.head = this.tail = null;
    return returnVal;
  }

  var returnVal = this.tail.val;
  this.length--;
  console.log(returnVal);

  return returnVal;

};

SinglyLinkedList.prototype.unshift = function(val) {

};

SinglyLinkedList.prototype.shift = function() {
};

SinglyLinkedList.prototype.get = function(index) {
  if(index >= this.length){
    return undefined;
  } else {
    return this._getNodeAt(index).val
  }
};

SinglyLinkedList.prototype.set = function(index, val) {
};

SinglyLinkedList.prototype.remove = function(index) {
};

SinglyLinkedList.prototype.reverse = function () {
};

module.exports = SinglyLinkedList;
