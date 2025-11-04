const lista=document.getElementById("lista")
const btn_add=document.getElementById("btn_add")

let indice=0



btn_add.addEventListener("click",()=>{
    const li=document.createElement("li")
    li.textContent=`Item ${indice+1}`
    lista.appendChild(li)
    indice++

})