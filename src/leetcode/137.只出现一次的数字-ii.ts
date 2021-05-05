/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 *
 * https://leetcode-cn.com/problems/single-number-ii/description/
 *
 * algorithms
 * Medium (68.69%)
 * Likes:    548
 * Dislikes: 0
 * Total Accepted:    55.6K
 * Total Submissions: 81K
 * Testcase Example:  '[2,2,3,2]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,3,2]
 * 输出: 3
 * 
 * 
 * 示例 2:
 * 
 * 输入: [0,1,0,1,0,1,99]
 * 输出: 99
 * 
 */
export
  // @lc code=start
  function singleNumber(nums: number[]): number {
  return +Object.keys(nums.reduce((o, n) => {
    if (o[n] === 2) delete o[n];
    else if (o[n] === 1) o[n] = 2;
    else o[n] = 1;
    return o;
  }, Object.create(null)))[0];
}
// @lc code=end

