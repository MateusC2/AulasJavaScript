let number = [1,2,3,4,5,6,7,8,9,11,12,32]

//Estrutura de repetição usando forEach
number.forEach(num => {
    if (num%2 === 0){
        console.log("O numero ",num," é par")
    }
    else{
        console.log("O numero ",num," é impar")
    }
    
});
