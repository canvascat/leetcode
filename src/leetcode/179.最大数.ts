/*
 * @lc app=leetcode.cn id=179 lang=typescript
 *
 * [179] 最大数
 *
 * https://leetcode-cn.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (38.21%)
 * Likes:    653
 * Dislikes: 0
 * Total Accepted:    87.5K
 * Total Submissions: 218.4K
 * Testcase Example:  '[10,2]'
 *
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
 * 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 * 
 * 示例 1：
 * 输入：nums = [10,2]
 * 输出："210"
 * 
 * 示例 2：
 * 输入：nums = [3,30,34,5,9]
 * 输出："9534330"
 * 
 * 示例 3：
 * 输入：nums = [1]
 * 输出："1"
 * 
 * 示例 4：
 * 输入：nums = [10]
 * 输出："10"
 * 提示：
 * 1 
 * 0 
 */
export
  // @lc code=start
  function largestNumber(nums: number[]): string {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (+`${nums[i]}${nums[j]}` < +`${nums[j]}${nums[i]}`) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
  }
  return nums[0] === 0 ? '0' : nums.join('');
}
// @lc code=end

