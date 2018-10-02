// function convert (data) {
//   // Your code here
//   var convert = [{
//     id: 0,
//     firstName: '',
//     lastName: '',
//     email: ''
//   }];
//   for (var a=0; a<data.length; a++){
//       convert.id= data[a][0];
//       convert.firstName= data[a][1];
//       convert.lastName= data[a][2];
//       convert.email= data[a][3];
//   }
//   return convert;
// }
// Kesalahan saya diatas
// kebenaran ada dibawah
function convert (data) {                 //membuat function
    // Your code here
    var array = [];                       //membuat variable array
    for (var a=0; a<data.length; a++){    //membuat looping
        var obj = {}                      //jika seperti ini maka setiap looping akan membuat objek
        obj.id= data[a][0];               //membuat keys bernama id dan diisi dengan ketentuan dari data
        obj.firstName= data[a][1];        //membuat keys bernama firstName dan diisi dengan ketentuan dari data
        obj.lastName= data[a][2];         //membuat keys bernama lastName dan diisi dengan ketentuan dari data
        obj.email= data[a][3];            //membuat keys bernama email dan diisi dengan ketentuan dari data
        array.push(obj);                  //mem-push array dengan nilai obj
    }
    return array;
  }

// TEST CASES
console.log(convert([
  [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
  [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
  { id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
*/

//jika ingin menggunakan 2 looping:
// var array = [];
// var keys =["id :","firstName :","lastName :","email :"]  //membuat array tambahan berisi 
//     for (var a=0; a<data.length; a++){
//         var obj = {}        
//         for (var b=0; b<keys.length; b++){               //membuat perulangan untuk memanggil nilai var keys
//         obj[keys[b]]= data[a][b];                        //menambahkan keys pada obj dan diisi dengan ketentuan dari data
//         }
//         array.push(obj);
//     }
//     return array;