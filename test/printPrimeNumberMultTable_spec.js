var chai = require('chai')
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var printTable = require('../src/printTable.js');

chai.use(sinonChai);

describe('generatePrimeMultTable()', () => {

  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('should log something to the console', () => {
    require('../printPrimeNumberMultTable.js');
    expect(console.log).to.be.called;
  });

});
