const lu=document.getElementById("lista")
const li = [...document.querySelectorAll("#lista li")]
const inBusca=document.getElementById("inBusca")


inBusca.addEventListener("input",()=>{
    const textoBuscado = inBusca.value.toLowerCase()
    
    li.forEach((el)=>{
        const nome=el.textContent.toLowerCase()
        if(nome.includes(textoBuscado)){
            el.style.display="list-item"
        }else{
            el.style.display="none"
        }
    })
    
})



