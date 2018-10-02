function isArithmeticProgression(numbers) {
  // Your code here
  var selisih=[];                                       //buat array selisih untuk bandingin selisih antara angka sesudah dan sebelum pada array numbers
  var benar=0;                                          //buat var benar yang bakal dibandingin dengan array selisih
  if(numbers[0]<numbers[1]){                            // jika kondisi numbers ke2 lebih besar dari numbers ke1
    for(var a=0; a<(numbers.length-1); a++){            //perulangan sampai jumlah array numbers dikurangi 1
      selisih +=numbers[a+1]-numbers[a];                //menghitung selisih antara nilai array sesudah dan sebelum
      if(selisih.length>1&&selisih[a]===selisih[a-1]){  //jika panjang array selisih lbih dri 1 dan nilai array selisih saat ini sama dengan nilai array selisih dikurangi-1
        benar +=1;                                      //nilai benar bertambah 1
      }
    }
    return benar===(selisih.length-1);                  //return logika jika var benar sejumlah array selisih dikurangi 1
  }
}

// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false