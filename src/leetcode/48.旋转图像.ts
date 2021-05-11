/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */
export
// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  // 上下交换
  for (let i = 0; i < n >> 1; i++) {
    [matrix[i], matrix[n - 1 - i]] = [matrix[n - 1 - i], matrix[i]];
  }
  // 对角线交换
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}
// @lc code=end

