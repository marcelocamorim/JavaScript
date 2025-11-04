// 🔹 2. Sistema de notas com ranking
// Crie um objeto turma com um array alunos, cada aluno sendo { nome, notas: [] }.
// Adicione métodos:
// calcularMedia(nome)
// ranking() → retorna uma lista de alunos ordenada da maior para a menor média.
// 🧠 Dica: use map() e sort() juntos para gerar o ranking.

let turma = {
    alunos: [
        { nome: "joão", notas: [5, 6, 8, 10, 9, 7, 8, 8, 4, 9] },
        { nome: "maria", notas: [10, 10, 10, 8, 5, 6, 9, 10, 4, 6] },
        { nome: "fabio", notas: [8, 9, 7, 5, 3, 2, 6, 4, 5, 9] },
        { nome: "bruno", notas: [3, 5, 6, 4, 2, 1, 6, 7, 9, 5] },
        { nome: "miguel", notas: [10, 8, 9, 8, 7, 10, 9, 10, 8, 9] },
    ],

    calcularMedia: function (nome) {
        let aluno = this.alunos.find((a => a.nome === nome))
        let nota = aluno.notas

        if (!aluno) {
            console.log(`Aluno ${nome} não cadastrado`)
            return
        }

        let soma = nota.reduce((acc, val) => acc + val, 0)
        let media = soma / nota.length
        console.log(` Aluno ${nome} - Media ${media}`)
        return media
    },

    ranking: function () {
        let alunosRankeados = [...this.alunos].sort((a, b) => {
            let mediaA = a.notas.reduce((acc, val) => acc + val, 0) / a.notas.length
            let mediaB = b.notas.reduce((acc, val) => acc + val, 0) / b.notas.length
            return mediaB - mediaA
        })

        alunosRankeados.map((el, i) => {

            let soma=el.notas.reduce((acc,val)=>acc+val,0)
            let media=soma/el.notas.length

            console.log(`${i+1}° lugar: ${el.nome} com Média: ${media}`)
            return media
        })

    }
}

turma.calcularMedia("fabio")
turma.ranking()

