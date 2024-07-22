const num1 = 3
const num2 = 4
const num3 = 5

console.log("Numeros que serão verificados: ",num1,num2,num3)
//Analise do numero 1
if(par(num1)){
    console.log("Impar")
}
else{
    console.log("Par")
}
//Analise do numero 2
if(par(num2)){
    console.log("Impar")
}
else{
    console.log("Par")
}
//Analise do numero 3
if(par(num3)){
    console.log("Impar")
}
else{
    console.log("Par")
}

function par(num) {
        if (num % 2 === 0) {
            return false
        }
    return true
}