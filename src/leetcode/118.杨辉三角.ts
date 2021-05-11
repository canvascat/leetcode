/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */
export
// @lc code=start
function generate(numRows: number): number[][] {
  const tpl: number[][] = Array.from(Array(numRows), (v, k) => Array(k + 1).fill(1));
  for (let i = 2; i < numRows; i++) {
    const lastLine = tpl[i - 1];
    const line = tpl[i];
    for (let j = 1; j < lastLine.length; j++) {
      line[j] = lastLine[j] + lastLine[j - 1];
    }
  }
  return tpl;
}
// @lc code=end

