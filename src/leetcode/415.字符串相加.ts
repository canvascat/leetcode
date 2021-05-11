export
  /*
   * @lc app=leetcode.cn id=415 lang=typescript
   *
   * [415] 字符串相加
   */

  // @lc code=start
  function addStrings(num1: string, num2: string): string {
  let sum = '', i = num1.length, j = num2.length, n = 0;
  while (i || j) {
    const a = i > 0 ? +num1[--i] : 0;
    const b = j > 0 ? +num2[--j] : 0;
    const c = a + b + n;
    sum = c % 10 + sum;
    n = c > 9 ? 1 : 0;
  }
  if (n) sum = 1 + sum;
  return sum;
}
// @lc code=end

