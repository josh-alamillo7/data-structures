describe('doubleLinkedList', function() {
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList = DoubleLinkedList();
  });

  it('should have a head, tail, and length', function() {
    expect(doubleLinkedList).to.have.property('head');
    expect(doubleLinkedList).to.have.property('tail');
    expect(doubleLinkedList).to.have.property('length');
  });

  it('should have methods "addToHead", "addToTail", "removeHead", "removeTail", and "contains"', function () {
    expect(doubleLinkedList.addToHead).to.be.a('function');
    expect(doubleLinkedList.addToTail).to.be.a('function');
    expect(doubleLinkedList.removeHead).to.be.a('function');
    expect(doubleLinkedList.removeTail).to.be.a('function');
    expect(doubleLinkedList.contains).to.be.a('function');
  });
  
  it('should have nodes containing a next and prev value', function() {
    doubleLinkedList.addToTail(6);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.head).to.have.property('next');
    expect(doubleLinkedList.tail).to.have.property('prev');
  });
  
  it('should contain a node that has been added to the tail', function () {
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.contains(4)).to.equal(true);
  });
  
  it('should contain a node that has been added to the head', function() {
    doubleLinkedList.addToHead(3);
    expect(doubleLinkedList.contains(3)).to.equal(true);
  });
  
  it('should designate a new tail when a node has been added to the tail', function () {
    doubleLinkedList.addToHead(3);
    doubleLinkedList.addToTail(7);
    doubleLinkedList.addToTail(8);
    expect(doubleLinkedList.tail.value).to.equal(8);
  });
  
  it('should designate a new head when a node has been added to the head', function () {
    doubleLinkedList.addToHead(5);
    doubleLinkedList.addToHead(6);
    expect(doubleLinkedList.head.value).to.equal(6);
  });
  
  it('should not contain a node that has been removed from the head', function () {
    doubleLinkedList.addToHead(4);
    doubleLinkedList.addToTail(5);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.contains(4)).to.equal(false);
  });
  
  it('should not contain a node that has been removed from the tail', function () {
    doubleLinkedList.addToTail(5);
    doubleLinkedList.removeTail();
    expect(doubleLinkedList.contains(5)).to.equal(false);
  });
  
  it('should designate a new tail when a node has been removed from the tail', function () {
    doubleLinkedList.addToHead(3);
    doubleLinkedList.addToTail(5);
    doubleLinkedList.addToTail(4);
    doubleLinkedList.removeTail();
    expect(doubleLinkedList.tail.value).to.equal(5);
  });
  
  it('should designate a new head when a node has been removed from the head', function () {
    doubleLinkedList.addToHead(3);
    doubleLinkedList.addToTail(5);
    doubleLinkedList.addToTail(4);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.head.value).to.equal(5);
  });
  
  it('should return the value of the removed node', function () {
    doubleLinkedList.addToHead(1);
    doubleLinkedList.addToTail(2);
    doubleLinkedList.addToTail(3);
    expect(doubleLinkedList.removeHead()).to.equal(1);
    expect(doubleLinkedList.removeTail()).to.equal(3);
  });
  
  it('should have an increased length property when a node is added', function () {
    doubleLinkedList.addToTail(3);
    expect(doubleLinkedList.length).to.equal(1);
  });
  
  it('should have a decreased length property when a node is removed', function () {
    doubleLinkedList.addToHead(9);
    doubleLinkedList.addToHead(8);
    doubleLinkedList.removeTail();
    expect(doubleLinkedList.length).to.equal(1);
  });
  
  it('should insert nodes at the correct place in the list', function () {
    doubleLinkedList.addToHead(4);
    doubleLinkedList.addToTail(6);
    doubleLinkedList.insert(4, 5);
    expect(doubleLinkedList.head.next.value).to.equal(5);
    expect(doubleLinkedList.tail.prev.value).to.equal(5);
  });
  
  it('should be able to traverse the list from head to tail after a node has been inserted', function () {
    doubleLinkedList.addToHead(2);
    doubleLinkedList.addToTail(4);
    doubleLinkedList.insert(2, 3);
    expect(doubleLinkedList.traverseFromHead(4).value).to.equal(4);
  });
  
  it('should be able to traverse the list from tail to head after a node has been inserted', function () {
    doubleLinkedList.addToHead(2);
    doubleLinkedList.addToTail(4);
    doubleLinkedList.insert(2, 3);
    expect(doubleLinkedList.traverseFromTail(2).value).to.equal(2);
  });
  
});
