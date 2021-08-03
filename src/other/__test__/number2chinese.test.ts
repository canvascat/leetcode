import { number2chinese } from '../number2chinese';


describe('number2chinese', () => {
  it('15.15 -> 十五点一五', () => {
    expect(number2chinese(15)).toBe('十五');
  });
  it('1010 -> 一千零一十', () => {
    expect(number2chinese(1010)).toBe('一千零一十');
  });
  it('5010200020 -> 五十亿一千零二十万零二十', () => {
    expect(number2chinese(5010200020)).toBe('五十亿一千零二十万零二十');
  });
});
