var Tree = function(value) {
  var newTree = {};
  
  newTree.value = value;
  newTree.parent = null;
  newTree.children = []; 
  _.extend(newTree, treeMethods);
   
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChildTree = Tree(value);
  newChildTree.parent = this;
  
  this.children.push(newChildTree);
};

treeMethods.contains = function(target) {
  var searchAllTrees = function (tree) {
    if (tree.value === target) {
      return true;
    }
    
    if (tree.children.length === 0) {
      return false;
      
    } else {
      return tree.children.reduce( function (acc, child) {
        return acc || searchAllTrees(child);
      }, false);
    }
    
  };
  
  return searchAllTrees(this);
};

treeMethods.removeFromParent = function () {
  var target = this.value;
  var parentsChildren = this.parent.children;
  this.parent.children = parentsChildren.filter( function (child) {
    return child.value !== target;
  });
  
  this.parent = null;
};

treeMethods.traverse = function (cb) {
  
  var traverseTree = function (tree) {
    cb(tree);
    if (tree.children.length > 0) {
      for (i = 0; i < tree.children.length; i++) {
        traverseTree(tree.children[i]);
      }
    }
  };
  
  traverseTree(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 Tree: linear (b/c of extend)
 addChild: constant
 contains: linear
 
 */
