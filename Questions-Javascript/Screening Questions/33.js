// function findUniqueSubstrings(input,length = 1) {
//   var l = [];
//   var arr = [];
//   var str = '';
//   var i=0;
  
//   if(input.length === 0) {
//     console.log('Not a valid input');
//     return null;
//   }
  
//   while(i<input.length) {
//     if(str.length < length) {
//       str = str + input.charAt(i);
//       l.push(str);
//       i++;
//     }
//     else if(str.length === length) {
//       str = '';
//       i = i-(length-1);
//     }
//   }
  
//   for(let i=0; i<l.length; i++) {
//     if(l[i].length === length)
//       arr.push(l[i]);
//   }
  
//   var uniqueArr = arr.filter(function(item, pos) {
//     return arr.indexOf(item) == pos;
// })
//   return uniqueArr;   
// }

// var x = findUniqueSubstrings('abcabcd', 2);
// console.log(`The unique substrings are: ${x}`);

function uniqueTupples(input, length) {
  if(length <= 0) return [];

  const uniqueSet = new Set();
  let subString = '';
  let i=0;

  while(i<input.length) {
      subString += input[i];

      if(subString.length === length) {
          uniqueSet.add(subString);
          i = i - length + 2;
          subString = '';
      } else {
          i++;
      }
  }

  return uniqueSet;
}

console.log(uniqueTupples('abcd', 2));