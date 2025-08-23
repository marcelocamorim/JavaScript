// Exercício 11: Botão Turbo

// Adicione um botão “Turbo” que aumenta temporariamente a velocidade (ex.: de 10px para 50px) por alguns segundos e depois volta ao normal.

const carro = document.getElementById("carro")
const btn_parar = document.getElementById("btn_parar")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")
const painel = document.getElementById("painel")

const btn_play = document.createElement('button')
btn_play.innerText = "Play"
painel.appendChild(btn_play)

const btn_reset = document.createElement('button')
btn_reset.innerText = "Reset"
painel.appendChild(btn_reset)



let anima = null
let limiteHorizontal = null
let limiteVertical = null
let direcao = 1

const init = () => {
    carro.style = `position: relative; left:0px; top:0px;`
    attLimites()

}

const attLimites = () => {
    limiteHorizontal = window.innerWidth - carro.offsetWidth
    limiteVertical = window.innerHeight - carro.offsetHeight
}

const move = (horizon, vert) => {
    let posH = parseInt(carro.style.left)
    let posV = parseInt(carro.style.top)

    let newH = posH + (10 * direcao)
    let newV = posV + (10 * direcao)



    if (newH >= limiteHorizontal) {
        newH = limiteHorizontal
        direcao = -1
    } else if (newH <= 0) {
        newH = 0
        direcao = 1
    }


    carro.style.left = newH + "px"
    console.log(newH)


}

const startMove = (h, v) => {
    clearInterval(anima)
    anima = setInterval(move, 20, h, v)
}


btn_play.addEventListener("click", () => {
    startMove()
})


btn_parar.addEventListener("click", () => {//Stop
    clearInterval(anima)
})

btn_reset.addEventListener("click",()=>{
    clearInterval(anima)
    carro.style.left="0px"
    carro.style.top="0px"
})


window.addEventListener("load", init)

window.addEventListener("resize", attLimites)