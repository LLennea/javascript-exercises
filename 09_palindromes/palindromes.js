const palindromes = function (str) {
    str = str.replace(/[^\w\s\']|_/g, "")
             .replace(/\s+/g, "")
             .toUpperCase();
    return str === str.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
