const btn_soma=document.querySelector("#btn_Soma")
const btn_subtracao=document.querySelector("btn_subtracao")
const btn_Multiplicacao=document.querySelector("btn_Multiplicacao")
const btn_Divisao=document.querySelector("btn_Divisao")
const res=document.querySelector("#res")

let op=[
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0]+Number(val[1]))
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0]-Number(val[1]))
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0]*Number(val[1]))
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(val[0]/Number(val[1]))
    }
]

btn_soma.addEventListener("click",op[0])
btn_subtracao.addEventListener("click",op[1])
btn_Multiplicacao.addEventListener("click",op[2])
btn_Divisao.addEventListener("click",op[3])


