// 🔹 Exercício 2 – Remover palavras curtas
// Objetivo: Remover palavras com menos de 4 letras de um array de palavras.


const lista = document.getElementById("listaPalavras")
const btn_filtrar = document.getElementById("filtrarPalavras")



let palavras = ["sol", "nuvem", "ar", "vento", "lua", "céu"]

function attLista() {
    lista.innerHTML = ""
    palavras.map((el, i) => {
        const li = document.createElement("li")
        li.innerHTML = `${el} -- ${el.length} letras`
        lista.appendChild(li)
    })
}

btn_filtrar.addEventListener("click", () => {
    palavras = palavras.filter(p => p.length >= 4)
    attLista()
})
attLista()