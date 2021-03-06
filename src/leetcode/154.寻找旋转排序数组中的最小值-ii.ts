/*
 * @lc app=leetcode.cn id=154 lang=typescript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 *
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Hard (50.66%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    57.7K
 * Total Submissions: 113.7K
 * Testcase Example:  '[1,3,5]'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,1,2,4,5,6,7]  可能变为 [4,5,6,7,0,1,2] )。
 * 
 * 请找出其中最小的元素。
 * 
 * 注意数组中可能存在重复的元素。
 * 
 * 示例 1：
 * 
 * 输入: [1,3,5]
 * 输出: 1
 * 
 * 示例 2：
 * 
 * 输入: [2,2,2,0,1]
 * 输出: 0
 * 
 * 说明：
 * 
 * 
 * 这道题是 寻找旋转排序数组中的最小值 的延伸题目。
 * 允许重复会影响算法的时间复杂度吗？会如何影响，为什么？
 * 
 * 
 */
export
  // @lc code=start
  function findMin(nums: number[]): number {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    while (left < right && nums[left] === nums[left + 1]) left++;
    while (left < right && nums[right] === nums[right - 1]) right--;
    if (left === right || nums[left] < nums[right]) {
      return nums[left];
    }
    const mid = (left + right) >> 1;
    if (nums[mid] >= nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}
// @lc code=end

