/* global test expect describe */
const Square = require('../Square')

describe('Sqaure Class', () => {
  const square = new Square(4)

  test('square length to be same as constructor arg', () => {
    expect(square.length).toBe(4)
  })

  test('generate 3 space', () => {
    const threeSpace = square.generate(' ', 3)
    expect(threeSpace).toBe('   ')
  })

  test('generate 4 hex', () => {
    const threeSpace = square.generate('#', 4)
    expect(threeSpace).toBe('####')
  })

  test('render square of length 4', () => {
    square.render()
  })
})
