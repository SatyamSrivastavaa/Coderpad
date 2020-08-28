function pascalTriangle(totalRows) {
  var result = [];
  
  result[0] = [1];
  result[1] = [1,1];
  
  for(var i=2; i<totalRows; i++) {
      result[i] = [1];
      
      for (var j=1; j<=i-1; j++){
        result[i][j] = result[i-1][j-1] + result[i-1][j];
        result[i].push(1);
      }
  }
  return result;
}

function input(a,b) {
  //Pascal Triangle returns an array
  return pascalTriangle(a)[a-1][b-1];
}

var row = 5;
var positionOfElement = 2;
var x = input(row, positionOfElement);
console.log(x);