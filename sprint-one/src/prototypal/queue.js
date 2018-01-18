var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.addIndex = 0;
  someInstance.removeIndex = 0;
  
  return someInstance;
};

var queueMethods = {
  
  enqueue: function (value) {
    this.storage[this.addIndex] = value;
    this.addIndex++;
  },
  
  dequeue: function () {
    var removedValue = this.storage[this.removeIndex];
    
    if (this.addIndex > this.removeIndex) {
      delete this.storage[this.removeIndex];
      this.removeIndex++;
    }
    
    return removedValue;
  },
  
  size: function () {
    return this.addIndex - this.removeIndex;
    
  },
  
};


