const texto1 = document.getElementById("texto1")
const btn1 = document.getElementById("btn1")

btn1.addEventListener("click", () => {
    if (texto1.classList.contains("mostrar")){
        texto1.classList.remove("mostrar")
        texto1.classList.add("esconder")
        btn1.innerHTML = "Mostrar Texto"
    }else if(texto1.classList.contains("esconder")){
        texto1.classList.remove("esconder")
        texto1.classList.add("mostrar")
        btn1.innerHTML = "Esconder Texto"
    }

})





