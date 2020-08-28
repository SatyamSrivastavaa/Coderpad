// function findMinimumDistance(string, first, second) {
//   var startingFrom1 = 0;
//   var startingFrom2 = 0;
  
//   var index1 = 0;
//   var index2 = 0;
  
//   var min = Number.MAX_VALUE;
  
//   if(string === '' || first === '' || second === '') {
//     console.log('Invalid input string(s). Check conditions again.');
//     return;
//   }

//   if((first.length % 2) === 0)
//     var first_middle = (first.length/2)-1;
//   else
//     var first_middle = Math.floor(first.length/2);

//   if((second.length % 2) === 0)
//     var second_middle = (second.length/2)-1;
//   else
//     var second_middle = Math.floor(second.length/2);

//   while(true) {
//     index1 = string.indexOf(first,startingFrom1);

//     if(index1===-1)
//       break;
    
//     index1 = index1 + first_middle;
//     startingFrom1 = index1 + first.length;
    
//     index2=0;
//     startingFrom2=0;
    
//     while(true) {
//       index2 = string.indexOf(second,startingFrom2);
      
//       if(index2===-1)
//         break;
      
//       index2 = index2 + second_middle;
//       startingFrom2 = index2 + second.length;

//       min = Math.min(Math.abs(index2-index1),min);

//     }
//   }
  
//   if(min === Number.MAX_VALUE) {
//     console.log('Value not found in input String.');
//     return;
//   }
//   else
//     return min;
// }

// const string = 'ABC is XYZ. ABC and XYZ';
// const first = 'ABC';
// const second = 'XYZ';



// var min = findMinimumDistance(string, first, second);
// console.log(`The minimum distance is ${min}`);

function minDistanceBetweenWords(string, word1, word2) {
  if(string.length === 0) return -1;

  let minDistance = Infinity;
  let word1Mid = word1.length%2 === 0 ? Math.floor((word1.length-1)/2) : Math.floor((word1.length)/2);
  let word2Mid = word2.length%2 === 0 ? Math.floor((word2.length-1)/2) : Math.floor((word2.length)/2);

  let word1Pos = 0;
  while(true) {
      let index1 = string.indexOf(word1, word1Pos);

      if(index1 === -1) break;

      word1Pos = index1 + word1.length;
      index1 += word1Mid;

      let word2Pos = 0;
      while(true) {
          let index2 = string.indexOf(word2, word2Pos);
  
          if(index2 === -1) break;
  
          word2Pos = index2 + word2.length;
          index2 += word2Mid;
  
          minDistance = Math.min(minDistance, Math.abs(index1-index2));
      }
  }

  return minDistance;
}

const string = 'ABC isadsdasdasdad XYZ. and ABC andadsd XYZ';
const first = 'ABC';
const second = 'XYZ';



let min = minDistanceBetweenWords(string, first, second);
console.log(`The minimum distance is ${min}`);