/*
 * @lc app=leetcode.cn id=1310 lang=typescript
 *
 * [1310] 子数组异或查询
 */
export
// @lc code=start
function xorQueries(arr: number[], queries: number[][]): number[] {
  return queries.map(([start, end]) => arr.slice(start, end + 1).reduce((a, b) => a ^ b, 0));
}
// @lc code=end

