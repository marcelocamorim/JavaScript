//📌 Exercícios com Objetos (nível intermediário)
// 🔹 1. Agenda de contatos
// Crie um objeto agenda que armazena contatos (nome e telefone) em um array interno.
// Adicione métodos para:
// adicionarContato(nome, telefone)
// listarContatos()
// buscarContato(nome) (retorna o telefone ou "não encontrado").


let agenda={
    contatos:[
        {nome:"marcelo", telefone:95959595},
    ],

    addContato:function(nom, tel){
        this.contatos.push({nome:nom, telefone:tel})
    },

    listarContatos:function(){
        this.contatos.forEach((el)=>{
            console.log(`nome: ${el.nome}, telefone: ${el.telefone}`)
        })
    }

}

agenda.addContato("joão", 5555555555)

agenda.listarContatos()





// 2. Controle de estoque
// Crie um objeto estoque que armazene produtos (nome e quantidade).
// Adicione métodos para:
// adicionarProduto(nome, quantidade)
// removerProduto(nome, quantidade) (não deixar a quantidade ficar negativa)
// listarProdutos() (mostrar todos os produtos e quantidades).

// 🔹 3. Carrinho de compras avançado
// Crie um objeto carrinho que armazene produtos como objetos {nome, preco, quantidade}.
// Adicione métodos para:
// adicionarProduto(nome, preco, quantidade)
// removerProduto(nome)
// calcularTotal() (somar todos os preços * quantidades).


// 🔹 4. Jogo de adivinhação com objeto
// Crie um objeto jogo com:
// Uma propriedade numeroSecreto (gerado aleatoriamente entre 1 e 10).
// Um método adivinhar(numero) que retorna:
// "Acertou!" se for igual.
// "Muito alto" ou "Muito baixo" caso contrário.



// 🔹 5. Cadastro de alunos
// Crie um objeto escola que armazena alunos em um array, cada aluno sendo {nome, notas: []}.
// Métodos:
// adicionarAluno(nome)
// adicionarNota(nome, nota)
// calcularMedia(nome)