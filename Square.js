class Square {
  constructor (length) {
    this.length = length
  }
  generate (char, times) {
    return Array(times).fill(char).join('')
  }
  render () {
    let row = ''
    for (var i = 0; i < this.length; i++) {
      row = i === 0 || i === this.length - 1
      ? this.generate('#', this.length)
      : this.generate('#', 1) + this.generate(' ', this.length - 2) + this.generate('#', 1)
      console.log(row)
    }
  }
}

module.exports = Square
