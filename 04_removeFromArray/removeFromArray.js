const removeFromArray = function(...args) {
    /**for (let i = 1; i <= arguments.length - 1; i++) {
        let index = newArray.indexOf(arguments[i]);
        if (index !== -1) {
            newArray.splice(index, 1);
        }
    }
    return newArray **/
    const array = args[0]
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
