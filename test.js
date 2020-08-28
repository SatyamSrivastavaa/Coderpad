// let objectAsMap = Object.create(null);
// let objectAsMap = new Map();

// // objectAsMap = 1;
// // objectAsMap[7] = 7;
// // objectAsMap[3] = 3;
// // objectAsMap[4] = 4;
// // objectAsMap[2] = 2;
// objectAsMap.set(1, 1);
// objectAsMap.set(7, 3);
// objectAsMap.set(7, 5);
// objectAsMap.set(2, 2);
// objectAsMap.set(6, 5);

// objectAsMap.set(7, objectAsMap.get(7) + 1);

// for(let o of objectAsMap){
//   console.log(o);
// }

// console.log(objectAsMap);

// console.log('asdfg'.split('').sort().join(''))

// function findMinimumDistance(string, first, second) {
//     var startingFrom1 = 0;
//     var startingFrom2 = 0;

//     var index1 = 0;
//     var index2 = 0;

//     var min = Number.MAX_VALUE;

//     if(string === '' || first === '' || second === '') {
//       console.log('Invalid input string(s). Check conditions again.');
//       return;
//     }

//     if((first.length % 2) === 0)
//       var first_middle = (first.length/2)-1;
//     else
//       var first_middle = Math.floor(first.length/2);

//     if((second.length % 2) === 0)
//       var second_middle = (second.length/2)-1;
//     else
//       var second_middle = Math.floor(second.length/2);

//     while(true) {
//       index1 = string.indexOf(first,startingFrom1);

//       if(index1===-1)
//         break;

//       index1 = index1 + first_middle;
//       startingFrom1 = index1 + first.length;

//       index2=0;
//       startingFrom2=0;

//       while(true) {
//         index2 = string.indexOf(second,startingFrom2);

//         if(index2===-1)
//           break;

//         index2 = index2 + second_middle;
//         startingFrom2 = index2 + second.length;

//         min = Math.min(Math.abs(index2-index1),min);

//       }
//     }

//     if(min === Number.MAX_VALUE) {
//       console.log('Value not found in input String.');
//       return;
//     }
//     else
//       return min;
//   }

//   const string = 'ABC is XYZ. ABC and XYZ';
//   const first = 'ABC';
//   const second = 'XYZ';

//   var min = findMinimumDistance(string, first, second);
//   console.log(`The minimum distance is ${min}`);

// const array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12],
// ]

// // console.log(array[0].length);

// function printSpiralArray(a, rs, cs, re, ce) {

//     let i = rs;
//     let j = cs;

//     while(j < re){
//         console.log(a[i][j]);
//         j++;
//     }
//     cs++;

//     while(i < ce){
//         console.log(a[i][j]);
//         i++;
//     }
//     re--;

//     while(j > rs) {
//         console.log(a[i][j]);
//         j--;
//     }
//     ce--;

//     while(i >= cs){
//         console.log(a[i][j]);
//         i--;
//     }
//     rs++;

//     if(re === rs && cs === ce){
//         console.log(a[rs][cs]);
//     } else {
//         printSpiralArray(a, rs, cs, re, ce);
//     }
//     //
//     console.log('*******', rs, ' ', re, ' ', cs, ' ', ce );
//     console.log('ij', i, ' ', j );
// }

// function callPrintSpiralArray(arr) {
//     const m = arr.length;
//     const n = arr[0].length;

//     let re = m-1;
//     let ce = n-1;
//     let rs = 0;
//     let cs = 0;

//     printSpiralArray(arr, rs, cs, re, ce);
// }

// callPrintSpiralArray(array)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function(nums1, nums2) {
//     if(nums1.length > nums2.length){
//         return findMedianSortedArrays(nums2, nums1);
//     }

//     let length1 = nums1.length;
//     let length2 = nums2.length;

//     let low = 0;
//     let high = length1;

//     while(low <= high){
//         let partition1 = parseInt((low + high)/2);
//         let partition2 = parseInt((length1 + length2 + 1)/2 - partition1);

//         console.log(partition1);
//         console.log(partition2);

//         let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
//         let minRight1 = partition1 === length1 ? +Infinity : nums1[partition1];
//         let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
//         let minRight2 = partition2 === length2 ? +Infinity : nums2[partition2];

//         console.log(maxLeft1);
//         console.log(maxLeft2);
//         console.log(minRight1);
//         console.log(minRight2);

//         if(maxLeft1 <= minRight2 && maxLeft2 <= minRight1){
//             if((length1 + length2)%2 === 0){
//                 console.log('maxLeft1, maxLeft2', maxLeft1, maxLeft2);
//                 console.log('minRight1, minRight2', minRight1, minRight2);
//                 let res=(Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2))/2;
//                 return res;
//             } else {
//                 console.log('maxLeft1, maxLeft2', maxLeft1, maxLeft2);
//                 let res = Math.max(maxLeft1, maxLeft2);
//                 return res;
//             }
//         } else if(maxLeft1 > minRight2){
//             high = partition1 - 1;
//         } else {
//             low = partition1 + 1;
//         }
//     }
// };

// console.log(findMedianSortedArrays([1,3], [2]))

// for(let x in {a:1, b:2}){
//     console.log(x)
// }

// let arr = "I AM A STRING";

// [arr[0], arr[3]] = [arr[3], arr[0]]

// console.log(arr.lastIndexOf('I'));
// for(let i = arr.length-1; i >=0; i--){
//     if(arr[i]==='I'){
//         console.log(i);
//         break;
//     }

// }

// function updateRoot(rootred) {
//     // if(root.value === undefined){
//         rootred = {}
//     // }
// }

// let root = {
//     value: 2
// };

// updateRoot(root);

// console.log(root)

/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     let waterDrops = 0;
//     let leftMax = [];
//     let rightMax = [];
//     let max=0;

//     for(let i=0; i<height.length ; i++) {
//         max = Math.max(max, height[i]);
//         leftMax.push(max);
//     }

//     max = 0;

//     for(let i=height.length-1; i>=0 ; i--) {
//         max = Math.max(max, height[i]);
//         rightMax.unshift(max);
//     }

//     for(let i=0; i<height.length ; i++) {
//         waterDrops += (Math.min(leftMax[i], rightMax[i]) - height[i]);
//     }

//     return waterDrops;
// };

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

// var groupAnagrams = function(strs) {
//     let map = new Map();

//     for(let i=0; i<strs.length; i++) {
//         let key = strs[i].split('').sort().join();

//         if(map.has(key)){
//             map.set(map.get(key).push(strs[i]));
//         } else {
//             map.set(key, [strs[i]])
//         }
//     }

//     let res = [];

//     for([key, values] of map){
//         res.push(values)
//     }
//     return res;

//     // return map.values();

// };

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

// function repeatingString(string) {

//     if(string.length === 0) {
//       console.log('Provide a valid input');
//       return null;
//     }

//     var max_length=0;
//     var cur_count = 1;
//     var last_repeating_index;

//     for(let i=0; i<string.length; i++) {

//       if(cur_count > max_length) {
//         max_length = cur_count;
//         last_repeating_index=i;
//       }

//       if(string[i] != string[i+1]) {
//         cur_count=1;
//       }
//       else {
//         cur_count++;
//       }
//     }

//     return [(last_repeating_index-max_length+1), max_length, string[last_repeating_index]];
//   }

//   var x = repeatingString('aaabbb');
//   console.log(x);

// var largestNumber = function(nums) {
//     let resArray = nums.map(num => num.toString());
//     resArray.sort((a,b) => {
//         let o1 = a+b;
//         let o2 = b+a;

//         return o2-o1;
//     });
//     console.log(resArray);
// };

// largestNumber([3,30,34,5,9]);

// SSSSSTTPPQ

// function testString(str) {
//     if(str === '') {
//         return ''
//     }
//     let res='';

//     count=1;
//     let i=0;
//     while(i < str.length) {
//         if(str[i] === str[i+1]) {
//             count++;
//         } else {
//             res = res + count + str[i];
//             count = 1;
//         }
//         i++;
//     }

//     return res;
// }

// console.log(testString('SSSSSTTPPQ'));

// function calcPrimeFactors(num) {
//     let res = [];

//     while(num % 2 === 0) {
//         res.push(2);
//         num /= 2;
//     }

//     for(let i = 3; i <= num; i += 2) {
//         while(num % i === 0) {
//             res.push(i);
//             num /= i;
//         }
//     }

//     return res;
// }

// console.log(calcPrimeFactors(315));

// function uniqueTupples(input, length) {
//     if(length <= 0) return [];

//     const uniqueSet = new Set();
//     let subString = '';
//     let i=0;

//     while(i<input.length) {
//         subString += input[i];

//         if(subString.length === length) {
//             uniqueSet.add(subString);
//             i = i - length + 2;
//             subString = '';
//         } else {
//             i++;
//         }
//     }

//     return uniqueSet;
// }

// console.log(uniqueTupples('abcd', 2));

// function longestWordsInDictionary(dictionaryArr, input) {

//     var visitedArr = [];
//     var flag;
//     var x = [];

//     for(let i=0; i<dictionaryArr.length; i++) {
//       for(let l=0; l<input.length; l++) {
//           visitedArr[l] = false;
//       }

//       for(let j=0; j<dictionaryArr[i].length; j++) {
//         flag = false;

//         for(let k=0; k<input.length; k++) {
//           if(input[k] === dictionaryArr[i].charAt(j) && visitedArr[k] != true) {
//             visitedArr[k] = true;
//             flag = true;
//             break;
//           }
//         }
//         if(!flag)
//           break;

//         if(j === dictionaryArr[i].length-1)
//           x.push(dictionaryArr[i]);
//       }
//     }

//     var max = 0;

//     for(let i=0; i<x.length; i++) {
//       if(max < x[i].length)
//         max = x[i].length;
//     }

//     console.log(x);
//     // for(var s of x) {
//     //   if(s.length === max)
//     //     console.log(s);
//     // }
//   }

//   var dictionaryArr = ['to','toettt','toest','doe','dog','god','dogs','book','banana'];
//   var x = longestWordsInDictionary(dictionaryArr, 'dtsetogttananbannnnbbbtero');

// function findMinimumDistance(string, first, second) {
//     var startingFrom1 = 0;
//     var startingFrom2 = 0;

//     var index1 = 0;
//     var index2 = 0;

//     var min = Number.MAX_VALUE;

//     if(string === '' || first === '' || second === '') {
//       console.log('Invalid input string(s). Check conditions again.');
//       return;
//     }

//     if((first.length % 2) === 0)
//       var first_middle = (first.length/2)-1;
//     else
//       var first_middle = Math.floor(first.length/2);

//     if((second.length % 2) === 0)
//       var second_middle = (second.length/2)-1;
//     else
//       var second_middle = Math.floor(second.length/2);

//     while(true) {
//       index1 = string.indexOf(first,startingFrom1);

//       if(index1===-1)
//         break;

//       startingFrom1 = index1 + first.length;
//       index1 = index1 + first_middle;

//       index2=0;
//       startingFrom2=0;

//       while(true) {
//         index2 = string.indexOf(second,startingFrom2);

//         if(index2===-1)
//           break;

//         startingFrom2 = index2 + second.length;
//         index2 = index2 + second_middle;
//         min = Math.min(Math.abs(index2-index1),min);
//       }
//     }

//     if(min === Number.MAX_VALUE) {
//       console.log('Value not found in input String.');
//       return;
//     }
//     else
//       return min;
//   }

// function findMinimumDistance(string, first, second) {
//     let minDistance = +Infinity;
//     let sIFirst = 0;

//     let firstMid = (first.length % 2) === 0 ? Math.floor((first.length-1)/2) : Math.floor(first.length/2);
//     let secondMid = (second.length % 2) === 0 ? Math.floor((second.length-1)/2) : Math.floor(second.length/2);

//     while(true) {
//         let index1 = string.indexOf(first, sIFirst);

//         if(index1 === -1) break;

//         sIFirst = index1 + first.length;
//         index1 += firstMid;

//         let sISecond = 0;
//         while(true) {
//             let index2 = string.indexOf(second, sISecond);

//             if(index2 === -1) break;

//             sISecond = index2 + second.length;
//             index2 += secondMid;

//             minDistance = Math.min(minDistance, Math.abs(index2-index1));
//         }
//     }

//     if(minDistance === +Infinity) return -1;

//     return minDistance;
// }

//   const string = 'ABC XYZ. ABC and XYZ';
//   const first = 'ABC';
//   const second = 'XYZ';

//   var min = findMinimumDistance(string, first, second);
//   console.log(`The minimum distance is ${min}`);

// function checkPower(a,b) {
//   var absoluteA = Math.abs(a);
//   var absoluteB = Math.abs(b);

//   if(absoluteB===1)
//     return (absoluteA===1)?true:false;

//   else if(b===0)
//     return (a===0)?true:false;

//   else if(absoluteA>=1 && absoluteB>=1) {
//     var min = b;
//     while(absoluteB < absoluteA) {
//       b = b * min;
//       absoluteB = Math.abs(b);

//       if(b === a)
//         return true;
//     }
//     return false;
//   }

//   else if(absoluteA>0 && absoluteA<1 && absoluteB>0 && absoluteB<1) {
//     var min = b;
//     while(absoluteB >= absoluteA) {
//       b = b * min;

//       //Converting decimal upto 2 places
//       b = +(Math.round(b + "e+6")  + "e-6");
//       absoluteB = Math.abs(b);
//       if(b === a)
//         return true;
//     }
//     return false;
//   }
//   else if(absoluteB>0 && absoluteB<1 && absoluteA>=1)
//     return false;
// };

// var numberWhosePowerIsTaken = 2;
// var calculatedNumberAfterPower = 4;

// var x = checkPower(calculatedNumberAfterPower,numberWhosePowerIsTaken);
// console.log(x);

// function eliminateMidCopies(str) {
//     let mid = (str.length+1)/2;
//     let futRight = str.substring(0, mid);
//     let futLeft = str.substring(mid);

//     console.log('str: ' , str)
//     console.log('futLeft + futRight: ', futLeft, futRight);

//     let leftEnd = futLeft.length-1;
//     let rightStart = 0;
//     console.log('futLeft + futRight: ', futLeft.substring(0, leftEnd+1), futRight.substring(rightStart));

//     while(true) {
//         if(leftEnd>=0 && rightStart < futRight.length && futLeft[leftEnd] === futRight[rightStart]) {
//             let c = futLeft[leftEnd];

//             while(futLeft[leftEnd] === c) {
//                 leftEnd--;
//             }

//             while(futRight[rightStart] === c) {
//                 rightStart++;
//             }
//         } else {
//             break;
//         }
//     }

//     console.log('futLeft + futRight: ', futLeft.substring(0, leftEnd+1), futRight.substring(rightStart));

//     return futLeft.substring(0, leftEnd+1).length + futRight.substring(rightStart).length;
// }

// // console.log(eliminateMidCopies('aasdfwersaa'));
// console.log(eliminateMidCopies('sdaopadpjaa'));

// function memoize(func) {
//   var memo = {};
//   var slice = Array.prototype.slice;

//   return function () {
//     var args = slice.call(arguments).map(a => typeof a === 'object' ? JSON.stringify(a) : a);
    
//     if (args in memo) {
//       console.log(memo)
//       return memo[args];
//     } else return (memo[args] = func.apply(this, args));
//   };
// }

// function add(x, y) {
//   return x + y;
// }

// const fun = memoize(add);
// console.log(fun(1, 2, {a:1}));


const obj = {
  a: 1,
  getA: function() {
    return this.a
  }
}

console.log(obj.getA())