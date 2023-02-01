const fibonacci = function(num) {
    num = +num;
    if (num < 0) return 'OOPS';
    let a = 1;
    let b = 1;
    for (let i = 2; i < num; i++) {
        [a, b] = [b, a+b];
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
