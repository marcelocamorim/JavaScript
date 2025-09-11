//Usando FETCH para ler arquivos em Javascript - FETCH #P5 - Curso de Javascript - Aula 127

const texto=document.getElementById("texto")

const endpoint="texto.txt"

fetch(endpoint)
.then(res=>res.text())
.then(res=>{
    res=JSON.parse(res);    
    console.log(res);
    console.log(res.canal);
    console.log(res.curso);
})

// Esse código usa fetch para ler um arquivo local (texto.txt).
// Converte o conteúdo do arquivo em string (.text()).
// Depois usa JSON.parse() para transformar a string em objeto JavaScript.
// Finalmente, acessa e imprime as propriedades desse objeto.