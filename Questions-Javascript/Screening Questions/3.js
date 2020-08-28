// var arr = ['dog','god','log','cat','tac'];
// var l = [];
// var m = new Map();

// for(var i=0; i<arr.length; i++) {
//   var source = arr[i].split('').sort().join('');
  
//   if(m.has(source) === false) {
//     l = [];
//     l.push(arr[i])
//     m.set(source, l);
//   }
//   else
//   {
//       m.get(source).push(arr[i]); 
//   }
  
// }

// for (var value of m.values()) {
//   console.log(value);
// }

var groupAnagrams = function(strs) {
    let map = new Map();
    
    for(let i=0; i<strs.length; i++) {
        let key = strs[i].split('').sort().join();
        
        if(map.has(key)){
            map.get(key).push(strs[i]);
        } else {
            map.set(key, [strs[i]])
        }
    }
    
    let res = [];
    
    for(let values of map.values()){
        if(values)
            res.push(values)
    }
    console.log(map.values())
    return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));