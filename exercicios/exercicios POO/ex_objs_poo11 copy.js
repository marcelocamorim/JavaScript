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

    separarLinha:function(){
        console.log("----------------------------")
        
    },

    calcularMedia:function(aluno){
        let alunoExistente=this.alunos.find(a=>a.nome===aluno)

        if(!alunoExistente){
            console.log(`ERRO - Aluno ${aluno} Não Cadastrado no Sistema!`)
            this.separarLinha()
            return
        }

        let soma=alunoExistente.notas.reduce((acc,val)=>acc+val,0)
        let media=soma/alunoExistente.notas.length
        console.log(`Aluno: ${aluno} - Média: ${media}`)
        this.separarLinha()
        return media
    },

    rankingMedias:function(){
        let alunosRankeados = [...this.alunos].sort((a, b) => {
            let mediaA = a.notas.reduce((acc, val) => acc + val, 0) / a.notas.length
            let mediaB = b.notas.reduce((acc, val) => acc + val, 0) / b.notas.length            
            return mediaB - mediaA
        })

        alunosRankeados.map((el)=>{
            return this.calcularMedia(el.nome)
        })
    }
        
}

turma.rankingMedias()