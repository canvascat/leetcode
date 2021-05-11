/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */
export
// @lc code=start
function maxProfit(prices: number[]): number {
  let income = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] >= prices[i + 1]) continue;
    income += (prices[i + 1] - prices[i]);
  }
  return income;
}
// @lc code=end

