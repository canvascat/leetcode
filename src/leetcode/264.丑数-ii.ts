/*
 * @lc app=leetcode.cn id=264 lang=typescript
 *
 * [264] 丑数 II
 *
 * https://leetcode-cn.com/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (55.60%)
 * Likes:    513
 * Dislikes: 0
 * Total Accepted:    50.4K
 * Total Submissions: 90.5K
 * Testcase Example:  '10'
 *
 * 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
 * 
 * 丑数 就是只包含质因数 2、3 和/或 5 的正整数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 10
 * 输出：12
 * 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：1
 * 解释：1 通常被视为丑数。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */
export
  // @lc code=start
  function nthUglyNumber(n: number): number {
  const dp = [1];
  dp.length = n;
  // 三指针
  let a = 0, b = 0, c = 0;
  for (let i = 1; i < n;) {
    const x = 2 * dp[a], y = 3 * dp[b], z = 5 * dp[c];
    const m = Math.min(x, y, z);
    if (x === m) a++;
    else if (y === m) b++;
    else if (z === m) c++;
    // 去重
    if (m !== dp[i - 1]) dp[i++] = m;
  }
  return dp[n - 1];
}
// @lc code=end

