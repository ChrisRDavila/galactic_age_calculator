export class Calculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.prevAge = 18;
    this.retirementAge = 64;
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
    return Number.parseFloat((this.earthAge - this.prevAge).toFixed(2));
  }

  mercuryYearsSince18() {
    return Number.parseFloat(((this.earthAge - this.prevAge)/0.24).toFixed(2));
  }

  venusYearsSince18() {
    return Number.parseFloat(((this.earthAge - this.prevAge)/0.62).toFixed(2));
  }

  marsYearsSince18() {
    return Number.parseFloat(((this.earthAge - this.prevAge)/1.88).toFixed(2));
  }

  jupiterYearsSince18() {
    return Number.parseFloat(((this.earthAge - this.prevAge)/11.86).toFixed(2));
  }

  earthYearsUntilRetirement() {
    return Number.parseFloat((this.retirementAge - this.earthAge).toFixed(2));
  }

  mercuryYearsUntilRetirement() {
    return Number.parseFloat(((this.retirementAge - this.earthAge)/0.24).toFixed(2));
  }
}