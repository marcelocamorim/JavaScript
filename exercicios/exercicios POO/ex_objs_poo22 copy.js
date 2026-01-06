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
    constructor(nome) {
        this.nome = nome
        this.notas = []
    }
}

class Turma {
    constructor(nome) {
        this.nome = nome
        this.alunos = []
        this.alunosMedias = []
    }
    espaço() {
        console.log(`---------------------------------`)


    }

    adicionarAluno(aluno) {
        const alunoExistente = this.alunos.find(a => a.nome === aluno.nome)

        if (alunoExistente) {
            console.log(`ERRO - Aluno "${aluno.nome}" já Cadastrado`)
            this.espaço()
            return
        }

        this.alunos.push(aluno)
        console.log(`Aluno ${aluno.nome} Adicionado com Sucesso!`)
        this.espaço()

    }

    adicionarNotas(nomeAluno, nota) {
        const alunoExistente = this.alunos.find(a => a.nome === nomeAluno)

        if (!alunoExistente) {
            console.log(`ERRO ao Lançar notas - Aluno "Não" Cadastrado`)
            this.espaço()
            return
        }

        alunoExistente.notas = (nota)
        console.log(`Notas do Aluno ${nomeAluno} Adicionadas com Sucesso!`)
        this.espaço()

    }

    calcularMedia(nomeAluno) {
        const alunoExistente = this.alunos.find(a => a.nome === nomeAluno)
        const notas = alunoExistente.notas

        if (!alunoExistente) {
            console.log(`ERRO - Aluno ${nomeAluno} "Não Cadastrado!"`)
            return
        }
        if (!notas.length) {
            console.log(`ERRO - Aluno ${nomeAluno} "Sem notas Cadastradas!"`)
            return
        }


        let soma = notas.reduce((acc, val) => acc + val, 0)
        let media = soma / notas.length
        console.log(`Aluno: ${nomeAluno} - Média: ${media}`)
        this.espaço()
        return media
    }

    mostrarBoletim() {
        console.log(`Média dos Alunos Cadastrados`)
        this.alunos.forEach((el) => {
            this.calcularMedia(el.nome)            
        })
    }

    melhorAluno() {
        this.alunosMedias= this.alunos.map((el) => {
            this.calcularMedia(el.nome)            
        })
    }
}


const aluno1 = new Aluno("joão")
const aluno2 = new Aluno("maria")
const aluno3 = new Aluno("amanda")
const aluno4 = new Aluno("katia")

const turma1 = new Turma("ensino médio")
turma1.adicionarAluno(aluno1)
turma1.adicionarAluno(aluno1)
turma1.adicionarAluno(aluno3)
turma1.adicionarAluno(aluno4)
turma1.adicionarNotas("joão", [10, 10, 10, 10, 10])
turma1.adicionarNotas("maria", [8, 8, 8, 8, 8, 8])
turma1.adicionarNotas("amanda", [7, 7, 7, 7, 7, 7])
turma1.adicionarNotas("katia", [5, 5, 5, 5, 5, 5])

turma1.calcularMedia("joão")
turma1.calcularMedia("amanda")
turma1.calcularMedia("katia")

turma1.mostrarBoletim()



