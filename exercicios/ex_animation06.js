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
let direcao=1

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

    let newH = posH + (10 * horizon)
    let newV = posV + (10 * vert)

    if()

    
    carro.style.left = newH + "px"
    

}

const startMove = (h, v) => {
    clearInterval(anima)
    anima = setInterval(move, 20, h, v)
}


btn_play.addEventListener("click", () => {
    
    if(parseInt(carro.style.left>=0)){
        startMove(1,0)
    }
    if(parseInt(carro.style.left==limiteHorizontal)){
        startMove(-1,0)
    }

   
})


btn_parar.addEventListener("click", () => {//Stop
    clearInterval(anima)
})


window.addEventListener("load", init)

window.addEventListener("resize", attLimites)