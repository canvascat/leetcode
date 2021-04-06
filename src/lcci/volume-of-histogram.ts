export function trap(height: number[]): number {
  let sum = 0
  for (let i = 1; i < height.length - 1; i++) {
    const h = height[i]
    const leftTop = Math.max(...height.slice(0, i)),
      rightTop = Math.max(...height.slice(i + 1))
    const offsetH = Math.min(leftTop, rightTop) - h
    if (offsetH > 0) sum += offsetH
  }
  return sum
}
