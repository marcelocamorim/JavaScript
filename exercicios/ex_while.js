// 1. Contar de 1 a 10
// Escreva um programa que imprime os números de 1 a 10 usando while.

let num=0
while(num<10){
    console.log(num)
    num++
}


// 2. Contagem Regressiva de 10 a 1
// Modifique o código anterior para contar de 10 até 1.

let a=10
while(a>0){
    console.log(a)
    a--
}

// 4. Somar Números de 1 a 100
// Use while para somar todos os números de 1 a 100 e exibir o resultado.

let i=1
let soma=0

while(i<100){
    soma+=i
    i++
}

console.log(soma)

// 5. Imprimir Apenas Números Pares de 1 a 20
// Use while para exibir apenas os números pares de 1 a 20.

let q=0
while(q<=20){
    console.log(q)
    q+=2
}

// 7. Verificar se um Número é Primo
// Use while para verificar se um número é primo.


let p=7
let inicio=2
let ehPrimo= true


while(inicio<p){
    if(p%inicio===0){
        ehPrimo=false
        break
    }
    inicio++
}

console.log(ehPrimo ? `${p} Éprimo`: `${p} Não é primo`)
