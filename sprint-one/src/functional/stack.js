var Stack = function() {
  var someInstance = {
    stackheight: 0,
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
  
    someInstance.stackheight += 1;
    storage[someInstance.stackheight] = value;

  };

  someInstance.pop = function() {

    var currentStack = someInstance.stackheight;
    var removedValue = storage[currentStack];
    if (currentStack > 0) {
      delete storage[currentStack];
      someInstance.stackheight -= 1;
    }

    return removedValue;
  

  };

  someInstance.size = function() {
    return someInstance.stackheight;
  };

  return someInstance;
};
