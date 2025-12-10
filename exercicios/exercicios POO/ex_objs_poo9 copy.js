// 🔹 5. Cadastro de alunos
// Crie um objeto escola que armazena alunos em um array, cada aluno sendo {nome, notas: []}.
// Métodos:
// adicionarAluno(nome)
// adicionarNota(nome, nota)
// calcularMedia(nome)

const escola={
    alunos:[
        {nome:"joão", notas:[10,8,6,5,7,3]},
        {nome:"maria", notas:[2,3,4,6,7,2]},
        {nome:"leticia", notas:[5,8,9,10,6,7]},
    ],

    adicionarAluno:function(nom){
        const alunoExistente=this.alunos.find(a=>a.nome===nom)

        if(alunoExistente){
            console.log(`Aluno ${nom} já cadastrado no sistema`)
            return
        }

        this.alunos.push({nome:nom, notas:[]})
        console.log(`Aluno ${nom} Adicionado com Sucesso!`)
    },

    adicionarNotas:function(nom,not){
        const alunoExistente=this.alunos.find(a=>a.nome===nom)

        if(!alunoExistente){
            console.log(`Aluno ${nom} não cadastrado - cadastre antes de adicionar notas!`)
        }

        alunoExistente.notas.push(...not)
        console.log(`Notas Adicionadas com Sucesso! `)
    },

    calcularMedia:function(nom){
        const alunoExistente=this.alunos.find(a=>a.nome===nom)

        let media = alunoExistente.notas.reduce((acc,val)=> acc+ val / alunoExistente.notas.length,0 )

        let status=null
        media>5?status="Aprovado":status="Reprovado"

        console.log(`Aluno ${nom} - Media: ${media.toFixed(2)} - ${status}`)
        return media
    }
}

escola.adicionarAluno("cleide")
escola.adicionarNotas("cleide",[10,10,10,10,10,10])

escola.calcularMedia("maria")
console.log(escola.alunos)
