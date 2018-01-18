describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });
  
  it('should return a node with that value if it exists', function() {
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.traverse(3).value).to.equal(3);
  });
  
  it('should return undefined if no node exists with the given value', function() {
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.traverse(4)).to.equal(undefined);
  });
    

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it('should create a new node when a value is inserted', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(6);
    linkedList.insert(4, 5);
    expect(linkedList.contains(5)).to.equal(true);
  });
  
  it('should insert a node after the node with the target value', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(2);
    linkedList.insert(4, 5);
    expect(linkedList.head.next.value).to.equal(5);
    
  });
  
  it('should insert a node that points to the next node', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(2);
    linkedList.insert(4, 5);
    expect(linkedList.traverse(5).next.value).to.equal(2);
    
  });
  
});
