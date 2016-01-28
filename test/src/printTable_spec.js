var chai = require('chai')
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var printTable = require('../../src/printTable.js');

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

  // NOTE: Using a visual check that the output is being formatted correctly
  xit('should log the correct string to the console', () => {
    printTable([['', 2, 3], [2, 4, 6], [3, 6, 9]]);
    var expectedResult = '  2 3 \n2 4 6 \n3 6 9 ';
    expect(console.log).calledWith(expectedResult);
  });

});
