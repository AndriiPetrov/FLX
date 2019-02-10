function reverseNumber(num) {
    let reverse = 0;
    let lastDigit;
    
    while(num !== 0) {
        lastDigit = num % 10;
        reverse = (reverse * 10) + lastDigit;
        num = Math.trunc(num / 10);
    }
    
    return reverse;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
