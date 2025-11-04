// 2. Controle de estoque
// Crie um objeto estoque que armazene produtos (nome e quantidade).
// Adicione métodos para:
// adicionarProduto(nome, quantidade)
// removerProduto(nome, quantidade) (não deixar a quantidade ficar negativa)
// listarProdutos() (mostrar todos os produtos e quantidades).

let estoque = {
    itens: [
        { nome: "mouse", quantidade: 5 },
        { nome: "teclado", quantidade: 5 },
        { nome: "monitor", quantidade: 6 },
        { nome: "memoria ram", quantidade: 12 }
    ],

    add_item: function (nom, quant) {
        let item=this.itens.find(i => i.nome=== nom)
        if(item){
            item.quantidade += quant
        }else{
            this.itens.push({ nome: nom, quantidade: quant })
        }
    },

    remov_item: function (nom, quant) {
        let item = this.itens.find(i => i.nome === nom)

        if (!item) {
            console.log("item não existe")
            return
        }

        if (quant > item.quantidade) {
            console.log("estoque insuficiente")
            return
        }

        item.quantidade -= quant

        if(item.quantidade===0){
            this.itens=this.itens.filter(i => i.nome !== nom)
            console.log("item esgotado e removido do estoque")
        }



    },


    listarEstoque: function () {
        this.itens.forEach((el) => {
            console.log(` item: ${el.nome} - Quantitade: ${el.quantidade}`)
        })

    }
}

estoque.add_item("playStation", 18)
estoque.add_item("mouse", 10)
estoque.remov_item("teclado", 3)
estoque.listarEstoque()
























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