var BinarySearchTree = function(value) {
  var newTree = {
    value: value,
    depth: 1,
    left: null,
    right: null,
  };
  _.extend(newTree, BinarySearchTreeMethods);
  return newTree;
};

BinarySearchTreeMethods = {};


BinarySearchTreeMethods.insert = function (value) {
  var depthCounter = this.depth;
  if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value); 
      this.left.depth += depthCounter;
    } else {
      this.left.insert(value);
    }
    
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
      this.right.depth += depthCounter;
    } else {
      this.right.insert(value);
    } 
  }
};

BinarySearchTreeMethods.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (this.value > value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if (this.value < value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
  
};

BinarySearchTreeMethods.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
  
};

BinarySearchTreeMethods.breadthFirstLog = function (cb, targetDepth) {
  var queue = new Queue();
  var currentTree = this;
  
  queue.enqueue(currentTree);
  
  while (queue.size() > 0) {
    
    var currentNode = queue.dequeue();
    if (currentNode.left !== null) {
      queue.enqueue(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.enqueue(currentNode.right);
    }
    if (targetDepth && currentNode.depth === targetDepth) {
      cb(currentNode.value);   
    } else if (!targetDepth) {
      cb(currentNode.value);
    }
  }
  
};


var Queue = function () {
  this.storage = {};
  this.addIndex = 0;
  this.removeIndex = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.addIndex] = value;
  this.addIndex++;
};

Queue.prototype.dequeue = function () {
  if (this.addIndex > this.removeIndex) {
    removedValue = this.storage[this.removeIndex];
    delete this.storage[this.removeIndex];
    this.removeIndex++;
    return removedValue; 
  }
};

Queue.prototype.size = function () {
  return this.addIndex - this.removeIndex;
};




/*
 * Complexity: What is the time complexity of the above functions?
  BinarySearchTree:linear (b/c of extend)
  insert: logartithmic
  contains: logarithmic
  depthFirstLog: linear
 */
