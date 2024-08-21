const prompt = require('prompt-sync')();
let celcius = parseFloat(prompt("Digite a temperatura em graus Celcius para converter em Fahrenheit: "));

fahren = ((celcius*9/5)+32)

console.log(fahren,"Fahrenheit")