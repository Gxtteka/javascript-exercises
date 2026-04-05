

// MY FIRST SOLUTION



// const removeFromArray = function(arr, ...theArgs) {
//     let removelist = []
//     for( let i = 0;  i < theArgs.length ; i++){
//         for(let j = 0; j < arr.length; j++){
//             if (arr[j] === theArgs[i]){
//                 removelist.push(j)
//             }
//         }
//         for (let index = removelist.length-1; index >= 0; index-- ){
//             arr.splice(removelist[index], 1)
//         }
//         removelist = []
//     }
//     return arr
// };



// SECOND SOLUTION

const removeFromArray = function(arr, ...theArgs) {
    remove_arr = []

    arr.forEach(element => {
        if (!theArgs.includes(element)) remove_arr.push(element) 
    });
    return remove_arr
}





// Do not edit below this line
module.exports = removeFromArray;
