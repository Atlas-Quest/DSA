// example: n = 10

function isPrime(n: number) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(7));
console.log(isPrime(15));
console.log(isPrime(11));
