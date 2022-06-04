const removeFromArray = function(array) {
    newArray = array;
    for (let i = 1; i <= arguments.length - 1; i++) {
        let index = newArray.indexOf(arguments[i]);
        if (index !== -1) {
            newArray.splice(index, 1);
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
