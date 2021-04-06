/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */
export function recursionClimbStairs(n: number): number {
  if (n <= 1) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
}
// @lc code=start
export function climbStairs(n: number): number {
  let a = 1, b = 1;
  while (--n) {
    [a, b] = [b, a + b];
  }
  return b;
}
// @lc code=end

