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

teclaNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
        if(display.innerHTML=="0"){
            display.innerHTML=""
        }         
        
        display.innerHTML+=evt.target.innerHTML
    
    })
})



teclaOp.map((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!decimal){
            
        }

    })
})