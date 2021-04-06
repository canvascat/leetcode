/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
export function removeDuplicates(nums: number[]): number {
  let j = 1, sum = 1, last = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === last) {
      if (sum++ < 2) {
        nums[j++] = last;
      }
    } else {
      last = nums[i];
      sum = 1;
      nums[j++] = last;
    }
  }
  nums.length = j;
  return j;
}
// @lc code=end

