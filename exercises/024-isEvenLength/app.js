// Write your function here

const isEvenLength = (word) => {
    let len = word.length 
    if(len % 2 == 0){
        return true
    } else {
        return false
    }
}

var output = isEvenLength('wow');
console.log(output); // --> false