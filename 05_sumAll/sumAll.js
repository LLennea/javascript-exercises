const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0) {
        return 'ERROR'
    } else if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return 'ERROR'
    }
    let sum = 0;
    if (numOne < numTwo) {
        for (let i = numOne; i <= numTwo; i++) {
            sum += i;
        }
    } else {
        for (let i = numTwo; i <= numOne; i++) {
            sum += i;
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
