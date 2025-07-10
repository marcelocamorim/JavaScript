// Objetivo no JS (ex2.js):
// Criar um array com 3 nomes.

// Mostrar na tela.

// Inserir um novo nome na posição desejada com splice(pos, 0, nov

const listaNomes=document.getElementById("listaNomes")
const novoNome=document.getElementById("novoNome")
const posicaoInserir=document.getElementById("posicaoInserir")
const inserir=document.getElementById("inserir")

let anomes=["jony", "jonas","josef"]

const attLista=()=>{
    listaNomes.innerHTML=""
    anomes.map((el,i)=>{
        let listItem=document.createElement("li")
        listItem.innerHTML=`${i}-${el}`
        listaNomes.appendChild(listItem)

    })
}


inserir.addEventListener("click",()=>{
    let nome=novoNome.value
    let pos=parseInt(posicaoInserir.value)
    if(pos<=anomes.length && pos>=0){
        anomes.splice(pos,0,nome)
        attLista()
        nome=""
        pos=""
    }else{
        alert("Nome invalido! Tente novamente.")
    }

})

attLista()