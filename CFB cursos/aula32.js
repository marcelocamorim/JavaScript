//O método document.getElementsByClassName é usado em JavaScript para selecionar elementos do DOM com base no(s) nome(s) da classe especificado(s). Ele retorna uma HTMLCollection contendo todos os elementos que possuem a classe ou classes fornecidas.

const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursosC2=[...document.getElementsByClassName("c2")]
const Especial=document.getElementsByClassName("curso")[2]//seleciona apenas o elemento 2, lembrando que o array inicia em 0


console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(Especial)

cursosTodos.map((el)=>{ //usa o método .map para percorrer o array
    el.classList.add("destaque")//adiciona uma classe em cada elemento
})





