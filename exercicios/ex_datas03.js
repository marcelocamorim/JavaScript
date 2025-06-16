/*

🧪 Exercício 3 – Alarme com Hora Específica
Objetivo: Permitir que o usuário configure uma hora exata para o alarme tocar (por exemplo, 14:30:00).

Instruções:
Crie um campo para o usuário digitar a hora no formato HH:MM:SS.

Crie um botão "Ativar Alarme".

Use setInterval() para verificar, a cada segundo, se a hora atual bate com a digitada.

Quando for igual, toque um som (ou mostre uma mensagem se não quiser usar áudio).


 */


const div_relogio = document.getElementById("div_relogio")
const input_alarme = document.getElementById("input_alarme")
const hora_do_alarme = document.getElementById('hora_do_alarme')

const ativar=document.getElementById('ativar')
const parar=document.getElementById('parar')

alarme_ativado=false


ativar.addEventListener("click",()=>{
    
    
})




parar.addEventListener("click",()=>{

})



const relogio = () => {
    const data = new Date()

    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora

    let minutos = data.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos

    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos

    let hora_completa = `${hora}:${minutos}:${segundos}`

    div_relogio.innerHTML = hora_completa


}
const intervalo = setInterval(relogio, 1000)




