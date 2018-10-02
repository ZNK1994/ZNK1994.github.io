function csvToObject (text) {
  // Your code here
  var obj= {}
  var array = text.split(',');
  var keys = ['name','email', 'gender']
  for (var a=0; a<array.length;a++){
    obj[keys[a]] = array[a]
  }
  return obj;
}

// TEST CASES
console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
// { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }

console.log(csvToObject('Icha,icha@mail.com,female'));
// { name: 'Icha', email: 'icha@mail.com', gender: 'female' }

console.log(csvToObject('Dhani,dhani@mail.com,male'));
// { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }