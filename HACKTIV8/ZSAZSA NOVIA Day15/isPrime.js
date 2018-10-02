
function isPrime (number) {
  // Your code here
  
  for (var a = 2; a<number; a++){
    if (number%a === 0)return false;
  }
  return true
}

// TEST CASES
console.log(isPrime(3)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false
