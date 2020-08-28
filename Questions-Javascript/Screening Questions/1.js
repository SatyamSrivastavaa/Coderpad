// function printSecondSmallestElement(arr) {
//   var smallest = Number.MAX_VALUE;
//   var second_smallest = Number.MAX_VALUE;
  
//   if (arr.length < 2) {
//     console.log('Invalid Input');
//     return;
//   }
  
//   for(let i=0; i<arr.length; i++) {
    
//     if(arr[i] < smallest) {
//       second_smallest = smallest;
//       smallest = arr[i];
//     }
//     else if(arr[i] < second_smallest && arr[i] != smallest)
//       second_smallest = arr[i];
//   }
  
//   if(second_smallest == Number.MAX_VALUE)
//     console.log('The array contains just one type of element in it.');
//   else
//     console.log(`The second smallest element is ${second_smallest}`);
// }

// var arr = [2,2,2];

// printSecondSmallestElement(arr);

function kthSmallest(arr, k) {
  if(arr.length === 0) return 0;
  if(arr.length < k) return arr[0];

  let res = [];

  for(let i=1; i<=k; i++) {
      let min = Infinity;
      for(let j=0; j<arr.length; j++) {
          if(!(res.includes(arr[j])) && arr[j] < min) {
              min = arr[j];
          }
      }
      res.push(min);
  }
  console.log(res)
  return res[k-1];
}

console.log(kthSmallest([3, 2, 1, 9, 5,4, 8], 5));