var angka1 = 5, angka2 = 2, angka3 = 8, angka4 = 9;
var angka5 = 12, angka6 = 18, angka7 = 131;

if (angka1 % 2 != 0 && angka1 % 3 != 0){ // variable tidak habis dibagi 2, dan tidak habis dibagi 3
  console.log("SALAH");
}else if (angka1 % 2 == 0){ // variable habis dibagi 2
  console.log("HACK");
}else if (angka1 % 3 == 0){ // variable habis dibagi 3
  console.log("FOX");
}else {      // kondisi terakhir berisi=>> if(angka1 % 2 = 0 && angka1 % 3 = 0){
  console.log("HACKFOX");
}
// kodingan diatas adalah longhand conditional

// kodingan dibawah adalah shorthand conditional dari kodingan sebelumnya
var hasil = angka4 % 2 !== 0 || angka3 % 3 !== 0 ? "SALAH" : angka3 % 2 == 0 ? "HACK" : angka3 % 3 == 0 ? "FOX" : "HACKFOX";
console.log(hasil);