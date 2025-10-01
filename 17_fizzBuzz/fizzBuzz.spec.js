const fizzBuzz = require('./fizzBuzz')

describe('fizzBuzz', () => {
  test('FizzBuzz up to 5', () => {
    expect(fizzBuzz(5)).toEqual('1\n2\nFizz\n4\nBuzz');
  });
});
