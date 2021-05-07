export
/*
 * @lc app=leetcode.cn id=258 lang=typescript
 *
 * [258] 各位相加
 *
 * https://leetcode-cn.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (64.73%)
 * Likes:    335
 * Dislikes: 0
 * Total Accepted:    68.3K
 * Total Submissions: 99.2K
 * Testcase Example:  '38'
 *
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
 *
 * 示例:
 *
 * 输入: 38
 * 输出: 2
 * 解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
 *
 *
 * 进阶:
 * 你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？
 * f(10*x+y)=f(9*x+x+y)=f(x+y)
 * f(x) = x % 9
 * num > 9 ? num % 9 || 9 : num
 */

// @lc code=start
function addDigits(num: number): number {
  while (num >= 10) {
    let sum = 0;
    while (num >= 10) {
      const y = num % 10;
      num = (num - y) / 10;
      sum += y;
    }
    num += sum;
  }
  return num;
}
// @lc code=end

