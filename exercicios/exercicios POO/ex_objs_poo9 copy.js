// 🔹 5. Cadastro de alunos
// Crie um objeto escola que armazena alunos em um array, cada aluno sendo {nome, notas: []}.
// Métodos:
// adicionarAluno(nome)
// adicionarNota(nome, nota)
// calcularMedia(nome)

const escola={
    alunos:[
        {nome:"joão", notas:[10,8,6,5,7,3]},
        {nome:"maria", notas:[9,8,4,9,10,9]},
        {nome:"leticia", notas:[5,8,9,10,6,7]},
    ],

    adicionarAluno:function(nome){
        const alunoExistente=this.alunos.find(a=>a.nome===nome)

        if(alunoExistente){
            console.log(`Aluno ${nome} já cadastrado no sistema`)
            return
        }

        
    }
}

