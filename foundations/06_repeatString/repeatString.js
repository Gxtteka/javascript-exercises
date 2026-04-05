const repeatString = function(text, n) {

    if (n < 0) {return "ERROR"}
    let i, sum = ''
    for (i = 0; i < n; i++){
        sum += text
    }
    return sum
};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
