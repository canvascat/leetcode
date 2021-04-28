/*
 * @lc app=leetcode.cn id=633 lang=typescript
 *
 * [633] 平方数之和
 *
 * https://leetcode-cn.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Medium (35.23%)
 * Likes:    263
 * Dislikes: 0
 * Total Accepted:    77K
 * Total Submissions: 195K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：c = 5
 * 输出：true
 * 解释：1 * 1 + 2 * 2 = 5
 * 
 * 
 * 示例 2：
 * 
 * 输入：c = 3
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 输入：c = 4
 * 输出：true
 * 
 * 
 * 示例 4：
 * 
 * 输入：c = 2
 * 输出：true
 * 
 * 
 * 示例 5：
 * 
 * 输入：c = 1
 * 输出：true
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= c <= 2^31 - 1
 * 
 * 
 */
export
  // @lc code=start
  function judgeSquareSum(c: number): boolean {
  let j = c ** 0.5 >> 0, i = 0;
  while (i <= j) {
    const total = i ** 2 + j ** 2;
    if (total > c) j = j - 1;
    else if (total < c) i++;
    else return true;
  }
  return false;
}
// @lc code=end

