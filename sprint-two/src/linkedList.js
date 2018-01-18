var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.nextKey = 1;
  list.length = 0;
  

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list[1] = newNode;
      list.head = list[1];
      list.tail = list[1];
      list.nextKey++;
      list.length++;
      
    } else {
      list[list.nextKey] = newNode;
      var insertedNode = list[list.nextKey];
      list.tail.next = insertedNode;
      list.tail = insertedNode;
      list.nextKey++;
      list.length++;
    }
   
  };

  list.removeHead = function() {
    if (list.length > 0) {
      var removedNodeValue = list.head.value;
      var removedNode = list.head;
      list.head = list.head.next;
      delete removedNode;
      list.length--;
      
      return removedNodeValue;
    }
  };

  list.contains = function(target) {
    //debugger;
    var compareValue = function (startingNode) {
      if (startingNode.value === target) {
        return true;
        
      } else if (startingNode.next === null) {
        return false;
        
      } else {
        return compareValue(startingNode.next);
      }
      
    }; 
    
    return compareValue(list.head);
  };
  
  list.insert = function(targetKey, value) {
    if (list.targetKey === undefined) {
      return "Error: Key does not exist.";
    }
    
    var newNode = Node(value);
    list[nextKey] = newNode;
    var insertedNode = list[nextKey];
    
    insertedNode.next = list[targetKey].next;
    list[targetKey].next = insertedNode;
    
    list.length++;
    list.nextKey++;
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
 */
