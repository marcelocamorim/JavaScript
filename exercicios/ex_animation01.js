const carro = document.getElementById("carro")
const btn_parar = document.getElementById("btn_parar")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")

const init = () => {
    carro.style=`position: relative; left:0px;`
}

const move=(dir)=>{
    carro.style.left=parseInt(carro.style.left)+(10*dir)+"px"

}

let anima=null

btn_direita.addEventListener("click",()=>{//direita
    clearInterval(anima)
    anima=setInterval(move,20,1)
})

btn_esquerda.addEventListener("click",()=>{//esquerda
    clearInterval(anima)
    anima=setInterval(move,20,-1)
})

btn_parar.addEventListener("click",()=>{//Stop
    clearInterval(anima)
})



window.addEventListener("load", init)