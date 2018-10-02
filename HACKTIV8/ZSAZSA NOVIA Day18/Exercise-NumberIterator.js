function numberIterator(num, i = 0) {
 // Your code here
  var str = ""
  if (num == 0){
    str = ""+i
  }else{
    str = (i++) + numberIterator(num - 1, i)
  }
  return str
}

// TEST CASES
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'