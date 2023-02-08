"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    // base case
    if (!this.left || !this.right) return 1;

    return 1 + Math.min(
      this.left.minDepthToIncompleteNode(),
      this.right.minDepthToIncompleteNode()
    );
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth(depth = 1) {
    // base case
    if (!this.left && !this.right) return depth;

    const leftDepth = this.left ? this.left.maxDepth(depth + 1) : 0;
    const rightDepth = this.right ? this.right.maxDepth(depth + 1) : 0;

    return Math.max(leftDepth, rightDepth);
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {
    // base case
    if (!this.left && !this.right) return 1;
    if (!this.left) return 1 + this.right.minDepth();
    if (!this.right) return 1 + this.left.minDepth();

    // const leftDepth = this.left ? this.left.minDepth() : Infinity;
    // const rightDepth = this.right ? this.right.minDepth() : Infinity;

    return 1 + Math.min(this.left.minDepth(), this.right.minDepth());
  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * which is larger than lowerBound. Return null if no such value exists. */
  // Recursively:
  // nextLarger(lowerBound) {
  //   // base case
  //   if (!this.left && !this.right) {
  //     return (this.val > lowerBound) ? this.val : null;
  //   }

  //   let candidates = [];

  //   if (this.val > lowerBound) candidates.push(this.val);

  //   if (this.right) {
  //     const rightNextLarger = this.right.nextLarger(lowerBound);
  //     if (rightNextLarger !== null) candidates.push(rightNextLarger);
  //   }

  //   if (this.left) {
  //     const leftNextLarger = this.left.nextLarger(lowerBound);
  //     if (leftNextLarger !== null) candidates.push(leftNextLarger);
  //   }

  //   if (candidates.length === 0) return null;

  //   return Math.min(...candidates);
  // }

  // Iteratively (DFS):
  // nextLarger(lowerBound) {
  //   let toVisitStack = [this];
  //   let nextLarger = Infinity;

  //   while (toVisitStack.length) {
  //     const current = toVisitStack.pop();

  //     if (current.val > lowerBound) {
  //       nextLarger = Math.min(current.val, nextLarger);
  //     }

  //     if (current.left) toVisitStack.push(current.left);
  //     if (current.right) toVisitStack.push(current.right);
  //   }

  //   return (nextLarger !== Infinity) ? nextLarger : null;
  // }

  // Iteratively (BFS):
  nextLarger(lowerBound) {
    let toVisitQueue = [this];
    let nextLarger = Infinity;

    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();

      if (current.val > lowerBound) {
        nextLarger = Math.min(current.val, nextLarger);
      }

      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }

    return (nextLarger !== Infinity) ? nextLarger : null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (!this.root) return 0;

    return this.root.minDepthToIncompleteNode();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (!this.root) return 0;

    return this.root.maxDepth();
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    if (!this.root) return 0;

    return this.root.minDepth();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    return this.root.nextLarger(lowerBound);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
