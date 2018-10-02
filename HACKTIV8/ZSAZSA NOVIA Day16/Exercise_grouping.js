function grouping (scores) {
  // Your code here
  var group = {pass:[], fail:[] };
  for (var a=0; a<scores.length; a++){
      if (scores[a]<75){
        group.fail.push(scores[a]);
      }  
      if (scores[a]>=75){
        group.pass.push(scores[a]);
      }
  }
  return group;
}

console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
// { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] }

console.log(grouping([]));
// { pass: [], fail: [] }