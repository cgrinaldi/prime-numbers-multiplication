var expect = require('chai').expect;
var createMultiplicationTable = require('../../src/createMultiplicationTable.js');

describe('createMultiplicationTable()', () => {
  var rowNums = [3,4,8,10];
  var colNums = [1,2,3];
  var resultMatrix = createMultiplicationTable(rowNums, colNums);

  it ('should throw an error if not passed arrays as arguments', () => {
    expect(createMultiplicationTable.bind(null, 'a', [1,2,3]))
      .to.throw(Error);
    expect(createMultiplicationTable.bind(null, [3,4,6], 10))
      .to.throw(Error);
  });

  it('should return an array of arrays', () => {
    expect(resultMatrix).to.be.an('array');
    expect(resultMatrix[0]).to.be.an('array');
  });

  it('should have 1 more row than the number of row values passed \
      into the rowNums array', () => {
    expect(resultMatrix).to.have.length(rowNums.length + 1);
  });

  it('should have 1 more column than the number of col values passed \
      into the colNums array', () => {
    expect(resultMatrix[0]).to.have.length(colNums.length + 1);
  });

  it('should have the product of rowNums[i] and colNums[j] in result[i+1][j+1]', () => {
    expect(resultMatrix[2+1][2+1]).to.equal(24);
    expect(resultMatrix[0+1][1+1]).to.equal(6);
  });

});
