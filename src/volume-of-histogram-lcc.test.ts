import { trap } from './volume-of-histogram-lcci'

// [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6

describe('trap', () => {
  it('should search number in sorted array', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
  })
})
