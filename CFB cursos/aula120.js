//Aprendendo sobre validação nativa em Javascript #P1 - Curso de Javascript - Aula 120

const f_nome=document.querySelector("#f_nome")
const f_nota=document.querySelector("#f_nota")
const f_msg=document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
    let estadoValidacao=f_nota.validity

    if(estadoValidacao.valueMissing){
        f_nota.setCustomValidity("Esse Campo é Obrigatório")
    }else if(estadoValidacao.rangeOverflow){
        f_nota.setCustomValidity("Essa nota é muito alta")
    }else if(estadoValidacao.rangeUnderflow){
        f_nota.setCustomValidity("Essa nota é muito baixa")
    }

    //f_nota.reportValidity()
    evt.preventDefault()
    f_msg.innerHTML=f_nota.validationMessage
    
})

// Resumindo
// O botão “Validar” é clicado.
// O script confere se o campo f_nota atende às regras de validação do HTML (required, min, max etc.).
// Se não atender, mostra a mensagem de erro do próprio navegador em #f_msg.
// Sempre impede o envio do formulário (para não recarregar a página).


//Métodos de validação do DOM
//checkValidity()
//setCustomValidity()

//Propriedade de validação do DOM
//validity
//validationMessage

//Propriedades de validação
/*
customError: true, se uma mensagem de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
valid: true, se o valor de um elemento for válido.
*/