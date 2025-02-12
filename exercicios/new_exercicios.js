// 1. Exercício com if/else
// Descrição: Escreva um programa que peça ao usuário para digitar um número e diga se ele é positivo, negativo ou zero.

let numeroDigitado = -21

if (numeroDigitado ===0 ){
    console.log("O Número é Zero")
}else if(numeroDigitado<0){
    console.log("O Número é Negativo")
}else{
    console.log("O Número é Positivo")
}

// 2. Exercício com operador ternário
// Descrição: Verifique se uma pessoa pode votar com base na idade usando o operador ternário. A idade mínima para votar é 18 anos.

let idade = 18

let podeVotar = (idade>=18 ? "Sim, pode votar":"Não, não pode votar")
console.log(podeVotar)


// 3. Exercício com while
// Descrição: Crie um programa que mostre os números de 1 a 10 usando o loop while.

let num1=1
while(num1<11){
    console.log(num1)
    num1++
}


// 4. Exercício com do while
// Descrição: Peça ao usuário para digitar um número maior que 10. Caso ele digite um número menor ou igual a 10, o programa deve pedir novamente até que o número seja maior que 10.

let numExemplo = 11
do{
    if(numExemplo>10){
        console.log("Numero maior que 10")
        break
    }
    console.log("digite um numero maior que 10")
    break
}while(numExemplo<=10)

//     5. Exercício com função
// Descrição: Escreva uma função que receba dois números como parâmetros e retorne o maior deles.

function maiorNumero(a,b){
    if(a>b){
        return a
    }else{
        return b
    }
}

console.log(maiorNumero(110,20))

let numero=(a,b)=>{
    if(a>b){
        return a
    }else{
        return b
    }
}
console.log(numero(20,15))

