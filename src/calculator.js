export class Calculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  mercuryAge() {
    return Number.parseFloat((this.earthAge / 0.24).toFixed(2));
  }

  venusAge() {
    return Number.parseFloat((this.earthAge / 0.62).toFixed(2));
  }
}