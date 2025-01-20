/*
getElementById 
O método getElementById em JavaScript é usado para selecionar um elemento do DOM (Document Object Model) com base no valor de seu atributo id. Ele retorna uma referência direta ao elemento correspondente ou null caso nenhum elemento seja encontrado.

*/

// const dc1=document.getElementById("c1")
// console.log(dc1)
// console.log(dc1.id)
// console.log(dc1.innerHTML)

// dc1.innerHTML="testando 1,2,3"
//altera o conteudo do c1 para o conteudo especificado em innerHTML

//-----------------------------------------------------------------------

// const dc1=document.getElementById("c1")
// const dc2=document.getElementById("c2")
// const dc3=document.getElementById("c3")
// const dc4=document.getElementById("c4")
// const dc5=document.getElementById("c5")
// const dc6=document.getElementById("c6")


// const arrayElements=[dc1,dc2,dc3,dc4,dc5,dc6]
// for(a of arrayElements){
//     a.innerHTML="testando 1,2,3"
// }

//usa o "for of" para iterar sobre cada elemento do array e modificar o elemento com o innerHTML

//-----------------------------------------------------------------------


const dc1=document.getElementById("c1")
const dc2=document.getElementById("c2")
const dc3=document.getElementById("c3")
const dc4=document.getElementById("c4")
const dc5=document.getElementById("c5")
const dc6=document.getElementById("c6")

const arrayElements=[dc1,dc2,dc3,dc4,dc5,dc6]

arrayElements.map((e)=>{
    //e.innerHTML="CFB cursos"
    console.log(e)
})

//percorre os elementos do array similar ao exemplo com "for of"

