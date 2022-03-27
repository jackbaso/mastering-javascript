// Write your function here
const isOddLength = (word) => {
    let len = word.length
    if(len % 2 != 0){
        return true
    } else {
        return false 
    }
}

var output = isOddLength('special');
console.log(output); // --> true