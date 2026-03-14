// 🔹 2. Sistema de notas com ranking
// Crie um objeto turma com um array alunos, cada aluno sendo { nome, notas: [] }.
// Adicione métodos:
// calcularMedia(nome)
// ranking() → retorna uma lista de alunos ordenada da maior para a menor média.
// 🧠 Dica: use map() e sort() juntos para gerar o ranking.

const turma = {
    alunos: [
        { nome: "joão", notas: [5, 6, 8, 10, 9, 7, 8, 8, 4, 9] },
        { nome: "maria", notas: [10, 10, 10, 8, 5, 6, 9, 10, 4, 6] },
        { nome: "fabio", notas: [8, 9, 7, 5, 3, 2, 6, 4, 5, 9] },
        { nome: "bruno", notas: [3, 5, 6, 4, 2, 1, 6, 7, 9, 5] },
        { nome: "miguel", notas: [10, 8, 9, 8, 7, 10, 9, 10, 8, 9] },
    ],


    calcularMedia: function (nome) {
        const alunoExistente = this.alunos.find(a => a.nome === nome)
        if (!alunoExistente) {
            console.log(`ERRO - ALuno "${nome}" não cadastrado`)
            return
        }

        let soma = alunoExistente.notas.reduce((acc, val) => acc + val, 0)
        let media = soma / alunoExistente.notas.length
        return media
    },

    ranking: function () {
        let alunosPorMedia = []
        this.alunos.forEach((el) => {
            const media = this.calcularMedia(el.nome)
            alunosPorMedia.push({ nome: el.nome, mediaFinal: media })

        })

        alunosPorMedia.sort((a, b) => b.mediaFinal - a.mediaFinal)
        console.log(`Lista rankeada de alunos`)
        alunosPorMedia.forEach((el,i)=>{
            console.log(`${i+1}°Lugar - Aluno: "${el.nome}" Com média ${el.mediaFinal}`)
        })

    }

}

turma.ranking()