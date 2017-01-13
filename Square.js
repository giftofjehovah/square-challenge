class Square {
  constructor (length) {
    this.length = length
  }
  render () {
    return Array
    .from('#'.repeat(this.length))
    .map((row, i) => this.generateRow(i))
    .reduce((a, b) => `${a}${b}\n`, '')
  }
  generateRow (i) {
    return this.isFirstAndLast(i) ? this.generateFirstOrLastRow() : this.generateMidRows()
  }
  isFirstAndLast (index) {
    return index === 0 || index === this.length - 1
  }
  generateFirstOrLastRow () {
    return '#'.repeat(this.length)
  }
  generateMidRows () {
    return '#' + ' '.repeat(this.length - 2) + '#'
  }
}

module.exports = Square
