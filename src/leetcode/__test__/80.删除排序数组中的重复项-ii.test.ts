import { isEqual } from 'lodash';
import { removeDuplicates } from 'src/leetcode/80.删除排序数组中的重复项-ii';

describe('80.删除排序数组中的重复项-ii', () => {
  const nums = [1, 1, 1, 2, 2, 4, 3, 3, 3, 3];
  const len = removeDuplicates(nums);
  it('7', () => {
    expect(len).toBe(7);
  });
  it('true', () => {
    expect(isEqual(nums, [1, 1, 2, 2, 4, 3, 3])).toBe(true);
  });
});
