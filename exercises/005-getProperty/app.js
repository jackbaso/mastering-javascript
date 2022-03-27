function getProperty(obj, key) {
  // your code here
  let valor = obj[key]
  return (valor);
}

var car = {
  model: 'Toyota'
};
var output = getProperty(car, 'model');
console.log(output); // --> 'Toyota'