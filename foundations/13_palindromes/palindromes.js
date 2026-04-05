const palindromes = function (text) {
    char_for_delete = [',', ' ', '-', '.', '!', '?']
    text_without_marks = []
    text_without_marks_reverse = []
    for (let char of text){
        if (!char_for_delete.includes(char)){
            text_without_marks.push(char)
            text_without_marks_reverse.unshift(char)
        } 
    }
    text_without_marks = text_without_marks.join('')
    text_without_marks_reverse = text_without_marks_reverse.join('')

    text_without_marks = text_without_marks.toLowerCase()
    text_without_marks_reverse = text_without_marks_reverse.toLowerCase()


    if (text_without_marks == text_without_marks_reverse){
        return true
    }else{
        return false
    }
};


// Do not edit below this line
module.exports = palindromes;
