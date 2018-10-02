function threeStepsAB (text){
	//Your code here
	var hasil = text.search(/(a...b)|(b...a)/g)
	if ( hasil >= 0)     hasil = true;
    if ( hasil < 0)     hasil = false;
    
return hasil;
}

//TEXT CASES
console.log(threeStepsAB('lane borrowed'));
console.log(threeStepsAB('i am sick'));
console.log(threeStepsAB('you are boring'));
console.log(threeStepsAB('barbarian'));
console.log(threeStepsAB('bacon and meet'));