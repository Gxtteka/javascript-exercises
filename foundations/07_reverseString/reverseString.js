const reverseString = function(text) {
    let reverse_text = ''
    for (let i = 0; i < text.length; i++){
        reverse_text += text[text.length - i - 1]
    }
    return reverse_text
};

// Do not edit below this line
module.exports = reverseString;
