describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog"', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });
  
  it('should have node properties of "value", "left", "right" and "depth"', function () {
    expect(binarySearchTree).to.have.property('value');
    expect(binarySearchTree).to.have.property('left');
    expect(binarySearchTree).to.have.property('right');
    expect(binarySearchTree).to.have.property('depth');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });
  
  it('should only add unique values', function () {
    binarySearchTree.insert(2);
    binarySearchTree.insert(5);
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2]);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });
  
  it('should have a depth property representing the depth of a branch', function() {
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(3);
    expect(binarySearchTree.left.left.depth).to.equal(3);
  });
  
  it('should find all nodes by breadth and return their values', function () {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(9);
    binarySearchTree.insert(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 3, 9, 2, 4, 7, 8]);
  });
  
  it('should be able to apply a callback to branches at a specific depth', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(9);
    binarySearchTree.insert(4);
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.breadthFirstLog(func, 2);
    expect(array).to.eql([3, 9]);
  });
});
