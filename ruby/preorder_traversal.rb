# Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

node = TreeNode.new(10)
node.right = TreeNode.new(5)
node.right.right = TreeNode.new(2)

def preorder_traversal(root)
  return [] unless root
  
  nodes = []
  
  nodes << root.val
  nodes += preorder_traversal(root.left)
  nodes += preorder_traversal(root.right)
  
  nodes
end

p preorder_traversal(node)