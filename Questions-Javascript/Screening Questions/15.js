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

// var numberWhosePowerIsTaken = 40;
// var calculatedNumberAfterPower = 1;

// var x = checkPower(calculatedNumberAfterPower,numberWhosePowerIsTaken);
// console.log(x);

function check(num1, num2) {
  if(num1 === 0 || num2 === 0) return false;
  if(num1 > num2) {
      return checkPower(num2, num1, num2*num2);
  }

  return checkPower(num1, num2, num1*num1);
}

function checkPower(n1, n2, prevValue) {
  if(n1 === 1 || n2 === 1) return true;

  if(prevValue === n2) return true;

  if(prevValue > n2) {
    if(n1 < 0 && n2 < 0) return checkPower(Math.abs(num1), Math.abs(num2));
    return false;
  } else return checkPower(n1, n2, n1*prevValue);

}

console.log(check(-8, -64));