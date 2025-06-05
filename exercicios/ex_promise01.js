/*
 Exercício 1 – Verificar idade com Promise
Objetivo: Criar uma função que recebe uma idade e retorna uma Promise que resolve se a idade for maior ou igual a 18, e rejeita caso contrário.
*/

function verificarIdade(idade){
    return new Promise((res,rej)=>{
        if(idade>=18){
            res("Maior de idade")
        }else{
            rej("Menor de idade")
        }
    })
}

verificarIdade(10)
    .then((msg)=>{console.log("Sucesso", msg)})
    .catch((erro)=>{console.log("Erro", erro)})