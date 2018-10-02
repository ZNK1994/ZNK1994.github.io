function gcd (firstNumber, secondNumber) {
  // Your code here
  var array1 = []
  var array2 = []
  for ( var a=1; a<=firstNumber; a++){
    if(firstNumber%a===0){
      array1.push(a);
    }
  }
  
  for (var b=1; b<=secondNumber; b++){
    if(secondNumber%b===0){
      array2.push(b);
    }
  }
  for (var c=0; c<array1.length; c++){
    for (var d=0; d<array2.length; d++){
      if(array1[c] === array2[d]){
        var hasil = array1[c];
    }
    }  
  }
  return hasil
}

// TEST CASES
console.log(gcd(12, 16)); // 4
console.log(gcd(50, 40)); // 10
console.log(gcd(22, 99)); // 11
console.log(gcd(24, 36)); // 12
console.log(gcd(17, 23)); // 1
