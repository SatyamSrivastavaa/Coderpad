function checkArmstrongNumber(number){
  var str = number.toString();
  var sum = 0;
  
  for(let i=0; i<str.length; i++)
    sum = sum + Math.pow((+str.charAt(i)),3);
  
  if(sum === number)
    return true;
  else
    return false;
}

var x = checkArmstrongNumber(407);
console.log(x);