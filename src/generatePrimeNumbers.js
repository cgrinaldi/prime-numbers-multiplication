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

  // Build up array of prime numbers until desired number is achieved.
  // The key observation is that any number can be written as a factor of primes.
  // See: https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic
  // If a number n is not divisible by any prime number less than Math.sqrt(n),
  // it itself must be prime.
  var primes = [2];
  var currNumber = 3;
  while (primes.length < n) {
    // Iterate through current primes up to Math.sqrt(currNumber) to test
    // if divisible.
    for (var i = 0; i < primes.length; i++) {
      var currPrime = primes[i];
      if (currNumber % currPrime === 0) {
        // not a prime, can exit for loop and go to next number
        currNumber++;
        break;
      }
      if (currPrime > Math.sqrt(currNumber)) {
        // is a prime, add to primes and go to next number
        primes.push(currNumber);
        currNumber++;
        break;
      }
    }
  }
  return primes;
}

module.exports = generatePrimeNumbers;
