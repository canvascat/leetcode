/*
 * @lc app=leetcode.cn id=81 lang=typescript
 *
 * [81] 搜索旋转排序数组 II
 */
export
  // @lc code=start
  function search(nums: number[], target: number): boolean {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    // 去除重复数字
    while (left < right && nums[left] === nums[left + 1]) left++;
    while (left < right && nums[right] === nums[right - 1]) right--;
    const mid = left + (right - left) >> 1, mn = nums[mid];
    if (mn === target) return true;
    if (mn >= nums[left]) { // 左边有序
      if (target < mn && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else { // 右边有序
      // TODO FIX
      if (target > mn && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1
      }
    }
  }
  return false;
  // return nums.includes(target);
}
// @lc code=end

