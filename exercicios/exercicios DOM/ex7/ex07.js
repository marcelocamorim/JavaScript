const span = document.getElementById("spn")
const btn = document.getElementById("btn")
let contagem = 1

btn.addEventListener("click",()=>{
    
    span.textContent=contagem
    contagem++
})
