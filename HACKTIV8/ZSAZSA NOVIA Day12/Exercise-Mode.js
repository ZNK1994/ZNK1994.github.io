function mode(numbers) {
    var modeArr = []
    var hitungan = []
    var isiNumber = 0
    var maxIndex = 0
 
    for (var i = 0; i < numbers.length; i += 1) {
        isiNumber = numbers[i];
        hitungan[isiNumber] = (hitungan[isiNumber] || 0) + 1;
        if (hitungan[isiNumber] > maxIndex) {
            maxIndex = hitungan[isiNumber];
        }
    }
 
    for (i in hitungan)
        if (hitungan.hasOwnProperty(i)) {
            if (hitungan[i] === maxIndex) {
                modeArr.push(Number(i));
            }
        }
 
    return modeArr;
}

console.log(mode([ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ]))