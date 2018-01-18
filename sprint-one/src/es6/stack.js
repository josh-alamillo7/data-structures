class Stack {
  
  constructor() {
    this.storage = {};
    this.height = 0;
  }
  
  push(value) {
    this.height++;
    this.storage[this.height] = value;
  }
  
  pop() {
    var removeValue = this.storage[this.height];
    
    if (this.height > 0) {
      delete this.storage[this.height];
      this.height--;
    }
    
    return removeValue;
  }
  
  size() {
    return this.height;
  }

}