var DoubleLinkedList = function () {
  var doubleList = {};
  doubleList.head = null;
  doubleList.tail = null;
  doubleList.length = 0;
  
  doubleList.addToTail = function (value) {
    var newNode = DoubleNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  };
  
  doubleList.addToHead = function (value) {
    var newNode = DoubleNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }
  };
  
  doubleList.removeTail = function () {
    if (this.length > 1) {
      removedNodeValue = this.tail.value;
      this.tail = this.tail.prev;
      delete this.tail.next;
      this.tail.next = null;
      this.length--;
      return removedNodeValue;
    } else if (this.length === 1) {
      removedNodeValue = this.tail.value;
      delete this.tail;
      this.tail = null;
      this.head = null;
      this.length--;
      return removedNodeValue;
    }
  };
  
  doubleList.removeHead = function () {
    if (this.length > 1) {
      removedNodeValue = this.head.value;
      this.head = this.head.next;
      delete this.head.prev;
      this.head.prev = null;
      this.length--;
      return removedNodeValue;
    } else if (this.length === 1) {
      removedNodeValue = this.head.value;
      delete this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNodeValue;
    }
  };
  
  doubleList.traverseFromHead = function (target) {
    if (this.length === 0) {
      return undefined;
    }
    
    var findNode = function (startingNode) {
      if (startingNode.value === target) {
        return startingNode;
      } else if (startingNode.next === null) {
        return undefined;
      } else {
        return findNode(startingNode.next);
      }
    };
    
    return findNode(this.head);
  };
  
  doubleList.traverseFromTail = function (target) {
    if (this.length === 0) {
      return undefined;
    }
    
    var findNode = function (startingNode) {
      if (startingNode.value === target) {
        return startingNode;
      } else if (startingNode.prev === null) {
        return undefined;
      } else {
        return findNode(startingNode.prev);
      }
    };
    
    return findNode(this.tail);
  };
  
  doubleList.contains = function (value) {
    return !!this.traverseFromHead(value);
  };
  
  doubleList.insert = function (target, value) {
    var newNode = DoubleNode(value);
    var targetNode = this.traverseFromHead(target);
    
    newNode.prev = targetNode;
    newNode.next = targetNode.next;
    
    targetNode.next.prev = newNode;
    targetNode.next = newNode;
  };
  
  return doubleList;
};

var DoubleNode = function (value) {
  var _node = {};
  _node.value = value;
  _node.next = null;
  _node.prev = null;
  return _node;
};

/*
 * What are the time complexities of the above functions?
 *
 * DoubleLinkedList: constant
 * addToTail: constant
 * addToHead: constant
 * removeTail: constant
 * removeHead: constant
 * traverseFromHead: linear
 * traverseFromTail: linear
 * contains: linear
 * insert: linear
 * DoubleNode: constant
*/