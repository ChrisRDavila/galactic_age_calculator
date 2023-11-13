import { Calculator } from './../src/calculator.js';

describe('Calculator', () => {
  let ageTest;
  
  beforeAll(() => {
    ageTest = new Calculator(38)
  });
  test('#1. should return instance of age from age constructor', () => {
    expect(ageTest.earthAge).toEqual(38);
  });

  test('#2. should return age in Mercury years', () => {
    expect(ageTest.mercuryAge()).toEqual(158);
  });
});