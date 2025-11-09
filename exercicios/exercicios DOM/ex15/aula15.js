const btn_mover_direita = document.getElementById("btn_mover_direita")
const btn_parar = document.getElementById("btn_parar")
const btn_mover_esquerda = document.getElementById("btn_mover_esquerda")
const div = document.getElementById("div")


let intervalo = null
let deslocamento = 0

btn_mover_direita.addEventListener("click", () => {
    clearInterval(intervalo)
    
    intervalo = setInterval(() => {
        deslocamento += 2
        div.style.left = deslocamento + "px"
    }, 5)
})


btn_parar.addEventListener("click",()=>{
    clearInterval(intervalo)
})

btn_mover_esquerda.addEventListener("click", () => {
    clearInterval(intervalo)
    
    intervalo = setInterval(() => {
        deslocamento -= 2
        div.style.left = deslocamento + "px"
    }, 5)
})