/*
 * @lc app=leetcode.cn id=575 lang=typescript
 *
 * [575] 分糖果
 */
export
  // @lc code=start
  function distributeCandies(candyType: number[]): number {
  // 当糖果种类小于数量一半时
  return Math.min(candyType.length >> 1, new Set(candyType).size)
}
// @lc code=end

