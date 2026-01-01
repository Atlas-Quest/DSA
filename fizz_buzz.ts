export function fizzBuzz(num: number): string {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Fizz Buzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }
  return num.toString();
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(5));
console.log(fizzBuzz(10));
console.log(fizzBuzz(12));
console.log(fizzBuzz(15));
