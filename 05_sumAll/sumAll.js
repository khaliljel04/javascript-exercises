const sumAll = function(first, second) {
    if (
        !Number.isInteger(first) ||
        !Number.isInteger(second) ||
        first <= 0 ||
        second <=0
    ){
        return 'ERROR';
    }
    return (Math.abs(first - second) + 1) / 2 * (first + second);
};

// Do not edit below this line
module.exports = sumAll;
