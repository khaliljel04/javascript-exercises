const caesar = function(phrase, key) {
    key %= 26;
    if (key < 0) key += 26;
    phrase = phrase.split('');
    for (let i = 0; i < phrase.length; i++) {
        if (/[a-z]/.test(phrase[i])) {
            phrase[i] = String.fromCharCode('a'.charCodeAt() + (phrase[i].charCodeAt() - 'a'.charCodeAt() + key) % 26);
        }
        if (/[A-Z]/.test(phrase[i])) {
            phrase[i] = String.fromCharCode('A'.charCodeAt() + (phrase[i].charCodeAt() - 'A'.charCodeAt() + key) % 26);
        }
    }
    return phrase.join('');
};

// Do not edit below this line
module.exports = caesar;
