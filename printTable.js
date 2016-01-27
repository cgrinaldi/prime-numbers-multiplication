// Function takes an array of arrays and prints to screen
// Input: table - array of arrays
// Output: logs table to console
function printTable(table) {
  if (!Array.isArray(table) || !Array.isArray(table[0])) {
    throw new Error('input must be an array of arrays');
  }

  var tableStr = table
    .map(row => row.join(' '))
    .reduce((acc, curr) => acc + '\n' + curr);

  console.log(tableStr);
}

module.exports = printTable;
