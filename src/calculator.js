export class Calculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  mercuryAge() {
    return Math.floor(this.earthAge / .24);
  }
}