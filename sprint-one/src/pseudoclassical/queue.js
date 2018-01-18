var Queue = function() {
  
  this.storage = {};
  this.addIndex = 0;
  this.removeIndex = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value) {
  
  this.storage[this.addIndex] = value;
  this.addIndex++;
  
};

Queue.prototype.dequeue = function() {
  
  var returnValue = this.storage[this.removeIndex];
  if (this.addIndex > this.removeIndex) {
    delete this.storage[this.removeIndex];
    this.removeIndex++;
  }
  
  return returnValue;
  
};

Queue.prototype.size = function() {
  
  return this.addIndex - this.removeIndex;
};



