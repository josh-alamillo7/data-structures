var Stack = function() {
  var someInstance = {
    stackHeight: 0,
    storage: {},
  };
  
  _.extend(someInstance, stackMethods);
  
  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.stackHeight++;
    var currentHeight = this.stackHeight;
    this.storage[currentHeight] = value;
  },

  pop: function () {
    var currentHeight = this.stackHeight;
    var removedValue = this.storage[currentHeight];    
    
    if (currentHeight > 0) {
      delete this.storage[currentHeight];
      this.stackHeight--;
    }

    return removedValue;    
  },

  size: function () {
    return this.stackHeight;
  },
};


