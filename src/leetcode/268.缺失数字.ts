export
/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 缺失数字
 * 进阶：
 * 你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?
 *
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  // return nums.reduce((a, b, i) => a - b + i, nums.length);
  return nums.reduce((a, b, i) => a ^ b ^ i, nums.length);
  // const hash = new Set(nums);
  // // return Array.from(Array(nums.length + 1), (v, k) => k).find(k => !hash.has(k));
  // for (let i = 0; i <= nums.length; i++) {
  //   if (!hash.has(i)) return i;
  // }
  // return -1;
}
// @lc code=end

