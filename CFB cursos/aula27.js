// Funções geradoras
//tipo especial de função que podem ser pausadas e retomadas. Elas retornam um objeto que implementa o protocolo de iterador, permitindo gerar valores conforme necessário, ao invés de calculá-los todos de uma vez. 


function* cores(){ //function com * significa que é uma função geradora
    yield 'vermelho' 
    yield 'verde'
    yield 'azul'
}
//Cada vez que yield é encontrado, a execução da função é pausada e o valor especificado após yield é retornado.

let itc=cores() //variavel recebe chamada da function
console.log(itc.next().value) //executa até o 1° yield, retorna o valor e pausa
console.log(itc.next().value) //executa até o 2° yield, retorna o valor e pausa
console.log(itc.next().value) //executa até o 3° yield, retorna o valor e pausa

//.next() é a proxima execução da function
//.value é o valor após yield