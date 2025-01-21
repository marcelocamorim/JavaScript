//getElementsByTagName

//O método document.getElementsByTagName é usado em JavaScript para selecionar elementos do DOM com base no nome da tag (por exemplo, div, p, span, etc.). Ele retorna uma coleção HTML de todos os elementos correspondentes ao nome da tag especificado.




//const colecaoHTML=document.getElementsByTagName("div")
//seleciona as tags "div" e retorna uma HTML colection


const colecaoHTML=[...document.getElementsByTagName("div")]
//seleciona as tags "div" e retorna um array - um array possui mais metodos para se trabalhar
console.log(colecaoHTML)