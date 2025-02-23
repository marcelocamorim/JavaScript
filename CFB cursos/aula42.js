// //método filter O método filter() em JavaScript é usado para criar um novo array contendo apenas os elementos que passam em um teste específico definido por uma função de callback.

// Sintaxe
// const novoArray = arrayOriginal.filter(callback);
// callback: Uma função que retorna true para manter o elemento e false para removê-lo.
// novoArray: Um novo array apenas com os elementos que passaram no teste.


// const idades=[15,21,30,17,18,44,12,50]

// const maior = idades.filter(el=>el>=18)  arrow func sem chaves

// console.log(idades)
// console.log(maior)

const idades=[15,21,30,17,18,44,12,50]
const maior=idades.filter((el)=>{
    return el>=18
})

const menores=idades.filter((el)=>{
    return el<18
})

console.log(idades)
console.log(maior)
console.log(menores)