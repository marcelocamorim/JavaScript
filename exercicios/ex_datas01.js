/*
Exercício 1 – Alerta com Timer
Objetivo: Criar um botão que, ao ser clicado, inicia uma contagem regressiva (definida pelo usuário) e, ao final, mostra uma mensagem na tela.

Instruções:
Crie um campo de input para o usuário digitar o tempo (em segundos).

Ao clicar no botão, inicie o setTimeout.

Quando o tempo acabar, mostre a mensagem "Tempo finalizado!" dentro de uma div.

 */


const tempo=document.getElementById('tempo')
const msg=document.getElementById('msg')//div menssagem
const cont=document.getElementById('cont')//botao
const tempo_do_alarme=document.getElementById('tempo_do_alarme')//input

let intervalo=null


cont.addEventListener("click",()=>{
    let tempo=Number(tempo_do_alarme.value)
    msg.innerHTML="Iniciando..."

    if(isNaN(tempo)||tempo<0){
        msg.innerHTML="Digite um tempo Válido"
        return
    }

    if(intervalo !==null){
        clearInterval(intervalo)
        intervalo=null
    }

    intervalo=setInterval(()=>{
        msg.innerHTML=`${tempo} Segundos`
        tempo--

        if(tempo<0){
            clearInterval(intervalo)
            intervalo=null
            msg.innerHTML="Contagem Finalizada"
        }
    },1000)
})

