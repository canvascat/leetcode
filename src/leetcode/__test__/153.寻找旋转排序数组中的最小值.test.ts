import { range } from "lodash"
import { findMin } from "src/leetcode/153.寻找旋转排序数组中的最小值"

const createNums = (l: number, n: number) => {
  const nums = range(l);
  return [...nums.splice(n), ...nums];
}

describe('153.寻找旋转排序数组中的最小值', () => {
  test('should be true', () => {
    expect(findMin(createNums(10, 3))).toBe(0);
    expect(findMin(createNums(10, 4))).toBe(0);
    expect(findMin(createNums(10, 5))).toBe(0);
    expect(findMin(createNums(10, 6))).toBe(0);
  })
});
