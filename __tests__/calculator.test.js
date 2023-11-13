import { Calculator } from './../src/calculator.js';

describe('Calculator', () => {
  let ageTest;
  
  beforeAll(() => {
    ageTest = new Calculator(38)
  });
  test('should return instance of age from age constructor', () => {
    expect(ageTest.earthAge).toEqual(38);
  });
});