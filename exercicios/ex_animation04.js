// ✅ Exercício 4: Voltar ao Início
// Crie um botão “Resetar” que retorna o carro para a posição inicial (left: 0px e top: 0px).//

const carro = document.getElementById("carro")
const btn_parar = document.getElementById("btn_parar")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")
const painel = document.getElementById("painel")
const estrada = document.getElementById("estrada")

const btn_cima = document.createElement('button')
const btn_baixo = document.createElement('button')
const btn_reset =document.createElement('button')

btn_cima.innerText = "Para cima"
btn_baixo.innerText = " para baixo"
btn_reset.innerText ="Reset"

painel.appendChild(btn_baixo)
painel.appendChild(btn_cima)
painel.appendChild(btn_reset)

let limiteHorizontal = null
let limiteVertical = null
let velocidade = 10



const init = () => {
    carro.style = `position: relative; left:0px; top:0px;`

}

const atualizarLimites=()=>{
    limiteHorizontal = window.innerWidth - carro.offsetWidth
    limiteVertical = window.innerHeight - carro.offsetHeight
}

const move = (horizon, vert) => {   
    const posH = parseInt(carro.style.left)
    const posV = parseInt(carro.style.top)

    const novaH = posH + (velocidade * horizon)
    const novaV = posV + (velocidade * vert)

    if (novaH >= 0 && novaH <= limiteHorizontal) {
        carro.style.left = novaH + "px"
        velocidade +=10
    } else {
        clearInterval(anima)
    }

    if (novaV >= 0 && novaV <= limiteVertical) {
        carro.style.top = novaV + "px"
        velocidade +=10
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
    velocidade=10
})

btn_reset.addEventListener("click",()=>{
    clearInterval(anima)
    carro.style.left="0px"
    carro.style.top="0px"
    velocidade=10
    atualizarLimites()
})


window.addEventListener("load", ()=>{
    init()
    atualizarLimites()
})

window.addEventListener("resize", atualizarLimites)
