// Write your function here
function isSameLength(txt1, txt2){
    if (txt1.length == txt2.length){
        return true
    } else {
        return false
    }
}

var output = isSameLength('words', 'super');
console.log(output); // --> true