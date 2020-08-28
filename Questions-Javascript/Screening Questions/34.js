function longestWordsInDictionary(dictionaryArr, input) {

  var visitedArr = [];
  var flag;
  var x = [];
  
  for(let i=0; i<dictionaryArr.length; i++) {
    for(let l=0; l<input.length; l++) {
        visitedArr[l] = false;
    }
    
    for(let j=0; j<dictionaryArr[i].length; j++) {
      flag = false;
      
      for(let k=0; k<input.length; k++) {
        if(input[k] === dictionaryArr[i].charAt(j) && visitedArr[k] != true) {
          visitedArr[k] = true;
          flag = true;
          break;
        }
      }
      if(!flag)
        break;
      
      if(j === dictionaryArr[i].length-1)
        x.push(dictionaryArr[i]);
    }
  }
  
  var max = 0;
  
  for(let i=0; i<x.length; i++) {
    if(max < x[i].length)
      max = x[i].length;
  }
  
  for(var s of x) {
    if(s.length === max)
      console.log(s);
  }
}

var dictionaryArr = ['to','toettt','toest','doe','dog','god','dogs','book','banana'];
var x = longestWordsInDictionary(dictionaryArr, 'dtsetogttananbannnnbbbtero');