const input=document.getElementById("input")
const btn=document.getElementById("btn")
const mostrar_msg=document.getElementById("mostrar_msg")

//ao clicar botao
//pegar valor input
//mostrar no paragrafo


btn.addEventListener("click",()=>{
    mostrar_msg.innerHTML+=` ${input.value}`  
    input.value=""
})
