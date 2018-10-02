var j = 0
function countLetters(word, letter, i = word.length, tampung=0) {
  var arr = word.split('');
  if(i === 0) {
    console.log(tampung)
    j=0
    return tampung
  } 
  if (arr[j] === letter) {
    tampung++;
  } 
    j++;
    countLetters(word, letter, i-1, tampung);
}

// TEST CASES
console.log(countLetters('12104123', '1'));  // 3
console.log(countLetters('the quick brown fox', 'o')); // 2
console.log(countLetters('lorem ipsum', 'a')); // 0
console.log(countLetters('hahaha', 'h')); // 3