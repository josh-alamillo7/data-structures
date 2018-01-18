var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;
  

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
      list.length++;
      
    } else {
      
      list.tail.next = newNode;
      list.tail = newNode;
      list.length++;
    }
   
  };

  list.removeHead = function() {
    if (list.length > 0) {
      var removedNodeValue = list.head.value;
      list.head = list.head.next;
      list.length--;
      
      return removedNodeValue;
    }
  };
  
  list.traverse = function (target) {
    var findNode = function (startingNode) {
      if (startingNode.value === target) {
        return startingNode;
        
      } else if (startingNode.next === null) {
        return undefined;
        
      } else {
        return findNode(startingNode.next);
      }
    };
    return findNode(list.head);
  };

  list.contains = function(target) {
    return !!list.traverse(target);
  };
  
  list.insert = function(targetNodeValue, value) {
    var targetNode = list.traverse(targetNodeValue);
    
    if (targetNode === undefined) {
      return 'Error: Target Value does not exist';
    }
    
    if (targetNode.next === null) {
      list.addToTail(value);
      
    } else {
      var newNode = Node(value);
      newNode.next = targetNode.next;
      targetNode.next = newNode;
      
      list.length++;
    }
  };
    

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 addToTail: constant
 removeHead: constant
 traverse: linear
 contains: linear
 insert: linear
 */
