const sumAll = function(number_1, number_2) {

    if (!Number.isInteger(number_1) || !Number.isInteger(number_2)) return "ERROR"

    if (number_1 < 0 || number_2 < 0) return "ERROR"


    if (number_1 > number_2) {
        let number = number_1
        number_1 = number_2
        number_2 = number
    }

    let sum = 0

    for (let i = number_1; i <= number_2; i++){
        sum += i
    }

    return sum
};

console.log(sumAll(4, 1))

// Do not edit below this line
module.exports = sumAll;
