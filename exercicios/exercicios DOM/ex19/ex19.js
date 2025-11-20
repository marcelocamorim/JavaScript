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
let liberaVirgula = false


abreParenteses.addEventListener("click", () => {
    let valorVisor = visor.innerHTML
    let ultimoDigito = valorVisor.slice(-1)

    if (visor.innerHTML === "0") {
        visor.innerHTML = "("
        return

    }
    if("0123456789.()".includes(ultimoDigito) ){
        return
    }    
    visor.innerHTML += "("     

})

fechaParenteses.addEventListener("click",()=>{
    let valorVisor=visor.innerHTML
    let ultimoDigito=valorVisor.slice(-1)

    let abertos=visor.innerHTML.split("(")-1
    let fechados=visor.innerHTML.split(")")-1
    

    if("(+-*/.".includes(ultimoDigito)){
        return
    }

    if(abertos<=fechados){
        visor.innerHTML+=")"
    }

})


//limpar
limpar.addEventListener("click", () => {
    visor.innerHTML = "0"
    liberaNumero = true
    liberaOperador = false
    liberaVirgula = false
})

//numeros
numeros.forEach((el) => {
    el.addEventListener("click", (evt) => {

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
        liberaVirgula = false

        let digitado = evt.target.innerHTML

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
    liberaOperador = false
    liberaVirgula = false

    let res = eval(visor.innerHTML)
    visor.innerHTML = res
})