var peakIndexInMountainArray = function(A) {
  var i = 0;
  while (A[i] < A[i+1]) {
      i++
  }
  return i
};


console.log(peakIndexInMountainArray([0,1,0]))