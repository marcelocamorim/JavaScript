//Aprendendo sobre FETCH para consumo de APIs em Javascript #P3 - Curso de Javascript - Aula 124

const p_temp=document.getElementById("p_temp")
const p_nivel=document.getElementById("p_nivel")
const p_press=document.getElementById("p_press")
const btn_texto=document.getElementById("btn_texto")

const obterDados=()=>{
    const endpoint="https://cfbcursos.repl.co/"
    fetch(endpoint)
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML="Temperatura: " + dados.temperatura
        p_nivel.innerHTML="Nível: " + dados.nivel
        p_press.innerHTML="Pressão: " + dados.pressao
    })
}

//let intervalo=setInterval(obterDados,3000)

let dados={
    nome:"bruno",
    canal:"CFB cursos",
    curso:"JavaScript"

}

let cabecalho={
    method:"POST",
    body:JSON.stringify(dados)
}

const gravarDados=()=>{
    const endpoint="https://cfbcursos.repl.co/"
    fetch(endpoint,cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btn_texto.addEventListener("click",(evt)=>{
    gravarDados()
})

// 1. Cabeçalho (cabecalho)
// Define que a requisição será POST → ou seja, enviar dados para o servidor.
// body pega o objeto dados e transforma em JSON (porque a web se comunica nesse formato).

// 2. Fetch
// Faz a requisição HTTP para a URL (endpoint).
// Usa as configurações definidas em cabecalho.
// Nesse caso → envia os dados junto no corpo da requisição.

// 3. Primeiro .then
// O servidor responde com dados brutos.
// .json() transforma essa resposta em objeto JavaScript legível.
// Isso também retorna uma Promise, que será passada para o próximo .then.

// 4. Segundo .then
// Agora sim você tem o JSON convertido em objeto.
// console.log(ret) mostra no console o que a API respondeu (por exemplo, uma confirmação de que os dados foram gravados).


// resumo
// cabecalho → define o método e prepara os dados.
// fetch → faz a requisição para o servidor.
// primeiro .then → converte a resposta em JSON.
// segundo .then → usa (ou exibe) os dados recebidos.