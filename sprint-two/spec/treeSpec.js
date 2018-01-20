describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(10);
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
  
  it('should correctly identify the parent node', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(3);
    var treeParent = tree.children[0].children[0].parent;
    expect(treeParent.value).to.equal(5);
  });
  
  it('should remove a child\'s parent tree', function () {
    tree.addChild(5);
    tree.addChild(6);
    var child = tree.children[0];
    child.removeFromParent();
    expect(child.parent).to.equal(null);
    expect(tree.contains(5)).to.equal(false);
    expect(tree.contains(6)).to.equal(true);
  });
  
  it('should apply a callback to all nodes in tree', function () {
    tree.addChild(1);
    tree.addChild(2);
    tree.children[1].addChild(3);
    tree.children[1].addChild(4);
    
    var doubleValue = function (node) {
      node.value = node.value * 2;
    };
    
    tree.traverse(doubleValue);
    
    expect(tree.value).to.equal(20);
    expect(tree.children[1].value).to.equal(4);
    expect(tree.children[1].children[0].value).to.equal(6);
  });
  
});
