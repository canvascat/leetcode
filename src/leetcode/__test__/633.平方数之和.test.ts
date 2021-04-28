import { judgeSquareSum } from "src/leetcode/633.平方数之和";

describe('633.平方数之和', () => {
  test('should be true', () => {
    expect(judgeSquareSum(1)).toBe(true);
    expect(judgeSquareSum(4)).toBe(true);
    expect(judgeSquareSum(5)).toBe(true);
  });
  test('should be false', () => {
    expect(judgeSquareSum(3)).toBe(false);
    expect(judgeSquareSum(7)).toBe(false);
  });
});