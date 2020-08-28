let derivative = (ce, x) => {
  return ce * ce - x;
}
  
let firstderivative = (ce) => {
  return 2 * ce;
}
  
function findSq(x) {

  let temp = 0;
  let ce = 1;
  while(x !== Math.floor(temp)) {
    ce = ce -  derivative(ce,x)/firstderivative(ce);
    temp = ce * ce;
  }
  
  console.log(ce);
}

findSq(16)