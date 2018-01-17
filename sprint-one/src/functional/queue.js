var Queue = function() {
  var someInstance = {
    queuelength: 0
  };



  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.queuelength += 1;
    storage[someInstance.queuelength] = value;
  };

  someInstance.dequeue = function() {
    var currentQueue = someInstance.queuelength;
    var removedValue = storage[1];

    if (currentQueue > 0) {
      for (i = 0; i < currentQueue; i++) {
        storage[i] = storage[i + 1];  
      }
      delete storage[currentQueue];
      someInstance.queuelength -= 1;
    }
    return removedValue;
  };

  someInstance.size = function() {
    return someInstance.queuelength;
  };

  return someInstance;
};
