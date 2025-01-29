const caixa1=document.querySelector("#caixa1")
const cursos=["HTML","CSS","JavaScript","PHP","React","MySql","ReactNative"]

cursos.map((el,i)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+i)
    novoElemento.setAttribute("class","curso c1")
    
    novoElemento.innerHTML=(el)
    caixa1.appendChild(novoElemento)

})
