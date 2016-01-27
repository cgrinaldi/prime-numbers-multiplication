var expect = require('chai').expect;
var createMultiplicationTable = require('../createMultiplicationTable.js');

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

  it('should have the same number of rows as number of values passed \
      into the rowNums array', () => {
    expect(resultMatrix).to.have.length(4);
  });

  it('should have the same number of columns as the number of values passed \
      into the colNums array', () => {
    expect(resultMatrix[0]).to.have.length(3);
  });

  it('should have the product of rowNums[i] and colNums[j] in result[i][j]', () => {
    expect(resultMatrix[2][2]).to.equal(24);
    expect(resultMatrix[0][1]).to.equal(6);
  });

});
