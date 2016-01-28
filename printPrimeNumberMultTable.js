// Main entry point that is used to print the prime number multiplication table.
const generatePrimeNumbers = require('./src/generatePrimeNumbers.js');
const createMultiplicationTable = require('./src/createMultiplicationTable.js');
const printTable = require('./src/printTable.js');

// If no argument is passed in, default number of prime numbers to use is 10.
const n = +process.argv[2] || 10;
const primeNumbers = generatePrimeNumbers(n);
const primeMultTable = createMultiplicationTable(primeNumbers, primeNumbers);
printTable(primeMultTable);
