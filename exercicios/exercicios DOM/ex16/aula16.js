//horizontais
const btn_mover_direita = document.getElementById("btn_mover_direita")
const btn_mover_esquerda = document.getElementById("btn_mover_esquerda")

//verticais
const btn_mover_cima = document.getElementById("btn_mover_cima")
const btn_mover_baixo = document.getElementById("btn_mover_baixo")

//stop
const btn_parar = document.getElementById("btn_parar")

//container e mov
const container_mov = document.getElementById("container_mov")
const div_mov = document.getElementById("div_mov")


let intervalo = null
let deslocamentoH = 0
let deslocamentoV = 0

const limiteEsquerda = 0
const limiteCima = 252
const limiteDireita = container_mov.clientWidth - div_mov.offsetWidth
const limiteBaixo = container_mov.clientHeight - div_mov.offsetHeight


function mover(h, v) {
    clearInterval(intervalo)

    intervalo = setInterval(() => {
        deslocamentoH += h
        deslocamentoV += v

        //controle horizontal
        if(deslocamentoH<=limiteEsquerda){deslocamentoH=limiteEsquerda}
        if(deslocamentoH>=limiteDireita){deslocamentoH=limiteDireita}

        //controle vertical
        if(deslocamentoV<=limiteCima){deslocamentoV=limiteCima}
        if(deslocamentoV>=limiteBaixo){deslocamentoV=limiteBaixo}

        div_mov.style.left = deslocamentoH + "px"
        div_mov.style.top = deslocamentoV + "px"
    },3)

}

btn_mover_direita.addEventListener("click", () => {
    mover(1,0)
})

btn_mover_esquerda.addEventListener("click", () => {
    mover(-1,0)
})

btn_mover_cima.addEventListener("click", () => {
    mover(0,-1)
})

btn_mover_baixo.addEventListener("click", () => {
    mover(0,1)
})

