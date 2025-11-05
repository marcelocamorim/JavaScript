const lista = document.getElementById("lista")
const btn_add = document.getElementById("btn_add")


let indice=0


btn_add.addEventListener("click", () => {
    indice++
    const li = document.createElement("li")
    li.textContent = `Item ${indice}`
    lista.appendChild(li)

    const btn = document.createElement("button")
    btn.textContent = "X"
    li.appendChild(btn)

    btn.addEventListener("click", ()=>{
        li.remove()
    })
    
})

