function isOldEnoughToVote(age) {
  if (age > 17){
    return true
  } else {
    return false
  }
}

var votante = isOldEnoughToVote(30)

console.log(votante)