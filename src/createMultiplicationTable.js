function createMultiplicationTable(rowNums, colNums) {
  var result = [];

  // Add the first row which contains the column numbers,
  // offset by 1 entry
  result.push([''].concat(colNums));
  rowNums.forEach((rowNum) => {
    // The rowNum should be the first entry in each row
    var row = [rowNum];
    colNums.forEach((colNum) => {
      row.push(rowNum * colNum);
    });
    result.push(row);
  });

  return result;
}

module.exports = createMultiplicationTable;
