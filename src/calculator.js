export class Calculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  mercuryAge() {
    return Number.parseFloat((this.earthAge / 0.24).toFixed(2));
  }
}