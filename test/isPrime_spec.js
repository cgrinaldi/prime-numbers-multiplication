var expect = require('chai').expect;
var isPrime = require('../isPrime.js');

describe('isPrime()', () => {

  it('should throw an error if input is invalid', () => {
    expect(isPrime.bind(null, 'abc')).to.throw(Error);
    expect(isPrime.bind(null, 5.7)).to.throw(Error);
  });

  it('should return false if number is <= 1', () => {
    expect(isPrime(-5)).to.equal(false);
    expect(isPrime(1)).to.equal(false);
  });

  it('should correctly identify prime numbers', () => {
    expect(isPrime(2)).to.equal(true);
    expect(isPrime(5)).to.equal(true);
    expect(isPrime(89)).to.equal(true);
  });

  it('should correctly identify numbers as not prime', () => {
    expect(isPrime(4)).to.equal(false);
    expect(isPrime(46)).to.equal(false);
  });

  xit('should be able to handle large input values', () => {
    expect(isPrime(50000)).to.equal(false);
  });

});
