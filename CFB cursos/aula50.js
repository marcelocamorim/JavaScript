// O método .reduce() em JavaScript é usado para reduzir um array a um único valor, aplicando uma função que acumula o resultado ao longo de todos os elementos do array.

// Sintaxe:
// array.reduce(callback(acumulador, elementoAtual, índice, array), valorInicial)

const p_array=document.querySelector("#array")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[1,2,3,4,5]
let aux=[]

p_array.innerHTML="["+elementos_array+"]"

btnReduzir.addEventListener("click", (evt)=>{
    resultado.innerHTML=elementos_array.reduce((a,el,i)=>{
        return el+a
    })
})
