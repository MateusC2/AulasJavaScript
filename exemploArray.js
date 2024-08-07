//criando variavel para o array
let numeros = [4,60,14,9,100,1,82,7,5,11];

for(let i = 0; i < numeros.length; i ++){
    let num = numeros[i]
    if (num % 2 === 0){
        //Par
        console.log("O numero ",num," é par")
    }
    else {
        //Impar
        console.log("O numero ",num," é impar")
    }

}
