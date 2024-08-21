//npm i
const prompt = require('prompt-sync')();
let num1 = parseFloat(prompt("Digite um numero: "));

function par(num) {
    if (num % 2 === 0) {
        return false
    }
return true
}

//Analise do numero 1
if(par(num1)){
    console.log("Impar")
}
else{
    console.log("Par")
}