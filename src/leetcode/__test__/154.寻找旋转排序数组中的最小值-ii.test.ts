import { findMin } from 'src/leetcode/154.寻找旋转排序数组中的最小值-ii';

describe('154.寻找旋转排序数组中的最小值-ii', () => {
  test('should be true', () => {
    expect(findMin([1, 3, 5])).toBe(1);
    expect(findMin([2, 2, 2, 0, 1])).toBe(0);
  })
});
