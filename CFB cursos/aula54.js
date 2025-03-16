//Coleção MAP em Javascript
//O método .shift() em JavaScript é usado para remover o primeiro elemento de um array e retornar esse elemento. É o oposto do método .pop(), que remove o último elemento.


const caixa=document.querySelector("#caixa")

let mapa=new Map()

mapa.set("curso", "JavaScript")
mapa.set(10,"CFB Cursos")
mapa.set(1,100)
mapa.set("canal",100)

console.log(mapa)

caixa.innerHTML=mapa.get("curso")

if (mapa.has("canal")){
    caixa.innerHTML="Achave está na coleção"
}else{
    caixa.innerHTML="A chave não está na coleção"
}

