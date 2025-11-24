const menu=document.getElementById("menu")
const containerMenu=document.getElementById("containerMenu")

menu.addEventListener("click",()=>{
    containerMenu.classList.toggle("mostrar-menu")
})