/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */
export
  // @lc code=start
  function longestPalindrome(s: string): number {
  const o: Record<string, number> = Object.create(null);
  for (let i = 0; i < s.length; i++) {
    if (o[s[i]]) o[s[i]]++;
    else o[s[i]] = 1;
  }
  let x = 0;
  return Object.values(o).reduce((a, b) => a + (b % 2 ? (x = 1, b - 1) : b), 0) + x;
}
// @lc code=end

