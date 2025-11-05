const btn_claro = document.getElementById("btn_claro")
const btn_escuro = document.getElementById("btn_escuro")

btn_escuro.addEventListener("click",()=>{
    document.body.classList.remove("claro")
    document.body.classList.add("escuro")

    
    btn_claro.classList.remove("btn_claro_ativo")
    btn_escuro.classList.remove("btn_claro_ativo")
    btn_claro.classList.add("btn_escuro_ativo")
    btn_escuro.classList.add("btn_escuro_ativo")
    
})

btn_claro.addEventListener("click",()=>{
    document.body.classList.remove("escuro")
    document.body.classList.add("claro")

    btn_claro.classList.remove("btn_escuro_ativo")
    btn_escuro.classList.remove("btn_escuro_ativo")
    btn_claro.classList.add("btn_claro_ativo")
    btn_escuro.classList.add("btn_claro_ativo")
})

