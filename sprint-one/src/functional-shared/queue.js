var Queue = function() {
  var someInstance = {
    storage: {},
    addIndex: 0,
    removeIndex: 0,
  };
  
  _.extend(someInstance, queueMethods);
  
  return someInstance;
  
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.addIndex] = value;
    this.addIndex++;
  },
  
  dequeue: function () {
    var removeValue = this.storage[this.removeIndex];
    
    if(this.addIndex > this.removeIndex) {
      delete this.storage[this.removeIndex];
      this.removeIndex++;
    }
    
    return removeValue;
  },
  
  size: function () {
    return this.addIndex - this.removeIndex;
  }
};


