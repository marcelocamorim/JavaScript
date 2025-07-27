//RegEx Expressões Regulares em Javascript #P2 - Curso de Javascript - Aula 106


let nome = new String("brunooo pinhoo campos 1978")
let email = "bruno@bruno.com.br"
let numeros = "1, 10, 100, 1000"

console.log(nome) // Exibe o conteúdo da variável nome

// Procura a palavra "Pinho" (sem diferenciar maiúsculas e minúsculas)
console.log(nome.search(/Pinho/i))

// Retorna todas as letras "o" (ignora maiúsculas/minúsculas e todas as ocorrências)
console.log(nome.match(/o/ig))

// Substitui "Pinho" por "teste", ignorando maiúsculas/minúsculas
console.log(nome.replace(/Pinho/i, "teste"))

// Encontra todas as letras "o" ou "h"
console.log(nome.match(/[oh]/ig))

// Encontra todos os caracteres de a a g, de h a z, ou de 0 a 9
console.log(nome.match(/[a-g|h-z|0-9]/ig))


// === Metacaracteres ===

// \d → encontra todos os dígitos (0 a 9)
console.log(nome.match(/\d/ig))

// \s → encontra todos os espaços em branco
console.log(nome.match(/\s/ig))

// \b → encontra um caractere "p" no início de uma palavra (p com borda esquerda = começo de palavra)
console.log(nome.match(/\bp/ig))


// === Quantificadores ===

// o+ → encontra um ou mais "o" seguidos
console.log(nome.match(/o+/ig))

// Procura exatamente "10"
console.log(numeros.match(/10/ig))

// 10+ → encontra "1" seguido de um ou mais zeros: "10", "100", "1000"
console.log(numeros.match(/10+/ig))

// 10* → encontra "1" seguido de zero ou mais zeros: "1", "10", "100", "1000"
console.log(numeros.match(/10*/ig))

// 10? → encontra "1" seguido de zero ou um "0": "1", "10"
console.log(numeros.match(/10?/ig))
