export
/*
 * @lc app=leetcode.cn id=1486 lang=typescript
 *
 * [1486] 数组异或操作
 *
 * https://leetcode-cn.com/problems/xor-operation-in-an-array/description/
 */

// @lc code=start
function xorOperation(n: number, start: number): number {
  let sum = start;
  for (let i = 1; i < n; i++) {
    sum ^= (start += 2);
  }
  return sum;
}
// @lc code=end

