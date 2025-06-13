/*
Exercício 1 – Alerta com Timer
Objetivo: Criar um botão que, ao ser clicado, inicia uma contagem regressiva (definida pelo usuário) e, ao final, mostra uma mensagem na tela.

Instruções:
Crie um campo de input para o usuário digitar o tempo (em segundos).

Ao clicar no botão, inicie o setTimeout.

Quando o tempo acabar, mostre a mensagem "Tempo finalizado!" dentro de uma div.

 */


const tempo=document.getElementById('tempo')
const msg=document.getElementById('msg')
const cont=document.getElementById('cont')
const tempo_do_alarme=document.getElementById('tempo_do_alarme')

cont.addEventListener("click",()=>{
    let tempo=Number(tempo_do_alarme.value)
    
    intervalo=setInterval(()=>{
        msg.innerHTML=`${tempo} Segundos`
        tempo--
        if(tempo<=0){
            clearInterval(intervalo)
            msg.innerHTML="Tempo Finalizado!"
        }
        
    },1000)
})


