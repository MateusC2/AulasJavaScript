const prompt = require('prompt-sync')();
lista = []
let tamanho = parseFloat(prompt("Digite o tamanho da lista: "));

for(let i = 0; i < tamanho; i ++){
    let num = parseFloat(prompt("Digite os numeros da lista: "));
    lista.push(num)
}
console.log(lista)