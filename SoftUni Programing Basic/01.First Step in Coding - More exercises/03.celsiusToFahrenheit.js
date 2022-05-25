function temperatureConvertor(input){
const celsius = Number (input[0]);
const fahrenheit = (celsius * 1.8) + 32;
console.log (fahrenheit.toFixed(2));
}
temperatureConvertor(["1"])