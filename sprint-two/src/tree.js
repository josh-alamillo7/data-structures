var Tree = function(value) {
  var newTree = {};
  
  newTree.value = value;
  newTree.children = []; 
  _.extend(newTree, treeMethods);
   
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChildTree = Tree(value);
  this.children.push(newChildTree);
};

treeMethods.contains = function(target) {
  //debugger;
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
