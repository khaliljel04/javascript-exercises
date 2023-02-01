const palindromes = function (phrase) {
    phrase = phrase.toLowerCase();
    phrase = phrase.split('')
    let i = 0;
    while (i < phrase.length) {
        if (/^[a-z]+$/.test(phrase[i])) {
            i++;
            continue;
        }
        phrase.splice(i,1);
    }
    return (phrase.join('') === phrase.reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
