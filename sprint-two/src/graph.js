 

// Instantiate a new graph
var Graph = function() {
  
  this.nodes = {};
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(nodeValue) {
  var newNode = {
    value: nodeValue, 
    edges: [],
  };
  this.nodes[nodeValue] = newNode;
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(nodeValue) {
  return this.nodes[nodeValue] !== undefined;
  
};

/*
Graph.prototype.findNodeIndex = function(nodeValue, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].value === nodeValue) {
      return i;
    }
  }
};
*/

// Removes a node from the graph.
Graph.prototype.removeNode = function(nodeValue) {
  var removedNode = this.nodes[nodeValue];
  
  var allEdges = this.nodes[nodeValue].edges;
  
  for (i = 0; i < allEdges.length; i++) {
    this.removeEdge(nodeValue, allEdges[i]);
  }
  
  delete this.nodes[nodeValue];
  
  return removedNode;
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNodeValue, toNodeValue) {
  var allEdges = this.nodes[fromNodeValue].edges;
  return allEdges.includes(toNodeValue);

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNodeValue, toNodeValue) {
  this.nodes[fromNodeValue].edges.push(toNodeValue);
  this.nodes[toNodeValue].edges.push(fromNodeValue);
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue) {
  var fromNodeEdges = this.nodes[fromNodeValue].edges;
  var toNodeEdges = this.nodes[toNodeValue].edges;
  
  this.nodes[fromNodeValue].edges = fromNodeEdges.filter( function (edge) {
    return edge !== toNodeValue;
  });
  
  this.nodes[toNodeValue].edges = toNodeEdges.filter( function (edge) {
    return edge !== fromNodeValue;
  });
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 Graph: constant
 addNode: constant
 contains: constant               
 removeNode: quadratic
 hasEdge: linear
 addEdge: constant
 removeEdge: linear
 forEachNode: linear 
 
 */


