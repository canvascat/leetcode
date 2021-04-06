import { addBinary } from 'src/leetcode/67.二进制求和';


describe('67.二进制求和', () => {
  it('11 + 1 = 100', () => {
    expect(addBinary('1', '11')).toBe('100');
  });
  it('1010 + 1011 = 10101', () => {
    expect(addBinary('1010', '1011')).toBe('10101');
  });
});
