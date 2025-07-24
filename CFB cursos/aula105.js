//RegEx Expressões Regulares em Javascript #P2 - Curso de Javascript - Aula 106


let nome= new String("brunooo pinhoo campos 1978")
let email="bruno@bruno.com.br"
let numeros="1, 10, 100, 1000"
console.log(nome)

console.log(nome.search(/Pinho/i))

console.log(nome.match(/o/ig))

console.log(nome.replace(/Pinho/i,"teste"))

console.log(nome.match(/[oh]/ig))
console.log(nome.match(/[a-g|h-z|0-9]/ig))


//metaCaracteres
console.log(nome.match(/\d/ig)) //numeros
console.log(nome.match(/\s/ig)) //espaços
console.log(nome.match(/\bp/ig)) //caracter

//Quantificadores
console.log(nome.match(/o+/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))