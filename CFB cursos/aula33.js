const divTodas=[...document.getElementsByTagName("div")]
const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursosC2=[...document.getElementsByClassName("c2")]


//const query_divTodas=document.querySelector("div")
//console.log(query_divTodas)
//query selector seleciona apenas o primeiro elemento especificado, no caso a primeira div de todas

//const query_divTodas=[...document.querySelectorAll("div")]
const query_cursoTodos=[...document.querySelectorAll(".curso")]//pega a classe .curso
const query_cursoEspecial=document.querySelectorAll("#c1")//pega ID #c1
const query_divTodas=[...document.querySelectorAll("div > p")] //pega todos <p> dentro de uma <div>

//const query_divTodas=[...document.querySelectorAll("div,p")] É possivel pegar mais de um elemento como nesse exemplo. pega <div> e <p>

//const query_divTodas=[...document.querySelectorAll("div[class]")] seleciona as <div> que possuem "class"



console.log(query_divTodas)
//query Selector All seleciona todos os elementos especificados, no caso, todas as divs - retorna uma nodelist(igual HTMLColection) - use sprad[...] para transformar em array




// console.log(divTodas)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(Especial)







