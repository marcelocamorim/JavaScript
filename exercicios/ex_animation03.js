// ✅ Exercício 3: Aceleração
// Aumente a velocidade do movimento a cada clique. Ex: o primeiro clique move 10px, o segundo 20px, o terceiro 30px, etc.



const carro = document.getElementById("carro")
const btn_parar = document.getElementById("btn_parar")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")
const painel = document.getElementById("painel")

const btn_cima=document.createElement('button')
const btn_baixo=document.createElement('button')

btn_cima.innerHTML="Para cima"
btn_baixo.innerHTML=" para baixo"

painel.appendChild(btn_baixo)
painel.appendChild(btn_cima)


const init = () => {
    carro.style=`position: relative; left:0px; top:0px;`
}

const move=(horizon,vert)=>{
    carro.style.left=parseInt(carro.style.left)+(10*horizon)+"px"
    carro.style.top=parseInt(carro.style.top)+(10*vert)+"px"

}

let anima=null

btn_direita.addEventListener("click",()=>{//direita
    clearInterval(anima)
    anima=setInterval(move,20,1,0)
})

btn_esquerda.addEventListener("click",()=>{//esquerda
    clearInterval(anima)
    anima=setInterval(move,20,-1,0)
})

btn_cima.addEventListener("click",()=>{//para cima
    clearInterval(anima)  
    anima=setInterval(move,20,0,-1)   
})

btn_baixo.addEventListener("click",()=>{//para baixo
    clearInterval(anima)  
    anima=setInterval(move,20,0,1)  
})

btn_parar.addEventListener("click",()=>{//Stop
    clearInterval(anima)
})


window.addEventListener("load", init)