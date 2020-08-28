// function repeatingString(string) {
//   var str='';
//   var cur_count = 1;
  
//   if(string.length === 0) {
//     console.log('You have provided an empty string.');
//     return null;
//   }

//   for(let i=0; i<string.length; i++) {
     
//     if(isNaN(parseInt(string.charAt(i),10)) === false) {
//       console.log('String should only contain letters.');
//       return null;
//     }
    
//     if(string.charAt(i) != string.charAt(i+1)) {
//       str=str+cur_count+string.charAt(i);
//       cur_count=1;  
//     }
//     else {
//       cur_count++;
//     } 
//   }
//   return str;
// }

// var x = repeatingString('s345s');
// console.log(x);

function testString(str) {
  if(str === '') {
      return ''
  }
  let res='';

  count=1;
  let i=0;
  while(i < str.length) {
      if(str[i] === str[i+1]) {
          count++;
      } else {
          res = res + count + str[i];
          count = 1;
      }
      i++;
  }

  return res;
}

console.log(testString('SSSSSTTPPQ'));