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

  marsAge() {
    return Number.parseFloat((this.earthAge / 1.88).toFixed(2));
  }

  jupiterAge() {
    return Number.parseFloat((this.earthAge / 11.86).toFixed(2));
  }

  earthYearsSince18() {
    return Number.parseFloat((this.earthAge - 18).toFixed(2));
  }
}