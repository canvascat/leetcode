/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */
export
// @lc code=start
function romanToInt(s: string): number {
  const m: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let index = 0, current = s[0], sum = 0;
  for (let i = 1; i <= s.length; i++) {
    if (current === s[i]) continue;
    // 数量*对应的值，根据位置判断加减
    sum += (i - index) * m[current] * (m[current] < m[s[i]] ? -1 : 1);
    index = i, current = s[i];
  }
  return sum;
}
// @lc code=end

