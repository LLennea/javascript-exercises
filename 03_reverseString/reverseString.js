const reverseString = function(string) {
    let reversedString = '';
    for (let i = 1; i <= string.length; i++) {
        reversedString = reversedString+string.substr(-i, 1);
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
