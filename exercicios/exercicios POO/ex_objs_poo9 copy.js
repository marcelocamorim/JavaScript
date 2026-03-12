// 🔹 5. Cadastro de alunos
// Crie um objeto escola que armazena alunos em um array, cada aluno sendo {nome, notas: []}.
// Métodos:
// adicionarAluno(nome)
// adicionarNota(nome, nota)
// calcularMedia(nome)

const escola = {
    alunos: [
        { nome: "leila", notas: [10, 8, 10, 5] }
    ],
    separar: function () {
        console.log('---------------------------------------------')
    },

    adicionarAlunos: function (nome) {
        const alunoExistente = this.alunos.find(a => a.nome === nome)
        if (alunoExistente) {
            console.log(`Alunos "${nome}" já consta em cadastro`)
            this.separar()
            return
        }
        this.alunos.push({ nome: nome, notas: [] })
        console.log(`Aluno "${nome}" Adicionado com sucesso!`)
        this.separar()
    },

    adicionarNotas: function (nome, notas) {
        const alunoExistente = this.alunos.find(a => a.nome === nome)
        if (!alunoExistente) {
            console.log(`ERRO - Aluno "${nome}" não cadastrado`)
            this.separar()

            return
        }

        alunoExistente.notas.push(...notas)
        console.log(`Notas de "${nome}" Adicionadas com sucesso!`)
        this.separar()

    },

    calcularMedia: function (nome) {
        const alunoExistente = this.alunos.find(a => a.nome === nome)
        if (!alunoExistente) {
            console.log(`ERRO - Aluno "${nome}" não cadastrado`)
            this.separar()
            return
        }
        if (!alunoExistente.notas.length) {
            console.log(`ERRO - Aluno "${nome}" não possui notas cadastradas`)
            this.separar()
            return
        }

        const soma = alunoExistente.notas.reduce((acc, val) => {
            return acc + val
        }, 0)
        const media = soma / alunoExistente.notas.length

        console.log(`Calculo de média`)
        console.log(`Aluno: "${nome}" - Média: ${media}`)
        this.separar()
        return media
    },

    listarAlunos: function () {
        this.alunos.forEach((el) => {
            console.log(`Aluno: ${el.nome}`)
            if (el.notas.length) {
                console.log(`Notas: ${el.notas.join(", ")}`)

            } else {
                console.log(`Notas: --Sem notas cadastradas`)
            }
            this.separar()
        })

    }
}


escola.adicionarAlunos("joão")
escola.adicionarAlunos("joão")
escola.adicionarAlunos("maria")

// escola.calcularMedia("joão")
// escola.calcularMedia("leticia")
// escola.calcularMedia("leila")

escola.adicionarNotas("joão",10,10,10,10)
escola.listarAlunos()