/*
 * @lc app=leetcode.cn id=709 lang=typescript
 *
 * [709] 转换成小写字母
 */
export
  // @lc code=start
  function toLowerCase(str: string): string {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    const code = str.codePointAt(i) || 0;
    res += code >= 65 && code <= 90
      ? String.fromCodePoint(code + 32)
      : str[i];
  }
  return res;
}
// @lc code=end

