// ✅ Exercício 5: Atalho de Teclado
// Permita que o carro seja movido com as teclas do teclado:
// ← move para a esquerda
// → move para a direita
// ↑ move para cima
// ↓ move para baixo
// Use: document.addEventListener("keydown", ...)


const carro = document.getElementById("carro")
const btn_parar = document.getElementById("btn_parar")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")
const painel = document.getElementById("painel")
const estrada = document.getElementById("estrada")

const btn_cima = document.createElement('button')
const btn_baixo = document.createElement('button')

btn_cima.innerHTML = "Para cima"
btn_baixo.innerHTML = " para baixo"

painel.appendChild(btn_baixo)
painel.appendChild(btn_cima)

let limiteHorizontal = null
let limiteVertical = null



const init = () => {
    carro.style = `position: relative; left:0px; top:0px;`

}

const move = (horizon, vert) => {
    limiteHorizontal = window.innerWidth - carro.offsetWidth
    limiteVertical = window.innerHeight - carro.offsetHeight

    const posH = parseInt(carro.style.left)
    const posV = parseInt(carro.style.top)

    const novaH = posH + (10 * horizon)
    const novaV = posV + (10 * vert)

    if (novaH >= 0 && novaH <= limiteHorizontal) {
        carro.style.left = novaH + "px"
    } else {
        clearInterval(anima)
    }

    if (novaV >= 0 && novaV <= limiteVertical) {
        carro.style.top = novaV + "px"
    } else {
        clearInterval(anima)
    }
}

const startMove = (h, v) => {
    clearInterval(anima)
    anima = setInterval(move, 20, h, v)
}

let anima = null

btn_direita.addEventListener("click", () => {//direita
    startMove(1, 0)
})

btn_esquerda.addEventListener("click", () => {//esquerda
    startMove(-1, 0)
})

btn_cima.addEventListener("click", () => {//para cima
    startMove(0, -1)
})

btn_baixo.addEventListener("click", () => {//para baixo
    startMove(0, 1)
})

btn_parar.addEventListener("click", () => {//Stop
    clearInterval(anima)
})


window.addEventListener("load", init)
