function complexConversion (text) {
  // Your code here
  var array = text.split(',');
  
  var text1 = array[0];
  var text2 = array[1];
//   var text3 = array[2];
  
  var arraytext1 = text1.split(':')
  var arraytext2 = text2.split(':')
//   var arraytext3 = text3.split(':')
  
  var obj = {}
  obj[arraytext1[0]] = arraytext1[1]
  obj[arraytext2[0]] = arraytext2[1]
//   obj[arraytext3[0]] = arraytext3[1]
  
  return obj
}

// TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(complexConversion('name:Erwin,gender:male,age:21'));
// { name: 'Erwin', gender: 'male', age: '21' }

console.log(complexConversion('city:Surabaya,province:East Java'));
// { city: 'Surabaya', province: 'East Java' }

