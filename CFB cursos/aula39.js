//parents and childrens 

const caixa1=document.querySelector("#caixa1")
const curso=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")



console.log(c1_2.parentNode.parentNode.parentNode.children[0])//pega o filho2 do pai do pai do elemento

//console.log(caixa1.children[1].innerHTML="teste teste") //pegando children

