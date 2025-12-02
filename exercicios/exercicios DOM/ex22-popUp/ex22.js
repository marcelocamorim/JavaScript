const btnDeletar=document.getElementById("deletarConta")
const pop=document.getElementById("pop")
const fechar=document.getElementById("fechar")
const overlay=document.getElementById("overlay")

btnDeletar.addEventListener("click",()=>{
    pop.classList.remove("invisivel")
    overlay.style.display="block"
    
})

fechar.addEventListener("click",()=>{
    pop.classList.add("invisivel")
    overlay.style.display="none"
})

