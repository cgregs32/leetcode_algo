function minimumBribes(q) {
  var count = 0
  for(var i = 0; i < q.length; i++) {
    var orig = i + 1
    var movement = q[i] - orig
    if (movement > 2) { return "Too chaotic" }
    console.log(movement)
    if (movement > 0) { count += movement }
  }
  return count
}
[1,2,3,4,5,6,7,8]
[1,2,5,3,4,6,7,8]
[1,2,5,3,7,4,6,8]
[1,2,5,3,7,8,4,6]
var result = minimumBribes([1,2,5,3,7,8,6,4])
console.log(result)