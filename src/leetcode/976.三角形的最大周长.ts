export
/*
 * @lc app=leetcode.cn id=976 lang=typescript
 *
 * [976] 三角形的最大周长
 *
 * https://leetcode-cn.com/problems/largest-perimeter-triangle/description/
 *
 * algorithms
 * Easy (54.53%)
 * Likes:    139
 * Dislikes: 0
 * Total Accepted:    49.7K
 * Total Submissions: 83.2K
 * Testcase Example:  '[2,1,2]'
 *
 * 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
 *
 * 如果不能形成任何面积不为零的三角形，返回 0。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 * 输入：[2,1,2]
 * 输出：5
 *
 *
 * 示例 2：
 *
 * 输入：[1,2,1]
 * 输出：0
 *
 *
 * 示例 3：
 *
 * 输入：[3,2,3,4]
 * 输出：10
 *
 *
 * 示例 4：
 *
 * 输入：[3,6,2,3]
 * 输出：8
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= A.length <= 10000
 * 1 <= A[i] <= 10^6
 *
 *
 */

// @lc code=start
function largestPerimeter(nums: number[]): number {
  nums = nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      return nums[i] + nums[i + 1] + nums[i + 2]
    }
  }
  return 0;
}
// @lc code=end

