/*
O que é uma Promise?
Uma Promise é um objeto que representa o resultado eventual de uma operação assíncrona. Pode estar em 3 estados:

Pendente (pending) – a operação ainda não foi concluída.

Resolvida (fulfilled) – a operação foi concluída com sucesso.

Rejeitada (rejected) – a operação falhou.

*/
const numero = document.getElementById("numero")

let promise = new Promise((resolve, reject) => {//res=resolvido ok, rej =rejeitado 
    let resultado = true
    let tempo = 3000

    setTimeout(() => {
        if(resultado){
            resolve("Deu tudo certo")
        }else{
            reject("Deu tudo errado")
        }
    }, tempo)

})

promise.then((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.add("ok")
    numero.classList.remove("erro")
})//caso a promise caia em resolve ela vem para then

promise.catch((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.add("erro")
    numero.classList.remove("ok")
})// caso a promise caia em reject ela vem para catch



numero.innerHTML = "Processando..."