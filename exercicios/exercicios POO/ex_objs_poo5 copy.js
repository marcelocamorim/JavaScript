//📌 Exercícios com Objetos (nível intermediário)
// 🔹 1. Agenda de contatos
// Crie um objeto agenda que armazena contatos (nome e telefone) em um array interno.
// Adicione métodos para:
// adicionarContato(nome, telefone)
// listarContatos()
// buscarContato(nome) (retorna o telefone ou "não encontrado").


let agenda = {
    contatos: [
        { nome: "joão", telefone: 111111111 },
        { nome: "maria", telefone: 222222222 },
        { nome: "leila", telefone: 333333333 },
        { nome: "andreia", telefone: 444444444 },
    ],

    adicionarContato: function (nom, tel) {
        this.contatos.push({ nome: nom, telefone: tel })
        console.log(`Contato ${nom} Adicionado com Sucesso!`)
        console.log(`-------------------------`)
    },

    listarContato: function () {
        console.log("Lista de Contatos")
        this.contatos.forEach((el) => {
            console.log(`Nome: ${el.nome} - Telefone: ${el.telefone}`)
        })
        console.log(`-------------------------`)
    },

    buscarContato: function (nomeBuscado) {
        let contatosEncontrados = this.contatos.filter(c => c.nome.toLowerCase().includes(nomeBuscado.toLowerCase()))

        if (contatosEncontrados.length) {
            console.log(`Contatos Encontrados`)
            contatosEncontrados.forEach((el) => {
                console.log(`Nome: ${el.nome} - Telefone: ${el.telefone}`)
            })
            return contatosEncontrados
        } else {
            console.log(`Nenhum Contato Encontrado!`)
            return null
        }
    }

}

agenda.adicionarContato("josé", 555555555)
agenda.listarContato()
agenda.buscarContato("jo")





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