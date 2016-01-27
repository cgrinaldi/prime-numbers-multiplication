var chai = require('chai')
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var printTable = require('../printTable.js');

chai.use(sinonChai);

describe('printTable()', () => {

  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('should throw an error if not given an array of arrays', () => {
    expect(printTable.bind(null, [1,2,3])).to.throw(Error);
    expect(printTable.bind(null, 'cat')).to.throw(Error);
  });

  it('should log something to the console', () => {
    printTable([[1,2,3],[4,5,6],[7,8,9]]);
    expect(console.log).to.be.called;
  });

  it('should log the correct string to the console', () => {
    printTable([[1,2,3,4,5],[6,7,8,9,10]]);
    var expectedResult = '1 2 3 4 5\n6 7 8 9 10';
    expect(console.log).calledWith(expectedResult);
  });

});
