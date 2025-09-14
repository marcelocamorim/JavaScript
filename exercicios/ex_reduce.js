//Exercícios com reduce

// Somar todos os números
// Crie uma função que receba um array de números e retorne a soma deles.
const somar=()=>{
    let numero=[10,20,30,40,50]

    let soma=numero.reduce((acc,val)=>acc+val,0)
    return soma
}
console.log(somar())

// Multiplicar todos os números
// Faça uma função que multiplique todos os valores de um array e retorne o resultado.
const multiplicar=()=>{
    let numeros=[2,2,10]
    let mult=numeros.reduce((ac,val)=>ac*val,1)
    return mult
}
console.log(multiplicar())