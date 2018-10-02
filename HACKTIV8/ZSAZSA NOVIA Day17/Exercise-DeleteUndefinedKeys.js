function deleteUndefinedKeys (object) {
    // Your code here
    var obj = object
      if (obj.name === undefined){
          delete object.name
        }
      if (obj.age === undefined){
        delete object.age
      }
      if (obj.email === undefined){
        delete object.email
      }
    return obj
  }
  console.log(deleteUndefinedKeys({
    name: 'Dimitri',
    age: undefined,
    email: 'dimitri@mail.com'
  }));
  // { name: 'Dimitri', email: 'dimitri@mail.com' }
  
  console.log(deleteUndefinedKeys({
    name: undefined,
    age: undefined,
    email: undefined
  }));
  // {}