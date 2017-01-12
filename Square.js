class Square {
  constructor (length) {
    this.length = length
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
  render () {
    Array
    .from('#'.repeat(this.length))
    .map((row, i) => this.isFirstAndLast(i) ? this.generateFirstOrLastRow() : this.generateMidRows())
    .forEach(row => console.log(row))
  }
}

module.exports = Square
