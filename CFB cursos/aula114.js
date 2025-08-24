//Aprendendo sobre Desestruturação em Javascript #P1 - Curso de Javascript - Aula 114
// A desestruturação em JavaScript é uma forma prática de extrair valores de arrays ou objetos e atribuí-los a variáveis de maneira simples e legível.

let numeros=()=>{
    return[10,20,30,40]
}


let[a,b,c,d]=numeros()

console.log(a)
console.log(b)
console.log(c)
console.log(d)