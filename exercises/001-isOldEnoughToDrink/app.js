function isOldEnoughToDrink(edad){
    if (edad > 20){
        return true
    } else {
        return false
    }
}

var edadSuficiente = isOldEnoughToDrink(40)
console.log(edadSuficiente)