

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.initializeStorage();
};

HashTable.prototype.initializeStorage = function () {
  for ( var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayAtIndex = this._storage.get(index);
  var tuple = [k, v];
  arrayAtIndex.push(tuple);
  this._storage.set(index, arrayAtIndex);
  this._size++;
  
  if ((this._size / this._limit) > 0.75) {
    this.changeLimit('double');
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayAtIndex = this._storage.get(index);
  var returnValue;

  arrayAtIndex.forEach(function(tuple) {
    if (tuple[0] === k) {
      returnValue = tuple[1];
    }
  });

  return returnValue;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayAtIndex = this._storage.get(index);
  var resultArray = arrayAtIndex.filter( function (tuple) {
    return tuple[0] !== k;
  });
  this._size--;
  this._storage.set(index, resultArray);
  
  if ((this._size / this._limit) < 0.25) {
    this.changeLimit('half');
  }
};

HashTable.prototype.addAllTuples = function (array) {
  if (typeof array[0] === 'string') {
    this.insert(array[0], array[1]);
  } else if (typeof array[0] === 'object') {
    for (var i = 0; i < array.length; i++) {
      this.addAllTuples(array[i]); 
    }
  }
};

HashTable.prototype.changeLimit = function (change) {
  var copyOfStorage = [];
  this._storage.each(function (storageBucket) {
    copyOfStorage.push(storageBucket);
  });
  
  if (change === 'double') {
    this._limit *= 2;
  }
  if (change === 'half') {
    this._limit = Math.floor(this._limit / 2);
  }
  
  this._storage = LimitedArray(this._limit);
  this.initializeStorage();
  
  this.addAllTuples(copyOfStorage);

};

/*
 * Complexity: What is the time complexity of the above functions?
 HashTable: linear
 insert: constant
 retrieve: constant (linear on the bucket, but effectively constant as to the hash limit)
 remove: Same as retrieve
 
 */


