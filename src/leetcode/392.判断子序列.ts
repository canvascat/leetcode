/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */
export
  // @lc code=start
  function isSubsequence(s: string, t: string): boolean {
  let i = 0, j = 0;
  while (s[i] && t[j]) {
    if (s[i] === t[j]) i++;
    j++;
  }
  return i === s.length;
}
// @lc code=end

