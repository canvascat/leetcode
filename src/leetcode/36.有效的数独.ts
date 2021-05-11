/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */
export
// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    const col = new Set();
    const block = new Set();
    const offsetX = i * 3 % 9;
    const offsetY = Math.floor(i / 3) * 3;
    // 分别判断横竖块三种
    for (let j = 0; j < 9; j++) {
      const r = board[i][j];
      const c = board[j][i];
      const b = board[j % 3 + offsetX][offsetY + Math.floor(j / 3)];
      if (c !== '.') {
        if (col.has(c)) return false;
        col.add(c);
      }
      if (r !== '.') {
        if (row.has(r)) return false;
        row.add(r);
      }
      if (b !== '.') {
        if (block.has(b)) return false;
        block.add(b);
      }
    }
  }
  return true;
}
// @lc code=end

