const on = document.getElementById("on")
const off = document.getElementById("off")
const limpar = document.getElementById("limpar")

const numeros = [...document.querySelectorAll(".numeros")]
const operador = [...document.querySelectorAll(".operador")]

const parenteses =[...documen]

let visor = document.getElementById("visor")

let ligado = false
let desligado = true
let liberaOperador = false
let liberaVirgula=true

limpar.addEventListener("click", () => {
    visor.innerHTML = 0
})

numeros.forEach((el) => {
    el.addEventListener("click", () => {
        if(visor.innerHTML === "0"){
            visor.innerHTML=""
        }

        visor.innerHTML+=el.innerHTML
        liberaOperador=true
        liberaVirgula=false
        
    })
})

operador.forEach((el) => {
    el.addEventListener("click", () => {
        if(visor.innerHTML === ","){
            visor.innerHTML="0,"
        }

        if (liberaOperador) {
            visor.innerHTML += el.innerHTML
            liberaOperador = false
            liberaVirgula=true
        }
    })
})
