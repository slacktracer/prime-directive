const [ , , command, input ] = process.argv;
const getPrimeFactors = require('./core');

if (command === '-n' && input) {

  const result = getPrimeFactors(Number(input));
  process.stdout.write(result.toString());

}

module.exports = getPrimeFactors;
