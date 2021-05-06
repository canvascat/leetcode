import { isEqual } from 'lodash';
import { moveZeroes } from '../283.移动零';

describe('283.移动零', () => {
  const nums = [0,1,0,3,12];
  moveZeroes(nums);
  expect(isEqual(nums, [1, 3, 12, 0, 0])).toBe(true);
});
