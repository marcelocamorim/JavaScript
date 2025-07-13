// 🔹 Exercício 1 – Remover números pares
// Objetivo: Dado um array de números, remover todos os números pares usando filter().

const listaNumeros = document.getElementById("listaNumeros")
const removerPares = document.getElementById("removerPares")

let numeros = [1, 2, 3, 4, 5, , 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function lista() {
    listaNumeros.innerHTML = ""
    numeros.map((el, i) => {
        const listItem = document.createElement("li")
        if (el % 2 == 0) {
            listItem.innerHTML = `${el} - (par)`
        } else {
            listItem.innerHTML = `${el} - (impar)`
        }
        listaNumeros.appendChild(listItem)
    })
}

removerPares.addEventListener("click", () => {
    numeros = numeros.filter(num => num % 2 !== 0)
    lista()

})

lista()