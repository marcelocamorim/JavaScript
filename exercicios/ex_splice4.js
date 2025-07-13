// Exercício 4: Remover múltiplos itens com splice()
// 🧠 Objetivo:
// Criar um array com nomes de animais.

// Mostrar a lista na tela.

// Permitir ao usuário digitar um índice inicial e uma quantidade de itens a serem removidos.

// Usar splice(início, quantidade) para fazer isso.

const listaAnimais = document.getElementById("listaAnimais")
const btnRemover = document.getElementById("btnRemover")
const indiceInicio = document.getElementById("indiceInicio")
const quantidadeRemover = document.getElementById("quantidadeRemover")
const restaurar = document.getElementById("restaurar")

let animais = ["tigre", "zebra", "leopardo", "urso", "lobo", "elefante", "girafa", "macaco"]

function limparCampos() {
    indiceInicio.value = ""
    quantidadeRemover.value = ""
}

const lista = () => {
    listaAnimais.innerHTML = ""
    animais.map((el, i) => {
        const listItem = document.createElement("li")
        listItem.innerHTML = `${i} - ${el}`
        listaAnimais.appendChild(listItem)
    })
}

btnRemover.addEventListener("click", () => {//Remover
    let indice = parseInt(indiceInicio.value)
    let quant = parseInt(quantidadeRemover.value)
    if (indice < animais.length && indice>=0 && quant > 0){
        animais.splice(indice, quant)
        lista()
        limparCampos()
    }
})

restaurar.addEventListener("click", () => {
    animais = ["tigre", "zebra", "leopardo", "urso", "lobo", "elefante", "girafa", "macaco"]
    lista()
})

lista()



