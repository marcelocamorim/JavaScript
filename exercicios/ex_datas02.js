/*

🧪 Exercício 2 – Mini Cronômetro
Objetivo: Criar um cronômetro que conte o tempo em segundos desde que foi iniciado.

Instruções:
Crie um botão "Iniciar" e outro "Parar".

Ao clicar em "Iniciar", use setInterval() para contar os segundos e exibir na tela.

Ao clicar em "Parar", o cronômetro deve parar.

Dica: você pode usar uma let contador = 0 e ir incrementando ela dentro do setInterval.


 */


const crono = document.getElementById('crono')
const iniciar = document.getElementById('iniciar')
const parar = document.getElementById('parar')
const pausar=document.getElementById('pausar')

let segundos=0
let minutos=0
let horas=0
let intervalo=null
let contando=false

iniciar.addEventListener("click",()=>{
    if(contando)return//barra outra contagem enquanto uma está ativa    

        intervalo=setInterval(()=>{
            segundos++
            if(segundos===60){
                minutos++
                segundos=0
            }
            if(minutos===60){
                horas++
                minutos=0
            }
            
            const hrsStr=horas.toString().padStart(2,'0')
            const minStr=minutos.toString().padStart(2,'0')
            const segStr=segundos.toString().padStart(2,'0')
            crono.innerHTML=`${hrsStr}:${minStr}:${segStr}`
            
        },1000) 
    contando=true//impede outra contagem junto com o if
})

pausar.addEventListener("click",()=>{
    clearInterval(intervalo)
    contando=false

})


parar.addEventListener("click",()=>{    
    clearInterval(intervalo)
    contando=false
    intervalo=null
    segundos=0
    minutos=0
    horas=0
    crono.innerHTML="00:00:00"

})