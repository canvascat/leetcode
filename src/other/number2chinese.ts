const NUMS = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const NUM_UNITS = ['', '十', '百', '千'];
const BLOCK_UNITS = Object.freeze(['', '万', '亿', '兆']);

function chunk<T> (list: T[], count = 1): T[][] {
  return Array.from(Array(Math.ceil(list.length / count)), (v, k) => list.slice(k *= count, k + count));
}

export function number2chinese (num: number): string {
  const [int, dec] = num.toString().split('.');
  const result = chunk(int.split('').reverse(), 4).reduce((str, block, i) => {
    return block.reduce((txt, cur, j) => {
      if (+cur === 0) {
        if (!txt || txt.startsWith(NUMS[0])) return txt;
        return `${NUMS[+cur]}${txt}`;
      }
      return `${NUMS[+cur]}${NUM_UNITS[j]}${txt}`;
    }, '') + BLOCK_UNITS[i] + str;
  }, '');
  if (!dec) return result;
  return result + '点' + dec.split('').map(b => NUMS[+b]).join('');
}
