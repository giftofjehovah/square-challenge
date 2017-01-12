/* global test expect describe */
const Square = require('../Square')

describe('Sqaure Class', () => {
  const square = new Square(4)

  test('square length to be same as constructor arg', () => {
    expect(square.length).toBe(4)
  })

  test('generateFirstOrLastRow correctly', () => {
    const row = square.generateFirstOrLastRow()
    expect(row).toBe('####')
  })

  test('generateMidRows correctly', () => {
    const row = square.generateMidRows()
    expect(row).toBe('#  #')
  })

  test('isFirstAndLast to return true for first row', () => {
    const firstAndLast = square.isFirstAndLast(0)
    expect(firstAndLast).toBeTruthy()
  })

  test('isFirstAndLast to return true for last row', () => {
    const firstAndLast = square.isFirstAndLast(3)
    expect(firstAndLast).toBeTruthy()
  })

  test('isFirstAndLast to return false for mid row', () => {
    const firstAndLast = square.isFirstAndLast(2)
    expect(firstAndLast).toBeFalsy()
  })

  // test('render square of length 4', () => {
  //   square.render()
  // })
})
