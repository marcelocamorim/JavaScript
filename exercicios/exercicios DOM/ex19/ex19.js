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
let liberaOperador = false


limpar.addEventListener("click", () => {
    visor.innerHTML = 0
})

numeros.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (visor.innerHTML === "0") {
            visor.innerHTML = ""
        }

        const valor=evt.target.innerHTML
        visor.innerHTML += valor
        liberaOperador = true


    })
})

operador.forEach((el) => {
    el.addEventListener("click", (evt) => {
        const valor=evt.target.innerHTML
        if (liberaOperador) {
            if (evt.target.innerHTML === "x") {
                visor.innerHTML += "*"
                return
            }
            visor.innerHTML += valor
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

    if ("+-*/(".includes(ultimoVal)) {
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
    if (/\d/.test(ultimoValor)) {
        return false
    }

    if ("+-*/".includes(ultimoValor)) {
        return true
    }

    return true

}
abreParenteses.addEventListener("click", () => {
    if (visor.innerHTML === "0") {
        visor.innerHTML = "("
        return
    }

    if (liberaAbrirParenteses()) {
        visor.innerHTML += "("
    }
})

function liberaFecharParentes() {
    const valor = visor.innerHTML
    const ultimoValor = valor.slice(-1)

    const abertos = valor.split("(").length - 1
    const fechados = valor.split(")").length - 1

    if (ultimoValor === "(") {
        return false
    }
    if (abertos <= fechados) {
        return false
    }
    if ("+-*/".includes(ultimoValor)) {
        return false
    }

    return true
}
fechaParenteses.addEventListener("click", () => {
    if (visor.innerHTML === "0") return

    if (liberaFecharParentes()) {
        visor.innerHTML += ")"
    }
})

igual.addEventListener("click", () => {
    const res=eval(visor.innerHTML)

    visor.innerHTML = res

})