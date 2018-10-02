function compareNumbers (firstNumber, secondNumber) {
  // Your code here
  var hasil = ""
  if (firstNumber<secondNumber) hasil = true;
  if (firstNumber>secondNumber) hasil = false;
  if (firstNumber==secondNumber) hasil = -1;
  return hasil;
}

// TEST CASES
console.log(compareNumbers(5, 8)); // true
console.log(compareNumbers(5, 3)); // false
console.log(compareNumbers(4, 4)); // -1
console.log(compareNumbers(3, 3)); // -1
console.log(compareNumbers(17, 2)); // false