import getRandomColor from '../../utilities/helpers/getRandomColor'

describe('getRandomColor', () => {
  it('should return a valid rgb color with opacity 0.2', () => {
    const color = getRandomColor()

    expect(color).toMatch(/^rgba\(\d{1,3}, \d{1,3}, \d{1,3}, 0\.2\)$/)

    const match = color.match(/\d+/g)
    if (!match) throw new Error('No RGB values found')

    const [r, g, b] = match.map(Number)

    expect(r).toBeGreaterThanOrEqual(0)
    expect(r).toBeLessThanOrEqual(255)
    expect(g).toBeGreaterThanOrEqual(0)
    expect(g).toBeLessThanOrEqual(255)
    expect(b).toBeGreaterThanOrEqual(0)
    expect(b).toBeLessThanOrEqual(255)

    expect(!(r === 255 && g === 255 && b === 255)).toBeTruthy()
    expect(!(r === 0 && g === 0 && b === 0)).toBeTruthy()
    expect(!(r === g && g === b)).toBeTruthy()
  })

  it('should return different colors on multiple calls', () => {
    const colors = new Set()
    for (let i = 0; i < 10; i++) {
      colors.add(getRandomColor())
    }
    expect(colors.size).toBeGreaterThan(1)
  })
})
