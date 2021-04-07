import { search } from "src/leetcode/81.搜索旋转排序数组-ii"

describe('81.搜索旋转排序数组-ii', () => {
  it('should be true', () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 0)).toBe(true);
  });
  it('should be false', () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 3)).toBe(false);
  });
  it('should be true', () => {
    expect(search([5, 5, 6, 0, 0, 1, 2, 3, 4, 4, 5], 3)).toBe(true);
  });
})