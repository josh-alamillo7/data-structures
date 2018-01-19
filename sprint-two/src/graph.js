

// Instantiate a new graph
var Graph = function() {
  
  this.nodes = [];
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(nodeValue) {
  var newNode = {
    value: nodeValue, 
    edges: [],
  };
  this.nodes.push(newNode);
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(nodeValue) {
  return _.some(this.nodes, function(nodeObject) {
    return nodeObject.value === nodeValue;
  });
  
};

Graph.prototype.findNodeIndex = function(nodeValue, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].value === nodeValue) {
      return i;
    }
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(nodeValue) {
  var removedNodeIndex = this.findNodeIndex(nodeValue, this.nodes);
  var removedNode = this.nodes[removedNodeIndex];
  
  for (i = 0; i < removedNode.edges.length; i++) {
    var edgeObjectValue = removedNode.edges[i].value;
    this.removeEdge(nodeValue, edgeObjectValue);
  }
  
  this.nodes.splice(removedNodeIndex, 1);
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNodeValue, toNodeValue) {
  var fromNodeIndex = this.findNodeIndex(fromNodeValue, this.nodes);
  var fromNode = this.nodes[fromNodeIndex];
  
  if (typeof this.findNodeIndex(toNodeValue, fromNode.edges) === 'number') {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNodeValue, toNodeValue) {
  var fromNodeIndex = this.findNodeIndex(fromNodeValue, this.nodes);
  var fromNode = this.nodes[fromNodeIndex];
  
  var toNodeIndex = this.findNodeIndex(toNodeValue, this.nodes);
  var toNode = this.nodes[toNodeIndex];
  
  fromNode.edges.push(toNode);
  toNode.edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue) {
  var fromNodeIndex = this.findNodeIndex(fromNodeValue, this.nodes);
  var fromNode = this.nodes[fromNodeIndex];
  
  var toNodeIndex = this.findNodeIndex(toNodeValue, this.nodes);
  var toNode = this.nodes[toNodeIndex];
  
  var toNodeEdgeIndex = this.findNodeIndex(toNodeValue, fromNode.edges);
  var fromNodeEdgeIndex = this.findNodeIndex(fromNodeValue, toNode.edges);
  
  fromNode.edges.splice(toNodeEdgeIndex, 1); 
  toNode.edges.splice(fromNodeEdgeIndex, 1);
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
    
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 Graph: constant
 addNode: constant
 contains: linear
 findNodeIndex: linear
 removeNode: quadratic
 hasEdge: linear
 addEdge:linear
 removeEdge: linear
 forEachNode: linear (depending on what function is passed in,
              but the base is linear: O(n * run time of cb))
 
 
 */


