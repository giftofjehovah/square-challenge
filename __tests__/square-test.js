/* global test expect */
const Square = require('../Square')
test('square length to be same as constructor arg', () => {
  const square = new Square(4)
  expect(square.length).toBe(4)
})
