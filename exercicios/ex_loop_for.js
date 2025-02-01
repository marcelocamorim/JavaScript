//exercicios loop for

// 1. Contagem de 1 a 10
// Escreva um programa que imprima os números de 1 a 10 no console.

let num=0
for(let i=num; i<10; i++){
    console.log(i)
}

// 2. Contagem Regressiva de 10 a 1
// Imprima os números de 10 a 1 no console.

for(i=10; i>0; i--){
    console.log(i)
}

// 3. Tabuada do 5
// Crie um programa que imprima a tabuada do 5 (de 5 × 1 até 5 × 10).

for(i=0; i<11; i++){    
    console.log(`5 x ${i} = ${5*i}`)
}

// 4. Soma de Números de 1 a 100
// Calcule a soma de todos os números de 1 a 100.

let soma=0
for(i=1;i<100;i++){
    soma+=i
}
console.log(soma)

// 5. Números Pares de 1 a 20
// Imprima apenas os números pares de 1 a 20. 

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Números Ímpares de 1 a 20
// Imprima apenas os números ímpares de 1 a 20.

for(let i=1; i<=20; i+=2){
    console.log(i)
}

