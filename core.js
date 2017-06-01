const flooredSquareRoot = x => Math.floor(Math.sqrt(x));

const gatekeeper = x => {

  const isKeymaster =
    x > 0 && Number.isInteger(x) && x <= Number.MAX_SAFE_INTEGER;

  if (!isKeymaster) {

    throw new Error(
      `Argument must be a greater then 0 (zero) integer and lesser than the maximum safe integer in JavaScript (${Number.MAX_SAFE_INTEGER}).`
    );

  }

};

const primeFactors = n => {

  if (n < 1) {

    throw new Error('Argument must be greater than or equal to 1.');

  }

  const result = [];

  while (n != 1) {

    const factor = smallestPrimeFactor(n);
    result.push(factor);
    n /= factor;

  }

  return result;

};

const smallestPrimeFactor = n => {

  if (n < 2) {

    throw new Error('Argument must be greater than or equal to 2.');

  }

  if (n % 2 === 0) {

    return 2;

  }

  const stop = flooredSquareRoot(n);

  for (let i = 3; i <= stop; i += 2) {

    if (n % i === 0) {

      return i;

    }

  }

  return n;

};

const getPrimeFactors = n => {

  gatekeeper(n);

  return primeFactors(n);

};

getPrimeFactors.getSmallestPrimeFactor = n => {

  gatekeeper(n);

  return smallestPrimeFactor(n);

};

module.exports = getPrimeFactors;
