// This problem was asked by Google.
// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
// For example, given the following Node class
// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right
// The following test should pass:
// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var one = new TreeNode(1);
var two = new TreeNode(2);
var three = new TreeNode(3);
var four = new TreeNode(4);
var five = new TreeNode(5);

three.left = four;
three.right = five;
one.left = two;
one.right = three;

var serialize = function(root) {
  var result = [];
  serializer(root, result);
  return result.join(',');
};

var serializer = function(node, output) {
  if (!node) {
    output.push('#');
    return;
  }
  output.push(node.val);
  serializer(node.left, output);
  serializer(node.right, output);
};

var deserialize = function(data) {
  data = data.split(',');
  var index = 0;
  function deserializer(data) {
    if (index > data.length || data[index] === '#') {
      return null;
    }
    var node = new TreeNode(parseInt(data[index]));
    index++;
    node.left = deserializer(data, index);
    index++;
    node.right = deserializer(data, index);
    return node;
  }
  return deserializer(data);
};

console.log(deserialize(serialize(one)));
