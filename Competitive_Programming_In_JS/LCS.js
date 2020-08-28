// Naive Approach O(2*n) time complexity

function lcs(string1, string2, m, n) {
    if(m===0 || n===0) return 0;
    if(string1[m-1] === string2[n-1]) return 1+lcs(string1, string2, m-1, n-1);
    else return Math.max(
        lcs(string1, string2, m-1, n),
        lcs(string1, string2, m, n-1)
    )
}

// DP Approach(Bottom-Up) - Tabulated Implementation O(m*n) Time Complexity

function lcsDP(string1, string2, m, n) {
    let table = new Array(m+1);

    for(let i=0; i<=m; i++) {
        table[i] = new Array(n+1).fill(0);

        for(let j=0; j<=n; j++) {
            if(i === 0 || j === 0) {
                table[i][j] = 0;
            } else if(string1[i-1] === string2[j-1]) {
                table[i][j] = 1 + table[i-1][j-1];
            } else {
                table[i][j] = Math.max(table[i-1][j], table[i][j-1]);
            }
        }
    }

    return table[m][n];
}

let s1 = "AGGTAB"; 
let s2 = "GXTXAYB";
console.log(lcsDP(s1, s2, s1.length, s2.length));
