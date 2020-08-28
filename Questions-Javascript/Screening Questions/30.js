function mostRepeatedIP(input) {
  var arrIP = [];
  for(let i=0; i<input.length; i++) {
    var x = input[i].split('-');
    arrIP.push(x[0]);
  }
  
  var counts = {};
  arrIP.forEach(function(x) { 
    counts[x] = (counts[x] || 0)+1; 
  });

  let max = 0;
  let result_key = '';
  
  for(const key in counts) {
    if(max<counts[key]) {
      max = counts[key];
      result_key = key;
    }
  }
  console.log(`Maximum frequency is ${max} for ${result_key}`);
}

var input = [
  "10.0.0.1-frank [10/dec/17 10:14:27]", 
  "10.0.0.1-frank [10/dec/17 10:14:28]",
  "10.0.0.2-nancy [10/dec/17 10:14:28]", 
  "10.0.0.1-frank [10/dec/17 10:14:27]",
  "10.0.0.2-nancy [10/dec/17 10:14:28]", 
  "10.0.0.2-nancy [10/dec/17 10:14:28]", 
  "10.0.0.2-nancy [10/dec/17 10:14:28]", 
  "10.0.0.2-nancy [10/dec/17 10:14:28]"
]
var x = mostRepeatedIP(input);