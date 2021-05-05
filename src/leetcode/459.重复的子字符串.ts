/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 */
export
  // @lc code=start
  function repeatedSubstringPattern(s: string): boolean {
  // 当s由n个以上字串组合而成时，两个s相连去掉首尾后也一定包含2n-2个字串
  // return (s + s).substring(1, s.length * 2 - 1).indexOf(s) !== -1;
  const len = s.length;
  for (let i = 1; i <= len >> 1; i++) {
    // 逐个尝试，找出符合条件子串
    // if (len % i === 0 && Array(len / i).fill(s.substr(0, i)).join('') === s) return true;
    // 进行字串长度的位移后和原字符串相同
    if (s === s.substr(len - i, i) + s.substr(0, len - i)) return true;
  }
  return false;
}
// @lc code=end

