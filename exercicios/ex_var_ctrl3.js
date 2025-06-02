/*
✅ Exercício 4 – Controle de botão ON/OFF
Objetivo: Criar um botão que liga e desliga uma calculadora.

Desafio:

Um botão ON/OFF que ativa ou desativa os botões numéricos

Use uma variável ligado = false

Ao clicar em ON/OFF, troque o valor de ligado com ligado = !ligado

Se estiver false, ignore os cliques nos outros botões
*/
const calc=document.getElementById('calc')
const teclaNum=[...document.querySelectorAll(".teclaNum")]
const teclaOp=[...document.querySelectorAll(".teclaOp")]

const display=document.getElementById('display')
const tigual=document.getElementById('tigual')
const limpar=document.getElementById('limpar')

const ligar=document.getElementById('on')
const desligar=document.getElementById('of')

const btn_calc=document.getElementById('btn_calc')

let sinal=false
let decimal=false
let resultado=false
let ligado=false

//se click numero mostra visor
//se click virgula mostar 0,
//se visor== 0 recebe numero clicado
//se ultimo digito for op recebe 0,
//se clicar em numero libera ops

btn_calc.addEventListener("click",(evt)=>{
    const estaMostrando=calc.classList.toggle("mostrar_calc")
    calc.classList.toggle("esconder_calc")
    btn_calc.innerHTML = estaMostrando?"Esconder":"Mostrar"
})



if(!ligado){
    display.innerHTML="Desligado"
    display.classList.add("estado_display_of")

}

ligar.addEventListener("click",(evt)=>{
    if(!ligado){
        ligado=true  
        ligar.classList.add("ligadoOk")
        desligar.classList.remove("desligadoOk")  
        display.classList.add("estado_display_on")               
        display.classList.remove("estado_display_of")               
    }
    display.innerHTML="0"
})

desligar.addEventListener("click",(evt)=>{
    if(ligado){
        ligado=false
        desligar.classList.add("desligadoOk")
        ligar.classList.remove("ligadoOk")
        display.classList.add("estado_display_of")
        display.classList.remove("estado_display_on")
    }
    display.innerHTML="Desligado"
})


teclaNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const valor=evt.target.innerHTML
        sinal=false
        if(ligado){    
            if(resultado){ 
                const fim=display.innerHTML.slice(-1)
                if(["+","-","*","/"].includes(fim)){
                    resultado=false
                }else{
                    resultado=false
                    sinal=false
                    decimal=false
                    display.innerHTML=""
    
                }
                
    
               
            }
    
            if(valor==","){
                if(!decimal){
                    decimal=true
                    const fim=display.innerHTML.slice(-1)
                    if(["+","-","*","/"].includes(fim)){
                        display.innerHTML+="0,"
                    }else if(display.innerHTML=="0"){
                        display.innerHTML="0,"
                    }else{
                        display.innerHTML+=","
                    }
                }
            }else{
                if(display.innerHTML=="0" ){
                    display.innerHTML=valor
                }else{
                    display.innerHTML+=valor
                }
            }

        }

        
      
    })
})


teclaOp.map((el)=>{
    el.addEventListener("click",(evt)=>{
        decimal=false
        if(ligado){
            if(!sinal){
                sinal=true
                const op=evt.target.innerHTML
                if(op=="x"){
                    display.innerHTML+="*"              
                }else{
                    display.innerHTML+=op
    
                }
            }
        }


    })
})

tigual.addEventListener("click",(evt)=>{
    decimal=false
    sinal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
    resultado=true
})

limpar.addEventListener("click",(evt)=>{
    if(ligado){
        decimal=false
        sinal=false
        display.innerHTML="0"

    }
})