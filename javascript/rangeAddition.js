// var maxCount = function(m, n, ops) {
//     return Array(m).fill(0).map(function(){ return Array(n).fill(0)})
// };


// console.log(maxCount(3,4, [[2,2],[3,3]]))


var updateClickCount=(function(){
var counter=0;
console.log(counter)
return function(){
++counter;
// do something with counter
}
})();

console.log(updateClickCount())