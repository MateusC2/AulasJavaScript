const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Digite o primeiro numero: "));
let numero2 = parseFloat(prompt("Digite o segundo numero: "));
let numero3 = parseFloat(prompt("Digite o terceiro numero: "));
console.log("A média dos valores são: ",(numero1+numero2+numero3)/3);