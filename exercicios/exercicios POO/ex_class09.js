// 🧠 PARTE 4 — Projeto Integrador
// 🔹 8. Sistema de Escola
// Crie:
// Uma classe Aluno com nome e notas (array).
// Uma classe Turma que armazena vários alunos.
// Métodos da Turma:
// adicionarAluno(aluno)
// calcularMediaGeral() → média de todos os alunos.
// melhoresAlunos() → retorna os com média >= 7.
// 🧠 Desafio extra: adicione um método removerAluno(nome).

class Aluno {
    constructor(nome, notas = []) {
        this.nome = nome
        this.notas = notas
    }

    info() {
        console.log(`Aluno: ${this.nome} - Notas: ${this.notas}`)
    }
}

class Turma {
    constructor() {
        this.alunos = []
    }


    adicionarAluno(aluno) {
        let alunoExistente = this.alunos.find(a => a.nome === aluno.nome)
        if (alunoExistente) {
            console.log(`Aluno: ${aluno.nome} já cadastrado`)
            return
        }

        this.alunos.push(aluno)
        console.log(`Aluno: ${aluno.nome} - Cadastrado com Sucesso!`)
    }

    removerAluno(aluno) {
        let alunoExistente = this.alunos.find(a => a.nome === aluno)        
        if (!alunoExistente) {
            console.log(`Aluno: ${aluno} não existe - Digite um nome Válido`)
            return
        }

        this.alunos = this.alunos.filter(a => a.nome !== aluno)
        console.log(`Aluno ${aluno} Removido da turma`)


    }

    calcularMediaGeral() {
        this.alunos.forEach((el) => {
            let soma = el.notas.reduce((acc, val) => acc + val, 0)
            let media = soma / el.notas.length
            console.log(`Aluno: ${el.nome} - Media: ${media.toFixed(2)}`)
            return media
        })
    }

    melhoresAlunos() {
        this.alunos.forEach((el) => {
            let soma = el.notas.reduce((acc, val) => acc + val, 0)
            let media = soma / el.notas.length
            console.log("Melhores Alunos:")
            if (media >= 7) {
                console.log(`Aluno: ${el.nome} - Media: ${media.toFixed(2)}`)
            }
            return media
        })
    }

    listarAlunos() {
        console.log("Alunos Registrados na Turma:")
        this.alunos.forEach(el => el.info())
    }
}

const aluno1 = new Aluno("João", [5, 5, 5, 5, 6, 7])
const aluno2 = new Aluno("Maria", [10, 5, 8, 10, 9, 8])
const aluno3 = new Aluno("Cleide", [3, 2, 1, 5, 8, 7,])

const turma1 = new Turma()
turma1.adicionarAluno(aluno1)
turma1.adicionarAluno(aluno2)
turma1.adicionarAluno(aluno3)
turma1.adicionarAluno(aluno2)

turma1.calcularMediaGeral()
turma1.melhoresAlunos()

turma1.listarAlunos()
turma1.removerAluno("João")
turma1.listarAlunos()




