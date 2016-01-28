// padNumber takes a number and a desired width and returns a string padded
// by blank space on the left

// input: number (double), width (positive integer)
// output: string
function padNumber(number, width) {
  if (typeof number !== 'number') {
    throw new Error('Must be provided a number');
  }
  if (typeof width !== 'number' || width % 1 !== 0 || width <= 0) {
    throw new Error('Provided width must be a positive integer');
  }

  // NOTE: If number is > in length than width, function will return
  // the number as a string (does not truncate)
  var result = String(number).split('');
  while (result.length < width) {
    result.unshift(' ');
  }
  return result.join('');
}

module.exports = padNumber;
