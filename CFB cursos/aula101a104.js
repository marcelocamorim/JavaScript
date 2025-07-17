// Funções para manipulação de STRING em Javascript

let nome=new String("bruno teste bruna")
let nome2=new String("bruno")
let canal=new String("CFBcursos")

console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(3))//retorna o caractere no indice 3

console.log(nome.charCodeAt(3))//retorna o código do caractere no indice 3
console.log(nome.concat(canal))//concatena uma string com outra

console.log(nome.indexOf("n"))//retorna o indice do primeiro caractere encontrado

console.log(nome.lastIndexOf("n"))//retorna o indice do ultimo caractere encontrado

console.log(nome.localeCompare(nome2))
//retorna -1 se primeira string for diferente
//retorna 1 se segunda string for diferente
//retorna 0 se as strings forem iguais

console.log(nome.replace("b","f"))//substitui o primeiro caractere ou palavra encontrada por outro

console.log(nome.search("u"))//pesquisa na string

console.log(nome.slice(2,5))//retorna um pedaço da string (inicio,fim)

let arr_nome=nome.split(" ")//separa a string e retorna um array com a separação
console.log(arr_nome)

let parte1=nome.substring(0,5)//retorna um pedaço da string (inicio,fim), similar ao slice
console.log(parte1)

let parte2=nome.substr(0,5)//a partir de inicio, retorna o tamanho EX 5 caracteres a partir do 0
console.log(parte2)

console.log(nome.toUpperCase())//tudo para maiusculas
console.log(nome.toLowerCase())//tudo para minusculas

console.log(nome.valueOf())//retorna apenas o valor da string

let num=10
console.log(typeof(num,toString()))//converte para string

console.log(nome.startsWith("b"))//localiza se a string começa com o valor retorna true/false
console.log(nome.endsWith("a"))//localiza se a string termina com o valor retorna true/false

console.log(nome.includes("teste"))//localiza se a string possui o valor, retorna true/false

console.log(nome.repeat(4))//repete a string 

console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))
console.log(nome.charCodeAt(4))

console.log(String.fromCodePoint(98,114,117,110,111))//retorna o caracter a partir do código dele, oposto de "charCodeAt"

let ts_nome="bruno"
console.log(`nome: ${ts_nome}`)//template string, concatena string + valores


