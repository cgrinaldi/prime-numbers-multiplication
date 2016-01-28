function padNumber(number, width) {
  if (typeof number !== 'number') {
    throw new Error('Must be provided a number');
  }
  if (typeof width !== 'number' || width % 1 !== 0 || width <= 0) {
    throw new Error('Provided width must be a positive integer');
  }

  var result = String(number).split('');
  while (result.length < width) {
    result.unshift(' ');
  }
  return result.join('');
}

module.exports = padNumber;
