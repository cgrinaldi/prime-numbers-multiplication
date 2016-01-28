var padNumber = require('./padNumber.js');

// printTable takes a table (array of arrays) and prints to screen
// Input: table (array of arrays)
// Output: logs table to console
function printTable(table) {
  if (!Array.isArray(table) || !Array.isArray(table[0])) {
    throw new Error('input must be an array of arrays');
  }

  // Identify maxNum for formatting purposes
  var maxNum = table[table.length-1][table[0].length-1];
  var maxNumLength = String(maxNum).length;

  var tableStr = '';
  for (var i = 0; i < table.length; i++) {
    var row = '';
    for (var j = 0; j < table[i].length; j++) {
      var val = table[i][j];
      // Need to treat the first column differently since need to indent
      if (val === '') {
        row += Array(maxNumLength + 2).join(' ');
      }
      // Otherwise, we pad based on the length of the longest number to
      // make everything left aligned
      else {
        row += padNumber(table[i][j], maxNumLength) + ' ';
      }
    }
    tableStr += row + '\n';
  }

  console.log(tableStr);
}

module.exports = printTable;
