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

