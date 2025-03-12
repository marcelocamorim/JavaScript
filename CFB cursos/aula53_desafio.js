const btn_soma=document.querySelector("#btn_soma")
const btn_subtracao=document.querySelector("#btn_subtracao")
const btn_Multiplicacao=document.querySelector("#btn_multiplicacao")
const btn_Divisao=document.querySelector("#btn_divisao")

const valor1=document.getElementById("valor1")
const valor2=document.getElementById("valor2")
const res=document.querySelector("#res")


const op=[
    ()=>{
        const val=[Number(valor1.value),Number(valor2.value)]
        res.value=val[0]+val[1]
    },
    ()=>{
        const val=[Number(valor1.value),Number(valor2.value)]
        res.value=val[0]-val[1]
    },
    ()=>{
        const val=[Number(valor1.value),Number(valor2.value)]
        res.value=val[0]*val[1]
    },
    ()=>{
        const val=[Number(valor1.value),Number(valor2.value)]
        res.value=val[0]/val[1]
    }
]


btn_soma.addEventListener("click",op[0])
btn_subtracao.addEventListener("click",op[1])
btn_Multiplicacao.addEventListener("click",op[2])
btn_Divisao.addEventListener("click",op[3])


