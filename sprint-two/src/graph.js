

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

// Removes a node from the graph.
Graph.prototype.removeNode = function(nodeValue) {
  var removedNode;
  var removedNodeIndex;
  for (i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === nodeValue) {
      removedNode = this.nodes[i];
      removedNodeIndex = i;
    }
  }
  
  this.nodes.splice(removedNodeIndex, 1);
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNodeValue, toNodeValue) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNodeValue, toNodeValue) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


