/*
 * @lc app=leetcode.cn id=12 lang=typescript
 *
 * [12] 整数转罗马数字
 */
export
  // @lc code=start
  function intToRoman(num: number): string {
  const ks = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const ss = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  return ks.reduce((r, k, i) => {
    while (num >= k) {
      num -= k;
      r += ss[i];
    }
    return r;
  }, '');
}
// @lc code=end

