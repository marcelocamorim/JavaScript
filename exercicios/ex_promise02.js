/*
Exercício 2 – Esperar alguns segundos
Objetivo: Criar uma função que retorna uma Promise que resolve após X milissegundos, e imprime uma mensagem no then.
*/

function esperando3s(){
    return new Promise((res)=>{
        setTimeout(()=>{
            res("Pronto, contei até 3")
        },3000)
    })
}

esperando3s()
    .then((msg)=>{console.log(msg)})

console.log("Processando...")