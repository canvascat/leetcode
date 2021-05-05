/*
 * @lc app=leetcode.cn id=561 lang=typescript
 *
 * [561] 数组拆分 I
 */
export
  // @lc code=start
  function arrayPairSum(nums: number[]): number {
  return nums.sort((a, b) => a - b).reduce((sum, n, i) => i % 2 ? sum : sum + n, 0);
}
// @lc code=end

