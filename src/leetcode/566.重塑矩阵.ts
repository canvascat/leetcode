/*
 * @lc app=leetcode.cn id=566 lang=typescript
 *
 * [566] 重塑矩阵
 */
export
  // @lc code=start
  function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const matFlat = mat.flat();
  if (matFlat.length !== r * c) return mat;
  return Array.from(Array(r), (v, k) => matFlat.slice(k * c, (k + 1) * c));
}
// @lc code=end

