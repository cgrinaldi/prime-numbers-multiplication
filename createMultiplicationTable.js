function createMultiplicationTable(rowNums, colNums) {
  var result = [];

  rowNums.forEach((rowNum) => {
    var row = [];
    colNums.forEach((colNum) => {
      row.push(rowNum * colNum);
    });
    result.push(row);
  });

  return result;
}

module.exports = createMultiplicationTable;

