function addingTwoFractions(n1,d1,n2,d2) {
  
  if(d1 === 0 || d2 === 0) {
    console.log('Denominator cannot be zero.');
    return;
  }
  
  var n_final = n1*d2 + n2*d1;
  var d_final = d1*d2;
  
  var hcf = function hcf(a,b){
    return b ? hcf(b, a%b) : a;
  };
  
  hcf = hcf(n_final,d_final);
  
  return `${n_final/hcf}/${d_final/hcf}`;
}

var x = addingTwoFractions(3,2,0,2);
console.log(x);