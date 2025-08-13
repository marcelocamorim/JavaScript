// ✅ Exercício 6: adicionar botão "paly" e "pause". ao dar play o carro anda continuamente até chegar ao limite da tela, ao chegar no limite volta para a outra direção, pause para o carro


const carro = document.getElementById("carro")
const btn_parar = document.getElementById("btn_parar")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")
const painel = document.getElementById("painel")

const btn_play = document.createElement('button')
btn_play.innerText = "Play"
painel.appendChild(btn_play)



let anima = null
let limiteHorizontal = null
let limiteVertical = null

const init = () => {
    carro.style = `position: relative; left:0px; top:0px;`
    attLimites()
    
}

const attLimites=()=>{
    limiteHorizontal = window.innerWidth - carro.offsetWidth
    limiteVertical = window.innerHeight - carro.offsetHeight
}

const move = (horizon, vert) => {
    carro.style.left = parseInt(carro.style.left) + (10 * horizon) + "px"
    carro.style.top = parseInt(carro.style.top) + (10 * vert) + "px"

}

const startMove = (h, v) => {
    clearInterval(anima)
    anima = setInterval(move, 20, h, v)
}





btn_parar.addEventListener("click", () => {//Stop
    clearInterval(anima)
})


window.addEventListener("load", init)

window.addEventListener("resize",attLimites)