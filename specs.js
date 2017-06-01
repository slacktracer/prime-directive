import getPrimeFactors from './index';
import test from 'ava';

const isPrime = n => getPrimeFactors.getSmallestPrimeFactor(n) === n;
const multiply = (m, n) => m * n;

test('Os fatores primos de 25 são 5 e 5.', t => {
  const result = getPrimeFactors(25);
  t.deepEqual(result, [5, 5]);
});

test('Os fatores primos de 9007199254740991 são 6361, 69431 e 20394401.', t => {
  const result = getPrimeFactors(9007199254740991);
  t.deepEqual(result, [6361, 69431, 20394401]);
});

[617406396, 950554887, 149914773, 665420907, 292253005].forEach(number => {
  test('Os fatores primos resultantes devem, naturalmente, ser primos.', t => {
    const result = getPrimeFactors(number);
    const allPrime = result.every(isPrime);
    t.true(allPrime);
    const correct = result.reduce(multiply, 1);
    t.is(number, correct);
  });
});

test('Os fatores primos de 1 são, na verdade, um produto vazio.', t => {
  const result = getPrimeFactors(1);
  t.deepEqual(result, []);
});

test('O input deve ser um inteiro positivo maior que zero e menor que ou igual ao maior inteiro seguro no JavaScript.', t => {
  let error = t.throws(() => getPrimeFactors(9007199254740992), Error);
  t.is(
    error.message,
    `Argument must be a greater then 0 (zero) integer and lesser than the maximum safe integer in JavaScript (${Number.MAX_SAFE_INTEGER}).`
  );

  error = t.throws(() => getPrimeFactors(0), Error);
  t.is(
    error.message,
    `Argument must be a greater then 0 (zero) integer and lesser than the maximum safe integer in JavaScript (${Number.MAX_SAFE_INTEGER}).`
  );

  error = t.throws(() => getPrimeFactors(-42), Error);
  t.is(
    error.message,
    `Argument must be a greater then 0 (zero) integer and lesser than the maximum safe integer in JavaScript (${Number.MAX_SAFE_INTEGER}).`
  );
});
