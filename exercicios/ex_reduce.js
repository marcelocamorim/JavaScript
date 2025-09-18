//Exercícios com reduce

//ex01 Somar todos os números
// Crie uma função que receba um array de números e retorne a soma deles.
const somar = () => {
    let numero = [10, 20, 30, 40, 50]

    let soma = numero.reduce((acc, val) => acc + val, 0)
    return soma
}
console.log("ex01: "+somar())

//ex02 Multiplicar todos os números
// Faça uma função que multiplique todos os valores de um array e retorne o resultado.
const multiplicar = () => {
    let numeros = [2, 2, 10]
    let mult = numeros.reduce((ac, val) => ac * val)
    return mult
}
console.log("ex02: "+multiplicar())

//ex03 Encontrar o maior valor
// Use reduce para encontrar o maior número dentro de um array.

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const maior = (arrray) => {
    return arrray.reduce((prev, curr) => {
        return prev > curr ? prev : curr
    })
}
console.log("ex03: "+maior(numeros2))

// 4 Contar elementos repetidos
// Dado um array de strings, conte quantas vezes cada palavra aparece.
let frutas = ["uva", "banana", "uva", "abacaxi", "uva", "banana"]
let contagem=frutas.reduce((acc, fruta)=>{
    acc[fruta]= (acc[fruta] || 0) +1
    return acc
},{})
console.log("ex 04: ", contagem)

//5 Somar apenas números pares
// Some apenas os valores pares de um array.
let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const somarPares=()=>{
//     let soma=numeros3.reduce((acc,val)=>{
//         if(val%2==0){
//             return acc+val
//         }else{
//             return acc
//         }
//     },0)
//     return soma
const somarPares=()=>
    numeros3.reduce((acc,val)=> acc + (val%2===0?val:0),0)
console.log("ex05: "+somarPares())


//6 Transformar array em string
// Concatene todas as palavras de um array em uma frase.
let palavras=["praticando", "exercicios", "de", "reduce"]

let frase=palavras.reduce((prev, curr)=> prev + " " + curr)
//let frase=palavras.join(" ")
console.log("ex06: "+frase)

//7 Flatten (achatar arrays)
// Dado um array de arrays, transforme em um único array.
let arrayDeArrays=[["achatando", "arrays"], ["com", "reduce"], [1,2,3]]
let novoArray=arrayDeArrays.reduce((acc,val)=> acc.concat(val), [])
console.log("ex07: " +novoArray)

//8 Calcular a média dos números
// Faça uma função que retorne a média dos valores de um array.
let notas=[2,10,8,5,5]
const calcularMedia=()=>{
    return notas.reduce((acc,val)=>acc+val/notas.length,0)  
}
console.log("ex08: "+  calcularMedia())

//9 Agrupar por categoria
// Dado um array de objetos, agrupe-os por uma propriedade.
let produtos = [
  { nome: "Maçã", categoria: "Fruta" },
  { nome: "Banana", categoria: "Fruta" },
  { nome: "Cenoura", categoria: "Legume" },
  { nome: "Batata", categoria: "Legume" },
  { nome: "Leite", categoria: "Bebida" },
  { nome: "suco", categoria: "Bebida" }
];

let agrupados=produtos.reduce((acc,item)=>{
    if(!acc[item.categoria]){
        acc[item.categoria]=[]
    }
    acc[item.categoria].push(item)
    return acc
},{})

console.log("ex09: ", agrupados)

//10 Contar caracteres em uma string
// Use reduce para contar quantas vezes cada letra aparece em uma string.
let strin="banana"
let contaString=strin.split("").reduce((acc,val)=>{
    acc[val]=(acc[val] || 0) +1
    return acc
},{})
console.log(contaString)