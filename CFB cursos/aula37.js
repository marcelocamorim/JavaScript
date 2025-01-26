//Parando a propagação do evento com o método stopPropagation -

const caixa1=document.querySelector("#caixa1")
const cursos=[...document.querySelectorAll(".curso")]

caixa1.addEventListener("click",(evt)=>{
    console.log("clicooou")
})

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        evt.stopPropagation()
    })
})

//evento foi add à div caixa1 porém todos os elementos filhos dessa div também herdam esse evento

//para parar o evento nos filhos criamos um array com todos eles -> usando map adicionamos um evento em todos -> evt é o olemento que dispara o evento -> loggo adicionamos stopPpropagation em evt

//o evento funciona na div caixa1 mas foi parado nos elementos filhos