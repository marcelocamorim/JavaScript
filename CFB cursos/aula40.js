// O método document.createElement() em JavaScript é usado para criar novos elementos HTML de forma dinâmica. Este método retorna um elemento vazio do tipo especificado, que você pode personalizar e adicionar ao DOM.

// Sintaxe
// document.createElement(tagName);
// tagName: O nome da tag HTML que você deseja criar (como div, p, span, button, etc.). Deve ser uma string.




const caixa1=document.querySelector("#caixa1")
const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL","ReactNative"]

cursos.map((el,i)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+i)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML=(el)
    caixa1.appendChild(novoElemento)
})


















// const caixa1=document.querySelector("#caixa1")
// const cursos=["HTML","CSS","JavaScript","PHP","React","MySql","ReactNative"]

// cursos.map((el,i)=>{
//     const novoElemento=document.createElement("div")
//     novoElemento.setAttribute("id","c"+i)
//     novoElemento.setAttribute("class","curso c1")
    
//     novoElemento.innerHTML=(el)
//     caixa1.appendChild(novoElemento)

// })
