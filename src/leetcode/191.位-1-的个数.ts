/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */
export
// @lc code=start
function hammingWeight(n: number): number {
  let sum = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) sum++;
  }
  return sum;
}
// @lc code=end

