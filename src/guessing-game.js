class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.candidate = Math.round((this.min + this.max) / 2);
    return this.candidate;
  }

  lower() {
    this.max = this.candidate;
    return this.max;
  }

  greater() {
    this.min = this.candidate;
    return this.min;
  }
}

module.exports = GuessingGame;
