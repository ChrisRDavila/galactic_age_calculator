export class Calculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.prevAge = 18;
    this.retirementAge = 64;
  }

  mercuryAge() {
    return Number.parseFloat((this.earthAge / 0.24).toFixed(2)) + " mercury years";
  }

  venusAge() {
    return Number.parseFloat((this.earthAge / 0.62).toFixed(2)) + " venus years";
  }

  marsAge() {
    return Number.parseFloat((this.earthAge / 1.88).toFixed(2)) + " mars years";
  }

  jupiterAge() {
    return Number.parseFloat((this.earthAge / 11.86).toFixed(2)) + " jupiter years";
  }

  earthYearsSince18() {
    return Number.parseFloat((this.earthAge - this.prevAge).toFixed(2)) + " earth years have passed";
  }

  mercuryYearsSince18() {
    return Number.parseFloat(((this.earthAge - this.prevAge)/0.24).toFixed(2)) +  " mercury years have passed";
  }

  venusYearsSince18() {
    return Number.parseFloat(((this.earthAge - this.prevAge)/0.62).toFixed(2)) + " venus years have passed";
  }

  marsYearsSince18() {
    return Number.parseFloat(((this.earthAge - this.prevAge)/1.88).toFixed(2)) + " mars years have passed";
  }

  jupiterYearsSince18() {
    return Number.parseFloat(((this.earthAge - this.prevAge)/11.86).toFixed(2)) + " jupiter years have passed";
  }

  earthYearsUntilRetirement() {
    return Number.parseFloat((this.retirementAge - this.earthAge).toFixed(2)) + " earth years will pass";
  }

  mercuryYearsUntilRetirement() {
    return Number.parseFloat(((this.retirementAge - this.earthAge)/0.24).toFixed(2)) + " mercury years will pass";
  }

  venusYearsUntilRetirement() {
    return Number.parseFloat(((this.retirementAge - this.earthAge)/0.62).toFixed(2)) + " venus years will pass";
  }

  marsYearsUntilRetirement() {
    return Number.parseFloat(((this.retirementAge - this.earthAge)/1.88).toFixed(2)) + " mars years will pass";
  }

  jupiterYearsUntilRetirement() {
    return Number.parseFloat(((this.retirementAge - this.earthAge)/11.86).toFixed(2)) + " jupiter years will pass";
  }
}