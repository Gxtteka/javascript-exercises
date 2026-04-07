const fibonacci = function(number) {
    if (number < 0) return "OOPS"
    if (number == 0) return 0
    if (number == 1 || number == 2) return 1
    let penalt_item = 1
    let last_item = 1
    let curr_item = 0
    for (let i = 2; i < number; i++){
        curr_item = penalt_item + last_item
        penalt_item = last_item
        last_item = curr_item
    }
    return curr_item
};;

console.log(fibonacci(6))

// Do not edit below this line
module.exports = fibonacci;
