const fibonacci = function(num) {
    num = +num;
    if (num < 1) {
        return 'OOPS'
    }
    let currNum = 1;
    let prevNum = 0;
    let nextNum = 0;
    while (num > 1) {
        nextNum = currNum + prevNum;
        prevNum = currNum;
        currNum = nextNum;
        num--;
    };
    return currNum
};

// Do not edit below this line
module.exports = fibonacci;
