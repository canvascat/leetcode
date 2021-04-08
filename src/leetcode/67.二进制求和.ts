/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
export function addBinary(a: string, b: string): string {
  if (b.length > a.length) [a, b] = [b, a];
  let len = a.length, sum = '', j = 0;
  b = b.padStart(len, '0');
  while (len--) {
    const n = j + +a[len] + +b[len];
    j = n >> 1;
    sum = `${n % 2}${sum}`;
  }
  if (j) sum = `1${sum}`;
  return sum;
}
// @lc code=end

