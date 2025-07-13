// ✅ Exercício 3: Substituir item existente
// Objetivo no JS (ex3.js):
// Criar um array com cores.

// Mostrar na tela.

// Substituir a cor no índice informado usando splice(indice, 1, novaCor).

//splice sitaxe 
// array.splice(início, quantosRemover, item1, item2, ...)
// Parâmetro     O que faz 
// início	 Índice onde vai começar a mexer no array
// quantosRemover	  Quantos elementos você quer remover a partir dali
// item1, item2...  (Opcional) Elementos que você quer adicionar


const listaCores = document.getElementById("listaCores")//lista
const substituir = document.getElementById("substituir")//button
const indiceSubstituir = document.getElementById("indiceSubstituir")//indice
const novaCor = document.getElementById("novaCor")//cor

let aCores = ["azul", "laranja", "vermelho", "roxo", "branco",]


function attLista() {
    listaCores.innerHTML=""
    aCores.map((el, i) => {
        let listItem = document.createElement("li")
        listItem.innerHTML = `${i} - ${el}`
        listaCores.appendChild(listItem)
    })
}

function limparCampos(){
    indiceSubstituir.value=""
    novaCor.value=""
}

substituir.addEventListener("click",()=>{
    let indice=parseInt(indiceSubstituir.value)
    let cor=novaCor.value

    if(cor.trim()===""){
        alert("Digite uma cor válida")
        limparCampos()
        return
    }

    if(indice<aCores.length && indice>=0){
        aCores.splice(indice,1,cor)
        attLista()
        limparCampos()
    }else{
        alert("Digite um indice válido")
        limparCampos()
    }

    
})

attLista()




