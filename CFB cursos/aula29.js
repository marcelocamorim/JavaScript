//operador this (voltar aqui mais pra frente)

function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    console.log(nome)
    console.log(nota)
}

aluno("marcelo", "100")