// Exercício 3 – Sistema de Escola

// Crie as classes:
// Aluno → nome, notas (array)
// Turma → nome, alunos (array)

// Métodos:
// adicionarAluno(aluno)
// lançarNota(nomeAluno, nota)
// calcularMedia(nomeAluno)
// mostrarBoletim() → exibe todos os alunos com suas médias

// Desafio extra:
// Crie um método melhorAluno() que retorna o aluno com a média mais alta.

class Aluno{
    constructor(nome){
        this.nome=nome
        this.notas=[]
    }
}

class Turma{
    constructor(nome){
        this.nome=nome
        this.alunos=[]
    }
}


const aluno1 = new Aluno("joão")
const aluno2 = new Aluno("maria")
const aluno3 = new Aluno("amanda")
const aluno4 = new Aluno("katia")

const turma1 = new Turma("ensino médio")