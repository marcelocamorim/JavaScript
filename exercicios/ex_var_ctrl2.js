/*
 Exercício 2 – Impedir duas vírgulas no mesmo número
Objetivo: Criar um campo de entrada numérica com vírgula.

Desafio:
Crie botões de 0 a 9 e vírgula ,
Só deve permitir 1 vírgula por número
Quando o usuário digitar um operador, resete a variável decimal
*/

const teclaNum=[...document.querySelectorAll(".teclaNum")]
const teclaOp=[...document.querySelectorAll(".teclaOp")]

const display=document.getElementById('display')
const tigual=document.getElementById('tigual')
const limpar=document.getElementById('limpar')

let sinal=false
let decimal=false
let resultado=false

//se click numero mostra visor
//se click virgula mostar 0,
//se visor== 0 recebe numero clicado
//se ultimo digito for op recebe 0,
//se clicar em numero libera ops

teclaNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const valor=evt.target.innerHTML
        sinal=false

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

        
      
    })
})


teclaOp.map((el)=>{
    el.addEventListener("click",(evt)=>{
        decimal=false
        if(!sinal){
            sinal=true
            const op=evt.target.innerHTML
            if(op=="x"){
                display.innerHTML+="*"              
            }else{
                display.innerHTML+=op

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
    decimal=false
    sinal=false
    display.innerHTML="0"
})