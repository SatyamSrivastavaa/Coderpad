// var set = new Set();
// var finalSubStrSize = 0;

// function longestSubstring(string) {
  
//   if(string.length === 0) {
//     console.log('You have provided an empty string.');
//     return null;
//   }
  
//   set.clear();
//   finalSubStrSize = 0;
        
//   // Have a boolean flag on each character's ascii value
//   var flag = [];
//   var j = 0;
  
//   var inputCharArr = string.split('');
  
//   for(let i=0; i<inputCharArr.length; i++) {
    
//     var c = inputCharArr[i];
    
//     if(flag[c]) {
//       extractSubString(inputCharArr,j,i);
//       for(let k=j; k<i; k++) {
//         if(inputCharArr[k] == c) {
//           j = k + 1;
//           break;
//         }
//         flag[inputCharArr[k]] = false;
//       }   
//     } 
//     else
//       flag[c] = true;
//   }
  
//   extractSubString(inputCharArr,j,inputCharArr.length);
//   return set;
// };

// function extractSubString(inputArr, start, end) {
//   var sb = '';
  
//   for(let i=start; i<end; i++)
//     sb = sb + inputArr[i];
        
//   if(sb.length > finalSubStrSize) {
//     finalSubStrSize = sb.length;
//     set.clear();
//     set.add(sb);
//   } 
//   else if(sb.length === finalSubStrSize)
//     set.add(sb);
         
//   return sb;
// }

// var x = longestSubstring('aaa');
// console.log(x);

function largestStringWithUniqueChars(string) {
  if(string.length === 0) return 0;
  let map = new Map;
  let maxLength = 0;

  let i = 0;

  for(let j = 0; j < string.length; j++) {
      if(map.has(string[j])) {
          i = Math.max(i, (map.get(string[j]) + 1));
      }

      map.set(string[j], j);
      maxLength = Math.max(maxLength, (j-i+1));
  }

  return maxLength;
}

console.log(largestStringWithUniqueChars("pwwkew"));