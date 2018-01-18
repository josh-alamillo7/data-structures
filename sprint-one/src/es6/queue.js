class Queue {
  
  constructor() {
    
    this.storage = {};
    this.addIndex = 0;
    this.removeIndex = 0;
    
  }
  
  enqueue(value) {
    
    this.storage[this.addIndex] = value;
    this.addIndex++;
    
  }
  
  dequeue() {
    
    var removedValue = this.storage[this.removeIndex];
    if (this.addIndex > this.removeIndex) {
      delete this.storage[this.removeIndex];
      this.removeIndex++;
    }
    
    return removedValue;
    
  }
  
  size() {
    
    return this.addIndex - this.removeIndex;
    
  }

}
