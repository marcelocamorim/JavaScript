//Exercício 1: Remover item de um array por índice
// Objetivo 
// Criar um array com frutas.
// Mostrar na tela.
// Ao clicar no botão, remover a fruta pelo índice usando splice().

const lista = document.getElementById("lista")
const indiceRemover = document.getElementById("indiceRemover")
const btnRemover = document.getElementById("remover")

let frutas = ["abacaxi", "banana", "uva", "laranja", "pera"]

const attLista=()=>{
    lista.innerHTML=""
    frutas.map((f,i)=>{
        const li=document.createElement("li")
        li.innerHTML=`${i}-${f}`
        lista.appendChild(li)

        const btnRemoverManual=document.createElement("button")
        btnRemoverManual.innerHTML="lixeira"
        li.appendChild(btnRemoverManual)
        btnRemoverManual.addEventListener("click",()=>{
            frutas.splice(i,1)
            attLista()
        })
        
    })
}

btnRemover.addEventListener("click",()=>{
    const ind=parseInt(indiceRemover.value)
    frutas.splice(ind,1)
    attLista()
})
attLista()
