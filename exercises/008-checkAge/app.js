function checkAge(name, age) {
  // your code here
  if (age > 20){
    return "Welcome, "+name+"!"
  } else {
    return "Go home, "+name+"!"
  }
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'