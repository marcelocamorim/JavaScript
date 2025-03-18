const caixa=document.querySelector("#caixa")

// const curso="JavaScript"
// const canal="CFB cursos"
// // const frase="Este é o curso de "+curso+" do canal "+canal

// const frase=`Este é o curso de ${curso} do canal ${canal}`

// caixa.innerHTML=frase


const carros=["polo","golf","T-cross","HRV"]
let ul=`<ul>`
carros.map((el)=>{
    ul+=`<li>${el}</li>`
})
ul+`</ul>`

caixa.innerHTML=ul