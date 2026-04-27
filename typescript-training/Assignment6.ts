//Print whether the number is prime or not
function isPrime(n: number): boolean {
    //0,1 and negative numbers are not prime numbers
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    //check whether the number is divisible  or not
    if (n % i === 0) {
        console.log(`Number ${n} is not prime`)
        return false; // divisible → not prime
    }   
  }
  return true; // no divisors found → prime
}
console.log(isPrime(7));
console.log(isPrime(25));
console.log(isPrime(1));
console.log(isPrime(-3));
