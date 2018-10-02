var name = "Enkha", age = 17, money= 1000000; //deklarasi variable
var juice =50000, anggur=300000, sisa_uang=0; //deklarasi variable, sisa_uang dibuat (0) artinya berisi angka, ubah dengan ("") jika berisi string

if(name != "Enkha"){ // kondisi jika nama bukan Enkha
  console.log("Anda tidak boleh masuk"); // mencetak 
} else if (name === "Enkha") { // kondisi nama adalah Enkha, dibawahnya terdapat kondisi anak
  if(age<=17 && money>=300000){ // kondisi var age bernilai samadenganlebihbesardari 17 dan var money lebihbesarsamadengan 300K 
    sisa_uang= money-juice; // perhitungan sisa uang
    console.log("Anda bisa pesan minum juice. Sisa uang anda : "+sisa_uang); //mencetak ... dan sisa uang
  }else{
    sisa_uang= money-anggur; // perhitungan sisa uang
    console.log("Anda bisa pesan minum anggur. Sisa uang anda : "+sisa_uang); //mencetak ... dan sisa uang
  }
} else { //berisi kondisi terakhir
    console.log("Uang tidak cukup. Anda harus pulang");
  }