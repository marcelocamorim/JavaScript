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
    constructor(nome,notas){
        this.nome=nome  
        this.notas=notas    
    }
}

class Turma{
    constructor(nome, alunos){
        this.nome=nome
        this.alunos=alunos

    }
}

const aluno1 = new Aluno("joão", [10,10,10,10])
const aluno2 = new Aluno("maria", 10,10,10,10)
const aluno3 = new Aluno("pedro", 10,10,10,10)

console.log(aluno1.notas)