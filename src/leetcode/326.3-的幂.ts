/*
 * @lc app=leetcode.cn id=326 lang=typescript
 *
 * [326] 3的幂
 */
export
// @lc code=start
function isPowerOfThree(n: number): boolean {
  // 精度问题
  // return n <= 0 ? false : !((Math.log(n) / Math.log(3)) % 1);
  // 3 ** 19 为 1162261467, 为小于 2 ** 31 的最大3的幂
  return n <= 0 ? false : !(1162261467 % n);
}
// @lc code=end

