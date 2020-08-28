/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s == null || s.length < 1) return '';
    
    let start = 0;
    let end = 0;
    for(let i=0; i < s.length; i++) {
        let odd = expandAroundCenter(s, i, i);
        let even = expandAroundCenter(s, i, i+1);
        
        let maxLength = Math.max(odd, even);
        
        if(maxLength > (end-start)){
            start = i-Math.floor((maxLength-1)/2);
            end = i+Math.floor(maxLength/2);
        }
    }
    
    return s.substring(start, end+1);
};

var expandAroundCenter = function(s, l, r){
    let left = l;
    let right = r;
    
    while(left >= 0 && right < s.length && (s[left] === s[right])) {
        left--;
        right++;
    }
    
    return right-left-1;
}