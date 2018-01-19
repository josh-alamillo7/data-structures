var BinarySearchTree = function(value) {
  var newTree = {
    value: value,
    left: null,
    right: null,
  };
  _.extend(newTree, BinarySearchTreeMethods);
  return newTree;
};

BinarySearchTreeMethods = {};

BinarySearchTreeMethods.traverse = function (value) {
  
};

BinarySearchTreeMethods.insert = function (value) {
  if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value); 
    } else {
      this.left.insert(value);
    }
    
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
