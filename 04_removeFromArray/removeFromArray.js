const removeFromArray = function(arr) {
    const elements = Array.from(arguments).slice(1);
    for (const element of elements) {
        if (!arr.includes(element)) continue;
        arr.splice(arr.indexOf(element), 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
