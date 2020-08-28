// function secondSmallestInSortedRotatedArray(arr) {
//   var smallest = Number.MAX_VALUE;
//   var position;
  
//   if(arr.length < 2) {
//     console.log('There is no second smallest element in array');
//     return;
//   }
  
//   for(var i=0; i<arr.length; i++) {
//     if(smallest > arr[i]) {
//       smallest = arr[i];
//       position = i;
//     }
//   }
  
//   while(arr[position%arr.length]==arr[(position+1)%arr.length]) {
//     position++;
    
//     if(position > arr.length) {
//       console.log('All the elements in the array are same.');
//       return;
//     }
//   }
//   console.log(arr[(position+1)%arr.length]);
// }


// var arr = [-1,-1,0,0,0,0,1,1,1,2,3,4,-1,-1];

// secondSmallestInSortedRotatedArray(arr);


function kthSmallestInRotatedArray(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
      let mid = Math.floor((left + right)/2);

      if(arr[mid] > arr[arr.length-1]) {
          left = mid+1;
      } else {
          right = mid;
      }
  }

  let pos = right;

  while(k !== 1) {
      if(arr[pos] !== arr[pos + 1]){
          k--;
      }

      pos = (pos+1)%arr.length;
  }
  return arr[pos];
}

console.log(kthSmallestInRotatedArray([3,4,5,1, 1, 1,2] , 3))