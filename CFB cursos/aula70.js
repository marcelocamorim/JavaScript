const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelector(".res")
const display=document.querySelector(".display")
const teclaOn=document.querySelector("#ton")
const limpar=document.querySelector("#tlimpar")

let sinal=false
let decimal=false

teclasNum.map((el)=>{//numeros
    el.addEventListener("click",(evt)=>{
        sinal=false      
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0,"
                }else{
                    display.innerHTML+=evt.target.innerHTML
                }
                
            }
        }else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }

            display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOp.map((el)=>{//operadores
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        
        }
    })
})

limpar.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    display.innerHTML="0"
})

teclaRes.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})