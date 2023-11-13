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
    expect(ageTest.mercuryAge()).toEqual(158.33);
  });

  test('#3. should return age in Venus years', () => {
    expect(ageTest.venusAge()).toEqual(61.29);
  });

  test('#4. should return age in Mars years', () => {
    expect(ageTest.marsAge()).toEqual(20.21);
  });

  test('#5. should return age in Jupiter years', () => {
    expect(ageTest.jupiterAge()).toEqual(3.20);
  });

  test('#6 determine earthYears since my 18th birthday', () => {
    expect(ageTest.earthYearsSince18()).toEqual(20);
  });

  test('#7 determine mercuryYears since my 18th birthday', () => {
    expect(ageTest.mercuryYearsSince18()).toEqual(83.33);
  });
});
