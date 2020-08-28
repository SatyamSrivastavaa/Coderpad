function findDotProduct1(arrA, arrB) {
  var min = Math.min(arrA.length,arrB.length);
  var sum = 0;

  for(let i=0; i<min; i++) {
    sum = sum + (arrA[i]*arrB[i]);
  }
  return sum;
};

var arrA = [-6,5,6];      //-6 is x coordinate and 8 is the y coordinate
var arrB = [5,12];

var dotProduct = findDotProduct1(arrA, arrB);
console.log("Dot product using coordinates: " + dotProduct);
