//Aprendendo sobre FETCH para consumo de APIs em Javascript #P1 - Curso de Javascript - Aula 122

const endpoint="https://cfbcursos.repl.co/"
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})