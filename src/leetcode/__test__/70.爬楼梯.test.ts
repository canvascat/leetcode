import { climbStairs, recursionClimbStairs } from 'src/leetcode/70.爬楼梯';


describe('70.爬楼梯', () => {
  it('climbStairs 15 -> 987', () => {
    expect(climbStairs(15)).toBe(987);
  });
  it('recursionClimbStairs 1 -> ', () => {
    expect(recursionClimbStairs(1)).toBe(1);
  });
  it('recursionClimbStairs 15 -> 987', () => {
    expect(recursionClimbStairs(15)).toBe(987);
  });
});
