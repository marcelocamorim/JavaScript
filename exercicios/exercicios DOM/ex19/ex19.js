const visor = document.getElementById("visor")

const on = document.getElementById("on")
const off = document.getElementById("off")
const limpar = document.getElementById("limpar")

const abreParenteses = document.getElementById("abreParenteses")
const fechaParenteses = document.getElementById("fechaParenteses")


const numeros = [...document.querySelectorAll(".numeros")]
const operadores = [...document.querySelectorAll(".operador")]

const virgula = document.getElementById("virgula")
const igual = document.getElementById("igual")

let liberaNumero = true
let liberaOperador = false

limpar.addEventListener("click", () => {
    visor.innerHTML = "0"
    liberaNumero = true
    liberaOperador = false
})

numeros.forEach((el) => {
    el.addEventListener("click", (evt) => { 

        let digitado = evt.target.innerHTML
        if (visor.innerHTML === "0") {
            visor.innerHTML = digitado
            liberaOperador=true
            return
        }

        visor.innerHTML += digitado
        liberaOperador=true
    })
})

operadores.forEach((el)=>{
    el.addEventListener("click",(evt)=>{        
        
        let digitado = evt.target.innerHTML

        if(digitado==="x"){
            digitado="*"                       
        }

        if(liberaOperador){
            visor.innerHTML+=digitado
        }

        liberaOperador=false
    })
})