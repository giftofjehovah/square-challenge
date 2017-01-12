class Square {
  constructor (length) {
    this.length = length
  }
  generate (char, times) {
    return Array(times).fill(char).join('')
  }
  ifIsFirstAndLast (index) {
    return index === 0 || index === this.length - 1
  }
  generateFirstOrLastRow () {
    return this.generate('#', this.length)
  }
  generateMidRows () {
    return this.generate('#', 1) + this.generate(' ', this.length - 2) + this.generate('#', 1)
  }
  render () {
    let row = ''
    for (var i = 0; i < this.length; i++) {
      row = this.ifIsFirstAndLast(i) ? this.generateFirstOrLastRow() : this.generateMidRows()
      console.log(row)
    }
  }
}

module.exports = Square
