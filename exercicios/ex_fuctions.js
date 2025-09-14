// 📌 Exercícios com functions

// Crie uma função que receba uma string e retorne se ela é palíndromo (mesma palavra ao contrário).

// Crie uma função que receba um array de números e retorne a média deles.

// Crie uma função que receba um número e retorne se ele é par ou ímpar.

//ex1 - Crie uma função que receba dois números e retorne a soma.
function somar(n1,n2){
    return n1+n2
}
console.log(somar(5,5))

//ex2 Crie uma função que receba uma string e retorne se ela é palíndromo (mesma palavra ao contrário).


//ex03 Crie uma função que receba um array de números e retorne a média deles.
// com map
let numeros =[10,20,30,40,50]

const media=()=>{
    let res=0
    let media = numeros.map((el)=>{
        res+=el
    })
    return res/numeros.length
}
 console.log(media())

 //com reduce e return
 let numeros2 = [1,2,3,4,5,6]

 const media2 = ()=>{
    let soma = numeros2.reduce((acc,val)=>{
        return acc+val
    },0)
    return soma/numeros2.length
    
 }
 console.log(media2())

 //ex04 Crie uma função que receba um número e retorne se ele é par ou ímpar.

 const par_impar=(n)=>{
    if(n%2==0){
        return "Esse número é par"
    }else{
        return "Esse número é impar"
    }
 }

 console.log(par_impar(5))

 
