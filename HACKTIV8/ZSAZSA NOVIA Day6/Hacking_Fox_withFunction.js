function hackFox(num) {
  return (num % 2 === 0 && num % 3 === 0) ? 'HACKFOX':
    (num % 3 === 0) ? 'FOX':
    (num % 2 === 0) ? 'HACK':
    false;
}

console.log(hackFox(5)); // "SALAH"
console.log(hackFox(2)); // "HACK"
console.log(hackFox(8)); // "HACK"
console.log(hackFox(9)); // "FOX"
console.log(hackFox(12)); // "HACKFOX"
console.log(hackFox(18)); // "HACKFOX"
console.log(hackFox(131)); // "SALAH"