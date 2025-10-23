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

class Aluno {
    constructor(nome, notas) {
        this.nome = nome
        this.notas = notas
    }

    info() {
        return `Aluno: ${this.nome} - Notas: ${this.notas}`
    }


}

class Turma {
    constructor(nome) {
        this.nome = nome
        this.alunos = []
        this.alunosMedia = []

    }

    separarInfo() {
        console.log("-------------------------")
    }

    adicionarAluno(aluno) {
        let alunoExistente = this.alunos.find((a => a.nome === aluno.nome))
        if (!alunoExistente) {
            this.alunos.push(aluno)
            console.log(`Aluno ${aluno.nome} Adicionado a turma com sucesso!`)
            this.separarInfo()
        } else {
            console.log(`Aluno ${aluno.nome} já está na turma`)
            this.separarInfo()
            return
        }
    }

    removerAluno(alunoNome) {
        let alunoExistente = this.alunos.find((a => a.nome === alunoNome))
        if (!alunoExistente) {
            console.log(`Aluno ${alunoNome} não está na turma`)
            this.separarInfo()
            return
        } else {
            this.alunos = this.alunos.filter((a => a.nome !== alunoNome))
            console.log(`Aluno: ${alunoNome} Removido da turma! `)
            this.separarInfo()

        }
    }

    lancarNota(alunoNome, nota) {
        let alunoExistente = this.alunos.find(a => a.nome === alunoNome)
        if (!alunoExistente) {
            console.log(`Aluno: ${alunoNome} não está na turma - Impossivel lançar notas!`)
            this.separarInfo()
            return
        } else {
            alunoExistente.notas.push(nota)
        }

    }

    calcularMediaIndividual(alunoNome) {
        let alunoExistente = this.alunos.find((a => a.nome === alunoNome))
        let notas = alunoExistente.notas

        let soma = alunoExistente.notas.reduce((acc, val) => acc + val, 0)
        let media = soma / notas.length
        console.log(`Aluno: ${alunoNome} - Média: ${media.toFixed(2)}`)
        this.separarInfo()
        return { nome: alunoNome, media }
    }

    mostrarBoletim() {
        console.log("Alunos E Médias da turma:")
        this.alunosMedia = this.alunos.map((el) => {
            return this.calcularMediaIndividual(el.nome)
        })

    }

    melhorAluno() {
        let melhor = this.alunosMedia.reduce((a, b) => a.media > b.media ? a : b)
        console.log(`Melhor aluno: ${melhor.nome} - Média: ${melhor.media.toFixed(2)}`)
    }
}

const aluno1 = new Aluno("joão", [10, 10, 10, 10])
const aluno2 = new Aluno("maria", [9, 9, 9, 9])
const aluno3 = new Aluno("pedro", [8, 8, 8, 8])
const aluno4 = new Aluno("fabiana", [])

const turma1 = new Turma("ensino médio")

turma1.adicionarAluno(aluno1)
turma1.adicionarAluno(aluno2)
turma1.adicionarAluno(aluno3)
turma1.adicionarAluno(aluno4)

turma1.removerAluno("pedro")

turma1.lancarNota("fabiana", 2)
turma1.lancarNota("fabiana", 8)
turma1.lancarNota("fabiana", 6)
turma1.lancarNota("fabiana", 7)
console.log(turma1)
console.log(aluno4.info())

turma1.calcularMediaIndividual("joão")
turma1.mostrarBoletim()
turma1.melhorAluno()

