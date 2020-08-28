function check(num1, num2) {
    if(num1 === 0 || num2 === 0) return false;
    if(num1 < 0 && num2 < 0) return check(Math.abs(num1), Math.abs(num2));
    if(num1 > num2) {
        return checkPower(num2, num1, num2*num2);
    }

    return checkPower(num1, num2, num1*num1);
}

function checkPower(n1, n2, prevValue) {
    if(n1 === 1 || n2 === 1) return true;

    if(prevValue === n2) return true;

    if(prevValue > n2) return false;
    else return checkPower(n1, n2, n1*prevValue);

}

console.log(check(-8, -64));