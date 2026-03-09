// 2. Controle de estoque
// Crie um objeto estoque que armazene produtos (nome e quantidade).
// Adicione métodos para:
// adicionarProduto(nome, quantidade)
// removerProduto(nome, quantidade) (não deixar a quantidade ficar negativa)
// listarProdutos() (mostrar todos os produtos e quantidades).

let estoque = {
    produtos: [
        //nome,quantidade
    ],

    separar: function () {
        console.log("----------------------------")
    },

    adicionarProduto: function (nome, quantidade) {
        const produtoExistente = this.produtos.find(p => p.nome === nome)
        if (quantidade <= 0) {
            console.log(`Falha ao adicionar produto`)
            console.log(`ERRO - Quantidade invalida `)
            this.separar()
            return
        }
        if (produtoExistente) {
            produtoExistente.quantidade += quantidade
            console.log(`Produto "${nome} +${quantidade}" - Quantidade atualizada! `)
            this.separar()
            return
        }

        this.produtos.push({ nome: nome, quantidade: quantidade })
        console.log(`Produto "${nome} - ${quantidade}x" Adicionado com Suceso!`)
        this.separar()
    },

    removerProduto: function (nome, quantidade) {
        const produtoExistente = this.produtos.find(p => p.nome === nome)
        if (!produtoExistente) {
            console.log(`Falha ao Remover produto`)
            console.log(`ERRO - Produto "${nome}" não consta em estoque`)
            this.separar()
            return
        }

        if (quantidade <= 0) {
            console.log(`Falha ao Remover produto`)
            console.log(`ERRO - Quantidade invalida `)
            this.separar()
            return
        }

        if (quantidade >= produtoExistente.quantidade) {
            if(quantidade>produtoExistente.quantidade){
                console.log(`Quantidade solicitada é maior que Estoque real`)
                console.log(`Produto: ${nome} - Estoque real: ${produtoExistente.quantidade} - Solicitação: ${quantidade}`)
                console.log(`O Produto "${nome}" será excluido!`)
            }
            if(quantidade===produtoExistente.quantidade){
                console.log(`Estoque zerado!`)
                console.log(`O Produto "${nome}" será excluido!`)
            }
            this.produtos = this.produtos.filter(p => p.nome !== nome)
            this.separar()
            return
        }

        produtoExistente.quantidade -= quantidade
        console.log(`"${quantidade}x ${nome}" Removido com Sucesso!`)
        this.separar()
    },


    listarProdutos: function () {
        console.log(`Lista de Produto:`)
        this.produtos.forEach((el) => {
            console.log(`Produto: ${el.nome} - Quantidade: ${el.quantidade}`)
        })
        this.separar()
    }
}

estoque.adicionarProduto("mouse", 10)
estoque.adicionarProduto("teclado", 20)
estoque.adicionarProduto("teclado", -20)

estoque.removerProduto("monitor")
estoque.removerProduto("teclado",5)
estoque.removerProduto("teclado",16)
estoque.listarProdutos()
