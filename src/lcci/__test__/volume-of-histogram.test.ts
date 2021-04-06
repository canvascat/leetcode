import { trap } from 'src/lcci/volume-of-histogram'

// [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6

describe('trap', () => {
  it('6', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
  })
})
