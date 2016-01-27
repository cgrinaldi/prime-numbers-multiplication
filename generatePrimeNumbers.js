var isPrime = require('./isPrime.js');

// generatePrimeNumbers return an array of the first n prime numbers
// input: n, integer
// output: array of prime numbers
function generatePrimeNumbers(n) {
  // Error checking
  if (typeof n !== 'number' || n % 1 !== 0) {
    throw new Error('Input value must be an integer');
  }
  if (n <= 0) {
    throw new Error('Input value must be greater than 0');
  }

  // Continue using primality test until we have the number of prime numbers
  // we want.
  // TODO: Investigate a more efficient way to build up this list of prime
  // numbers.
  var primes = [];
  var counter = 0;
  var currNumber = 2;
  while (counter < n) {
    if (isPrime(currNumber)) {
      primes.push(currNumber);
      counter++;
    }
    currNumber++;
  }
  return primes;
}

module.exports = generatePrimeNumbers;
