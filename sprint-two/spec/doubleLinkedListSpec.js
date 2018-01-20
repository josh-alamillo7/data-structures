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
  
  it('should have nodes containing a next and prev value', function() {
    doubleLinkedList.addToTail(6);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.head).to.have.property('next');
    expect(doubleLinkedList.tail).to.have.property('prev');
  });
  
  it('should contain a node that has been added', function () {
    
  });
  
  it('should designate a new tail when a node has been added to the tail', function () {
    
  });
  
  it('should designate a new head when a node has been added to the head', function () {
    
  });
  
  it('should not contain a node that has been removed', function () {
    
  });
  
  it('should designate a new tail when a node has been removed from the tail', function () {
    
  });
  
  it('should designate a new head when a node has been removed from the head', function () {
    
  });
  
  it('should have an increased length property when a node is added', function () {
    
  });
  
  it('should have a decreased length property when a node is removed', function () {
    
  });
  
  it('should insert nodes at the correct place in the list', function () {
    
  });
  
  it('should be able to traverse the list from head to tail after a node has been inserted', function () {
    
  });
  
  it('should be able to traverse the list from tail to head after a node has been inserted', function () {
    
  });
  
});
