const visor = document.getElementById("visor")

const on = document.getElementById("on")
const off = document.getElementById("off")
const limpar = document.getElementById("limpar")
const delet = document.getElementById("delet")

const abreParenteses = document.getElementById("abreParenteses")
const fechaParenteses = document.getElementById("fechaParenteses")


const numeros = [...document.querySelectorAll(".numeros")]
const operadores = [...document.querySelectorAll(".operador")]

const virgula = document.getElementById("virgula")
const igual = document.getElementById("igual")

let ligado = false
let liberaOperador = false
let liberaVirgula = false

if(!ligado){
    visor.innerHTML = "OFF"
    visor.style.color = "red"
    visor.style.boxShadow="0px 0px 20px rgba(255, 83, 83, 1)"
    visor.style.border="2px dashed rgba(114, 0, 0, 1)"
    
}

on.addEventListener("click", () => {
    ligado = true
    on.classList.remove("natural")
    on.classList.add("ligado")
    off.classList.add("natural")
    off.classList.remove("desligado")
    visor.innerHTML = "0"  
    visor.style.color = "black"

    visor.style.boxShadow="0px 0px 20px rgba(124, 255, 120, 1)"
    visor.style.border="2px dashed rgba(3, 83, 0, 1)"
    
})

off.addEventListener("click", () => {
    ligado = false
    off.classList.remove("natural")
    off.classList.add("desligado")
    on.classList.add("natural")
    on.classList.add("ligado")

    visor.innerHTML = "OFF"
    visor.style.color = "red"
    visor.style.boxShadow="0px 0px 20px rgba(255, 83, 83, 1)"
    visor.style.border="2px dashed rgba(114, 0, 0, 1)"
    
})





delet.addEventListener("click", () => {
    if(!ligado)return

    visor.innerHTML = visor.innerHTML.slice(0, -1)
    if (visor.innerHTML === "") {
        visor.innerHTML = "0"
    }
    if (visor.innerHTML === "0") {
        return
    }

})

//ABRE parenteses
abreParenteses.addEventListener("click", () => {
    if(!ligado)return

    let valorVisor = visor.innerHTML
    let ultimoDigito = valorVisor.slice(-1)

    if (visor.innerHTML === "0") {
        visor.innerHTML = "("
        return

    }
    if ("0123456789.()".includes(ultimoDigito)) {
        return
    }
    visor.innerHTML += "("

})

//FECHA parenteses
fechaParenteses.addEventListener("click", () => {
    if(!ligado)return

    let valorVisor = visor.innerHTML
    let ultimoDigito = valorVisor.slice(-1)

    let abertos = visor.innerHTML.split("(").length
    let fechados = visor.innerHTML.split(")").length
    console.log(abertos)
    console.log(fechados)


    if ("(+-*/.".includes(ultimoDigito)) {
        return
    }

    if (abertos > fechados) {
        visor.innerHTML += ")"
    }

})


//limpar
limpar.addEventListener("click", () => {
    if(!ligado)return

    visor.innerHTML = "0"
    
    liberaOperador = false
    liberaVirgula = false
})

//numeros
numeros.forEach((el) => {
    
    el.addEventListener("click", (evt) => {
        if(!ligado)return

        let digitado = evt.target.innerHTML
        if (visor.innerHTML === "0") {
            visor.innerHTML = digitado
            liberaOperador = true
            return
        }

        visor.innerHTML += digitado
        liberaOperador = true
    })
})

//operadores
operadores.forEach((el) => {
    
    el.addEventListener("click", (evt) => {
        if(!ligado)return
        liberaVirgula = false
        let valorVisor = visor.innerHTML
        let ultimoDigito = valorVisor.slice(-1)
        let digitado = evt.target.innerHTML

        if ("(.+-*/".includes(ultimoDigito)) {
            return
        }

        if (digitado === "x") {
            digitado = "*"
        }

        if (liberaOperador) {
            visor.innerHTML += digitado
        }

        liberaOperador = false
    })
})

//virgula
virgula.addEventListener("click", (evt) => {
    if(!ligado)return

    virgula.innerHTML = "."

    let valorVisor = visor.innerHTML
    let ultimoDigito = valorVisor.slice(-1)


    if (!liberaVirgula) {
        liberaVirgula = true

        if (visor.innerHTML === "0") {
            visor.innerHTML = "0."

        } else if ("+-*/".includes(ultimoDigito)) {
            visor.innerHTML += "0."
        } else {
            visor.innerHTML += "."
        }

    }

})


//resultado
igual.addEventListener("click", () => {
    if(!ligado)return

    liberaOperador = true
    liberaVirgula = false

    let res = eval(visor.innerHTML)
    visor.innerHTML = res
})

