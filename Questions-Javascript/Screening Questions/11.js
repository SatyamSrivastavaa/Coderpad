function repeatingString(string) {
  
  if(string.length === 0) {
    console.log('Provide a valid input');
    return null;
  }
  
  var max_length=0;
  var cur_count = 1;
  var last_repeating_index;
  
  for(let i=0; i<string.length; i++) {
    
    if(cur_count > max_length) {
      max_length = cur_count;
      last_repeating_index=i;
    }
    
    if(string.charAt(i) != string.charAt(i+1)) {
      cur_count=1;
    }
    else {
      cur_count++;
    } 
  }
  
  return [(last_repeating_index-max_length+1), max_length, string[last_repeating_index]];
}

var x = repeatingString('aaabbb');
console.log(x);