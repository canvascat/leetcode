/*
 * @lc app=leetcode.cn id=872 lang=typescript
 *
 * [872] 叶子相似的树
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
export
  // @lc code=start
  function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  function f(node: TreeNode | null, arr: number[]) {
    if (!node) return;
    if (node.left === null && node.right === null) {
      arr.push(node.val);
    } else {
      f(node.left, arr);
      f(node.right, arr);
    }
  }
  const a1: number[] = [], a2: number[] = [];
  f(root1, a1);
  f(root2, a2);
  return a1.join() === a2.join();
}
// @lc code=end

