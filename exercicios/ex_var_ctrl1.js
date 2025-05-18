const teclaNum=[...document.querySelectorAll(".teclaNum")]
const teclaOp=[...document.querySelectorAll(".teclaOp")]

const display=document.getElementById('display')


let sinal=false//variavel de controle

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
        if(!sinal){//if sinal=false permite add um operador
            display.innerHTML+=evt.target.innerHTML
            sinal=true// bloqueia outro operador em sequencia
        }
    })
})