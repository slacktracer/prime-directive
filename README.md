# prime-directive
A (dead simple) prime factorization lib

Download, then:

```
cd prime-directive
npm install
node index -n 9999
npm run start -- -n 9999
npm run test
```

Or:

```
npm install prime-directive
```

Then:

```
// index.js
const getPrimeFactors = require('prime-directive');
const x = getPrimeFactors(9999);
console.log(x);
```

```
node index
```
