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

  test('#6. determine earthYears since my 18th birthday', () => {
    expect(ageTest.earthYearsSince18()).toEqual(20);
  });

  test('#7. determine mercuryYears since adulthood (18 years old)', () => {
    expect(ageTest.mercuryYearsSince18()).toEqual(83.33);
  });

  test('#8. determine venusYears since my 18th birthday', () => {
    expect(ageTest.venusYearsSince18()).toEqual(32.26);
  });

  test('#9. determine marsYears since my 18th birthday', () => {
    expect(ageTest.marsYearsSince18()).toEqual(10.64);
  });

  test('#10. determine jupiterYears since my 18th birthday', () => {
    expect(ageTest.jupiterYearsSince18()).toEqual(1.69);
  });

  test('#11. determine eathYears until retirement (64 earth yearths old)', () => {
    expect(ageTest.earthYearsUntilRetirement()).toEqual(26);
  })

  test('#12. determine mercuryYears until retirement (64 earth yearths old)', () => {
    expect(ageTest.mercuryYearsUntilRetirement()).toEqual(108.33);
  });

  test('#13. determine venusYears until retirement (64 earth yearths old)', () => {
    expect(ageTest.venusYearsUntilRetirement()).toEqual(41.94);
  });

  test('#14. determine marsYears until retirement (64 earth yearths old)', () => {
    expect(ageTest.marsYearsUntilRetirement()).toEqual(13.83);
  });
});

