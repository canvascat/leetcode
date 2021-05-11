import { TreeNode } from 'src/data-structures/TreeNode';

/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
 */
export
// @lc code=start
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  let able = false;
  (function f(node: TreeNode | null, sum: number) {
    if (able || !node) return;
    sum += node.val;
    if (!node.left && !node.right && sum === targetSum) {
      able = true;
    } else {
      f(node.left, sum);
      f(node.right, sum);
    }
  })(root, 0);
  return able;
}
// @lc code=end

