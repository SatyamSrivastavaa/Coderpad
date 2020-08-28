// function primeFactorization(number) {

//   var factors = [];
  
//   for(let i=2; i<=number; i++) {
//     while((number % i) === 0) {
//       factors.push(i);
//       number = number / i;
//     }
//   }
//   return factors;
// };

// var number = 20;
// var x = primeFactorization(number);
// console.log(x);

function calcPrimeFactors(num) {
  let res = [];

  while(num % 2 === 0) {
      res.push(2);
      num /= 2;
  }

  for(let i = 3; i <= num; i += 2) {
      while(num % i === 0) {
          res.push(i);
          num /= i;
      }
  }

  return res;
}

console.log(calcPrimeFactors(315));