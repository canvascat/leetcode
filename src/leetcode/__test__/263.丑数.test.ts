import { isUgly } from "src/leetcode/263.丑数"

describe('263.丑数', () => {
  test('should be true', () => {
    expect(isUgly(1)).toBe(true);
    expect(isUgly(6)).toBe(true);
    expect(isUgly(8)).toBe(true);
  });
  test('should be false', () => {
    expect(isUgly(14)).toBe(false);
    expect(isUgly(-6)).toBe(false);
  });
});
