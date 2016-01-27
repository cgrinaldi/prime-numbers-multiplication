// Main entry point that is used to print the prime number multiplication table.
// If no argument is passed in, default number of prime numbers to use is 10.
const generatePrimeNumbers = require('./generatePrimeNumbers.js');
const createMultiplicationTable = require('./createMultiplicationTable.js');
const printTable = require('./printTable.js');

const n = +process.argv[2] || 10;
const primeNumbers = generatePrimeNumbers(n);
const primeMultTable = createMultiplicationTable(primeNumbers, primeNumbers);
printTable(primeMultTable);



