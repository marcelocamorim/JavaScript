//Aprendendo sobre validação nativa em Javascript #P1 - Curso de Javascript - Aula 119

const f_nome=document.querySelector("#f_nome")
const f_nota=document.querySelector("#f_nota")
const f_msg=document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
    let msg=null

    if(!f_nota.checkValidity()){
        msg=f_nota.validationMessage
    }

    f_msg.innerHTML=msg
    evt.preventDefault()
    
})

// Resumindo
// O botão “Validar” é clicado.
// O script confere se o campo f_nota atende às regras de validação do HTML (required, min, max etc.).
// Se não atender, mostra a mensagem de erro do próprio navegador em #f_msg.
// Sempre impede o envio do formulário (para não recarregar a página).