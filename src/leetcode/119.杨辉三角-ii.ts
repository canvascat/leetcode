/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */
export
// @lc code=start
function getRow(rowIndex: number): number[] {
  const currentLine = [1];
  for (let numIndex = 1; numIndex <= rowIndex >> 1; numIndex++) {
    // https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/pascal-triangle
    currentLine[numIndex] = currentLine[numIndex - 1] * (rowIndex - numIndex + 1) / numIndex;
  }
  for (let numIndex = (rowIndex >> 1) + 1; numIndex <= rowIndex; numIndex++) {
    currentLine[numIndex] = currentLine[rowIndex - numIndex];
  }
  return currentLine;
}
// @lc code=end

