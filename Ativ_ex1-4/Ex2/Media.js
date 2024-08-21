const prompt = require('prompt-sync')();

let nota = parseFloat(prompt("Digite a nota do aluno: "));

if (nota < 0){
    console.log("Escreva uma nota de 0 a 10!!!");
}
else{
    if(nota > -1 && nota < 4){
    console.log("O aluno esta reprovado!!");
}
else if(nota < 6){
    console.log("O aluno esta de recuperação!!");
}
else if(nota >= 6 && nota < 11){
    console.log("O aluno esta aprovado!!");
}
}