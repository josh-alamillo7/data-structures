

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for ( var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayAtIndex = this._storage.get(index);
  var tuple = [k, v];
  arrayAtIndex.push(tuple);
  this._storage.set(index, arrayAtIndex);
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
  
  this._storage.set(index, resultArray);
};


/*
 * Complexity: What is the time complexity of the above functions?
 HashTable: linear
 insert: constant
 retrieve: constant (linear on the bucket, but effectively constant as to the hash limit)
 remove: Same as retrieve
 
 */


