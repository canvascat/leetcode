/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 求众数
 */
export
// @lc code=start
function majorityElement(nums: number[]): number {
  // 排序后根据边界判断
  nums = nums.sort((a, b) => a - b);
  const half = nums.length >> 1;
  let index = 0, current = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] === current) continue;
    if (i - index > half) return current;
    else index = i, current = nums[i];
  }
  return -1;
}
// @lc code=end

