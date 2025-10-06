// 🔹 5. Cadastro de alunos
// Crie um objeto escola que armazena alunos em um array, cada aluno sendo {nome, notas: []}.
// Métodos:
// adicionarAluno(nome)
// adicionarNota(nome, nota)
// calcularMedia(nome)


let escola = {
    alunos: [
        { nome: "joão", notas: [10, 6, 9, 5,] },
        { nome: "augusto", notas: [10, 8, 7, 3,] },
        { nome: "vinicius", notas: [10, 8, 10, 5,] },
        { nome: "Jonny", notas: [4, 2, 3, 4,] }
    ],


    addAluno: function (nom) {
        let aluno = this.alunos.find(a => a.nome === nom)
        if (aluno) {
            console.log(`Aluno ${nom} já cadastrado`)
            return
        }
        this.alunos.push({ nome: nom, notas: [] })
    },

    addNota: function (nom, not) {
        let aluno = this.alunos.find(a => a.nome === nom)
        if (aluno) {
            aluno.notas.push(...not)
        } else {
            console.log(`Aluno ${nom} não cadastrado`)
        }

    },

    cadastroCompleto: function (nom, not) {
        let aluno = this.alunos.find(a => a.nome === nom)
        if (!aluno) {
            this.alunos.push({ nome: nom, notas: not })
        } else {
            console.log(`Aluno ${nom} já cadastrado`)
        }
    },

    calcMedia: function (nom) {
        let aluno = this.alunos.find(a => a.nome === nom)
        let nota = aluno.notas
        let soma = nota.reduce((acc, val) => acc + val, 0)
        let media = soma / nota.length
        console.log(`A média de nota do aluno ${nom} é: ${media}`)
    },

    listarAlunos: function () {
        this.alunos.forEach((el) => {
            if (!el.notas || el.notas.length === 0) {
                console.log(`Aluno ${el.nome} - sem notas registradas`)
            }

            let soma = el.notas.reduce((acc, val) => acc + val, 0)
            let media = soma / el.notas.length

            let status= media>=5? "Aprovado!!":"Reprovado"

            console.log(`Aluno: ${el.nome} - Media: ${media.toFixed(2)} - ${status}.`)

        })
    }
}

// escola.addAluno("marcelo")
// escola.addNota("pedro", [2, 5, 10, 8])
// escola.addNota("marcelo", [10, 10, 10, 10])

// escola.cadastroCompleto("mariaa", [5,5,5,5])
// escola.cadastroCompleto("mariaa", [7,7,7,7])

// escola.calcMedia("marcelo")
escola.listarAlunos()

// console.log(escola.alunos)