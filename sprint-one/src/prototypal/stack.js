var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.stackHeight = 0;
  someInstance.storage = {};
  
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  
  push: function(value) {
    
    this.stackHeight++;
    this.storage[this.stackHeight] = value;      
  },
  
  pop: function() {
    
    var removedValue = this.storage[this.stackHeight];
    if (this.stackHeight > 0) {
      delete this.storage[this.stackHeight];
      this.stackHeight--;
    }
    return removedValue;
  },
  
  size: function() {return this.stackHeight;}
};


