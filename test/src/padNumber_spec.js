var padNumber = require('../../src/padNumber.js');
var expect = require('chai').expect;

describe('padNumber()', () => {
  
  it('should throw an error if not given a number as its first arg', () => {
    expect(padNumber.bind(null, 'abc', 10)).to.throw(Error);
    expect(padNumber.bind(null, [1,2,3], 13)).to.throw(Error);
  });

  it('should throw an error if given an invalid width', () => {
    expect(padNumber.bind(null, 10.23, -5)).to.throw(Error);
    expect(padNumber.bind(null, 13, 'cat')).to.throw(Error);
    expect(padNumber.bind(null, 13, [])).to.throw(Error);
  });

  it('should return a string', () => {
    expect(padNumber(1.23, 5)).to.be.a('string');
  });

  it('should return the number as a string if width is smaller than number length', () => {
    expect(padNumber(1.2353, 3)).to.equal('1.2353');
  });

  it('should correctly pad a number with spaces to left', () => {
    expect(padNumber(13, 5)).to.equal('   13');
  });

});
