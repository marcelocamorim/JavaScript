const on = document.getElementById("on")
const off = document.getElementById("off")
const limpar = document.getElementById("limpar")

const abreParenteses = document.getElementById("abreParenteses")
const fechaParenteses = document.getElementById("fechaParenteses")

const virgula = document.getElementById("virgula")
const igual = document.getElementById("igual")


const numeros = [...document.querySelectorAll(".numeros")]
const operador = [...document.querySelectorAll(".operador")]

let visor = document.getElementById("visor")

let ligado = false
let desligado = true


limpar.addEventListener("click", () => {
    visor.innerHTML = 0
})

numeros.forEach((el) => {
    el.addEventListener("click", () => {
        if (visor.innerHTML === "0") {
            visor.innerHTML = ""
        }

        visor.innerHTML += el.innerHTML
        liberaOperador = true


    })
})

operador.forEach((el) => {
    el.addEventListener("click", () => {
        if (liberaOperador) {
            visor.innerHTML += el.innerHTML
            liberaOperador = false
        }
    })
})

function liberaVirgula() {
    const valor = visor.innerHTML
    const ultimoValor = valor.split(/[\+\-\*\/\(\)]/).pop()
    return ultimoValor.includes(".")
}

virgula.addEventListener("click", () => {
    const val = visor.innerHTML
    const ultimoVal = val.slice(-1)

    if ("+-*/".includes(ultimoVal)) {
        visor.innerHTML += "0."
        return
    }

    if (visor.innerHTML === "0") {
        visor.innerHTML = "0."
        return
    }

    if (!liberaVirgula()) {
        visor.innerHTML += "."
    }
})

function liberaAbrirParenteses() {
    const valor = visor.innerHTML
    const ultimoValor = valor.slice(-1)

    if (ultimoValor === "(") {
        return false
    }
    if (ultimoValor === ")") {
        return false
    }
    if (ultimoValor === ".") {
        return false
    }

    return true

}
abreParenteses.addEventListener("click", () => {
    if (visor.innerHTML === "0") {
        visor.innerHTML = "("
    }

    if (liberaAbrirParenteses()) {
        visor.innerHTML += "("
    }
})

function liberaFecharParentes(){
    const valor= visor.innerHTML
    const ultimoValor=visor.slice(-1)

    const abertos=valor.split("(").length-1
    const fechados=valor.split(")").length-1

    if(ultimoValor==="(") return false
    if(fechados>=abertos) return false
    if("+-*/".includes(ultimoValor)) return false

    return true
}