// 🔹 Exercício 3 – Remover pessoas menores de idade
// Objetivo: Filtrar pessoas com 18 anos ou mais de um array de objetos.

const lista=document.getElementById("listaPessoas")
const btnFiltrar=document.getElementById("filtrarPessoas")


let pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "João", idade: 22 },
  { nome: "Lia", idade: 15 },
  { nome: "Carlos", idade: 30 }
]

const attLista=()=>{
    lista.innerHTML=""
    pessoas.map((el,i)=>{
        let li=document.createElement("li")
        if(el.idade>=18){
            li.innerHTML=`${el.nome} - ${el.idade} - Maior de idade`
        }else{
            li.innerHTML=`${el.nome} - ${el.idade} - Menor de idade`
        }
        lista.appendChild(li)
    })
}

btnFiltrar.addEventListener("click",()=>{
    pessoas=pessoas.filter(p=>p.idade>=18)
    attLista()
})

attLista()