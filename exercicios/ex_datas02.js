/*

🧪 Exercício 2 – Mini Cronômetro
Objetivo: Criar um cronômetro que conte o tempo em segundos desde que foi iniciado.

Instruções:
Crie um botão "Iniciar" e outro "Parar".

Ao clicar em "Iniciar", use setInterval() para contar os segundos e exibir na tela.

Ao clicar em "Parar", o cronômetro deve parar.

Dica: você pode usar uma let contador = 0 e ir incrementando ela dentro do setInterval.


 */


const crono=document.getElementById('crono')
const iniciar=document.getElementById('iniciar')
const parar=document.getElementById('parar')

contando=false
intervalo=null

iniciar.addEventListener("click", ()=>{
    let tempo=0
    intervalo=setInterval(()=>{
        if(!contando){                    
            crono.innerHTML=tempo      
            tempo++ 
        }

    },1000)
    
})

parar.addEventListener("click",()=>{
    crono.innerHTML=0
    clearInterval(intervalo)
})