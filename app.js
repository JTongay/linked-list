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
  var count = 0;
  var length = this.length;
  var oldTail = this.tail
  var nextToLast = this._getNodeAt(length - 2)

  if(!this.head) {
    return undefined;
  }

  if(this.length === 1){
    var returnVal = this.tail.val;
    this.length = 0;
    this.head = this.tail = null;
    return returnVal;
  }

  nextToLast.next = null;
  this.tail = nextToLast;
  this.length--
  return oldTail.val
};

SinglyLinkedList.prototype.unshift = function(val) {
  this.head = new Node(val)
  if(this.length === 0){
    this.tail = this.head;
    this.next = this.head;
  } else {
    this.head.next = this.tail;
  }

  this.length++
};

SinglyLinkedList.prototype.shift = function() {
  // var head = this.head;
  if(this.length === 0){
    return
  }
  if(this.length > 0){
    return this.remove(0)
  }

};

SinglyLinkedList.prototype.get = function(index) {
  if(index >= this.length){
    return undefined;
  } else {
    return this._getNodeAt(index).val
  }
};

SinglyLinkedList.prototype.set = function(index, value) {
  if(index >= this.length){
    return undefined
  } else {
    this._getNodeAt(index).val = value;
    return this._getNodeAt(index).val

  }
};

SinglyLinkedList.prototype.remove = function(index) {

  var currentNode = this.head,
        length = this.length,
        count = 0,
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1st use-case: an invalid position
    if (index < 0 || index > length) {
        return undefined;
    }

    // 2nd use-case: the first node is removed
    if (index === 0) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this.length--;
        return deletedNode.val;
    }

    // 3rd use-case: any other node is removed
    while (count < index) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        currentNode = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this.length--;

    return deletedNode.val;
};

SinglyLinkedList.prototype.reverse = function () {
};

module.exports = SinglyLinkedList;
