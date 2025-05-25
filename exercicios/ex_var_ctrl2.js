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

let sinal=false
let decimal=false

//se click numero mostra visor
//se click virgula mostar 0,
//se visor== 0 recebe numero clicado
//se ultimo digito for op recebe 0,
//se clicar em numero libera ops

teclaNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const valor=evt.target.innerHTML
        sinal=false
        if(valor==","){
            if(!decimal){
                decimal=true
                if(display.innerHTML.endsWith("+") || display.innerHTML.endsWith("-") || display.innerHTML.endsWith("*") || display.innerHTML.endsWith("/")){
                    display.innerHTML+="0,"
                }else if(display.innerHTML=="0"){
                    display.innerHTML="0,"
                }else{
                    display.innerHTML+=","
                }
            }
        }else{
            if(display.innerHTML=="0"){
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
            if(op=="x") op="*"                    
            display.innerHTML+=op
        }


    })
})