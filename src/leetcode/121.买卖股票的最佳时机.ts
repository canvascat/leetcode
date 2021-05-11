/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */
export
// @lc code=start
function maxProfit(prices: number[]): number {
  let min = prices[0], income = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > min) income = Math.max(income, prices[i] - min);
    else min = prices[i];
  }
  return income;
}
// @lc code=end

