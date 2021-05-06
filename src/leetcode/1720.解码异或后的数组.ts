export
/*
 * @lc app=leetcode.cn id=1720 lang=typescript
 *
 * [1720] 解码异或后的数组
 *
 * https://leetcode-cn.com/problems/decode-xored-array/description/
 */

// @lc code=start
function decode(encoded: number[], first: number): number[] {
  const res = [first];
  res.length = encoded.length + 1;
  for (let i = 0; i < encoded.length; i++) {
    res[i + 1] = encoded[i] ^ res[i]
  }
  return res;
}
// @lc code=end

