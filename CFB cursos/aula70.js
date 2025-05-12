const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelector(".res")
const display=document.querySelector(".display")
const teclaOn=document.querySelector("#ton")
const limpar=document.querySelector("#tlimpar")

teclasNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})
teclasOp.map((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})

limpar.addEventListener("click",()=>{
    display.innerHTML=""
})