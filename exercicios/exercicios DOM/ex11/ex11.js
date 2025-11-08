const input=document.getElementById("input")
const btn_add=document.getElementById("btn_add")
const lista=document.getElementById("lista")



//btn listener 
//cria novo elemento li com value do input - 
//cria buttom remover
//outro listener cria button
//buttton remove li
//append li - button
///append lu - li

btn_add.addEventListener("click",()=>{
    const li=document.createElement("li")
    li.innerHTML=input.value

    const btn_remove=document.createElement("button")
    btn_remove.innerHTML="Excluir"

    btn_remove.addEventListener("click",()=>{
        li.remove()
    })

    li.appendChild(btn_remove)
    lista.appendChild(li)
    input.value=""
})