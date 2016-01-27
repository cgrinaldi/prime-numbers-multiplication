var expect = require('chai').expect;
var generatePrimeNumbers = require('../generatePrimeNumbers.js');

describe('generatePrimeNumbers()', () => {

  it('should throw an error if given a value <= 0', () => {
    expect(generatePrimeNumbers.bind(null, -5)).to.throw(Error);
    expect(generatePrimeNumbers.bind(null, 0)).to.throw(Error);
  });

  it('should throw an error if given something other than numbers', () => {
    expect(generatePrimeNumbers.bind(null, 'cat')).to.throw(Error);
  });

  it('should throw an error if given a number that is not an integer', () => {
    expect(generatePrimeNumbers.bind(null, 4.3)).to.throw(Error);
  });

  it('should return an array of numbers', () => {
    expect(generatePrimeNumbers(10)).to.be.an.instanceof(Array);
  });

  it('should return the correct first 10 prime numbers', () => {
    const expectedResult = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    expect(generatePrimeNumbers(10)).to.deep.equal(expectedResult);
  });

  it('should be able to handle large input values', () => {
    expect(generatePrimeNumbers(500)).to.have.length(500);
  });

});
