const nome=document.getElementById("inome")
const idade=document.getElementById("iidade")
const email=document.getElementById("iemail")
const enviar=document.getElementById("enviar")
const limpar=document.getElementById("limpar")

const tabela=document.getElementById("tabela")



enviar.addEventListener("click",(evt)=>{
    evt.preventDefault()
    if(!nome.value || !idade.value || !email.value){
        alert("Preencha os campos corretamente!")
        return
    }

    const tr=document.createElement("tr")

    const tdNome=document.createElement("td")
    const tdIdade=document.createElement("td")
    const tdEmail=document.createElement("td")

    tdNome.textContent=nome.value
    tdIdade.textContent=parseInt(idade.value)
    tdEmail.textContent=email.value

    tr.appendChild(tdNome)
    tr.appendChild(tdIdade)
    tr.appendChild(tdEmail)
    tabela.appendChild(tr)

   nome.value=""
   idade.value=""
   email.value=""
    

})