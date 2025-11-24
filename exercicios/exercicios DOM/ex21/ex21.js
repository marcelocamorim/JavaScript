const menu=document.getElementById("menu")
const fechaMenu=document.getElementById("fecha-menu")

const containerMenu=document.getElementById("containerMenu")

menu.addEventListener("click",()=>{
    containerMenu.classList.remove("esconder-menu")
    containerMenu.classList.add("mostrar-menu")
})
fechaMenu.addEventListener("click",()=>{
    containerMenu.classList.remove("mostrar-menu")
    containerMenu.classList.add("esconder-menu")
})