function isPrime(n) {
  // Input must be an integer
  if (typeof n !== 'number' || n % 1 !== 0) {
    throw new Error('Input must be an integer');
  }

  // All numbers <= 1 are not prime
  if (n <= 1) {
    return false;
  }

  // Algorithm to check if number is prime
  // NOTE: Prime number is number divisible ONLY by itself and 1. If we find
  // a number that divides evenly into the number, it is not a prime number.
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime;
