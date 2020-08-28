/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let resArray = nums.map(num => num.toString()).sort((a,b) => {
        let o1 = a+b;
        let o2 = b+a;

        return o2-o1;
    });
    
    if(resArray[0] === '0') return '0';
    
    let res = '';
    
    resArray.forEach(num => {res += num});
    
    return res;
};