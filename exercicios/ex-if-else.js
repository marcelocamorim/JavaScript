// 1. Verificar Número Par ou Ímpar
// Crie um código que recebe um número e verifica se ele é par ou ímpar usando if...else.
let num=9
if(num%2===0){
    console.log("número par")
}else{
    console.log("número ímpar")
}

// //2. Maior de Idade
// Peça a idade de uma pessoa e diga se ela é maior ou menor de idade.
let idade=18
if(idade>=18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}  
 


// 3. Verificar Nota do Aluno
// Crie um programa que receba a nota de um aluno e exiba se ele foi aprovado, ficou de recuperação ou foi reprovado.

// Aprovado: Nota maior ou igual a 7
// Recuperação: Nota entre 5 e 6.9
// Reprovado: Nota abaixo de 5

let nota = 4
if(nota>=7){
    console.log("aprovado")
}else if(nota>=5){
    console.log("Recuperação")
}else{
    console.log("reprovado")
}


// 4. Maior entre Três Números
// Peça três números e descubra qual deles é o maior.
let a=1,b=2,c=3

if(a>b && a>c){
    console.log("A é maior")
}else if(b>a && b>c){
    console.log("B é maior")
}else{
    console.log("C é maior")
}

// 5. Verificar se um Ano é Bissexto
// Um ano é bissexto se for:

// Divisível por 4
// Não pode ser divisível por 100, a menos que também seja divisível por 400



// 6. Classificação de Temperatura
// Crie um código que classifique a temperatura ambiente:

// Menos de 15°C → "Frio"
// Entre 15°C e 30°C → "Agradável"
// Acima de 30°C → "Quente"

let temperatura=10

if(temperatura<15){
    console.log("frio")    
}else if(temperatura>=15 && temperatura<=30){
    console.log("Agradável")
}else{
    console.log("Quente")
}

// Calculadora Simples
// Crie um programa que recebe *dois números e um operador (+, -, , /) e exibe o resultado da operação.
let num1=2
let num2=5
let operador= "+"

if(operador==="+"){
    console.log(num1+num2)
}else if(operador==="-"){
    console.log(num1-num2)
}else if(operador==="*"){
    console.log(num1*num2)
}else if(operador==="/"){
    console.log(num1/num2)
}else{
    console.log("Operador inválido")
}