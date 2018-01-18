var Stack = function() {
  this.height = 0;
  this.storage = {};
};

Stack.prototype.push = function (value) {
  this.height++;
  this.storage[this.height] = value;
};

Stack.prototype.pop = function () {
  var removedValue = this.storage[this.height];
  
  if (this.height > 0) {
    delete this.storage[this.height];
    this.height--;
  }
  
  return removedValue;
};

Stack.prototype.size = function () {
  return this.height;
};


