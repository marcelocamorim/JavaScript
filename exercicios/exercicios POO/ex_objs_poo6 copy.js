// 2. Controle de estoque
// Crie um objeto estoque que armazene produtos (nome e quantidade).
// Adicione métodos para:
// adicionarProduto(nome, quantidade)
// removerProduto(nome, quantidade) (não deixar a quantidade ficar negativa)
// listarProdutos() (mostrar todos os produtos e quantidades).

let estoque = {
    produtos: [
        { nome: "teclado", quantidade: 10 },
        { nome: "mouse", quantidade: 20 },
        { nome: "monitor", quantidade: 12 },
        { nome: "impressora", quantidade: 15 },
        { nome: "roteador", quantidade: 50 },
    ],

    listarProdutos: function () {
        console.log(`Produtos em Estoque`)
        this.produtos.forEach((el) => {
            console.log(`Item: ${el.nome} - Quantidade: ${el.quantidade}`)
        })
        console.log("--------------------")
    },

    adicionarProduto: function (nom, quant) {
        let produtoExistente = this.produtos.find(p => p.nome === nom)

        if (quant <= 0) {
            console.log("Falha ao Adicionar Produto - Digite uma Quantidade Válida!")
            console.log("--------------------")
            return
        }

        if (produtoExistente) {
            produtoExistente.quantidade += quant
            console.log(`Quantidade de ${produtoExistente.nome} Atualizada +${quant}`)
            console.log("--------------------")
        } else {
            this.produtos.push({ nome: nom, quantidade: quant })
            console.log(`Produto ${nom} adicionado com Sucesso!`)
            console.log("--------------------")
        }

    },

    removerProduto: function (nom, quant) {
        let produtoExistente = this.produtos.find(p => p.nome === nom)

        if (quant <= 0) {
            console.log("Falha ao Remover Produto - Digite uma Quantidade Válida!")
            console.log("--------------------")
            return
        }

        if (!produtoExistente) {
            console.log("Falha ao Remover Produto - Item não Existe em estoque!")
            console.log("--------------------")
            return
        }

        if (quant > produtoExistente.quantidade) {
            console.log("Falha ao Remover Produto - Quantidade em Estoque Insuficiente!")
            console.log(`Estoque Real... Produto:${produtoExistente.nome} - Quantidade: ${produtoExistente.quantidade}`)
            console.log("--------------------")
            return
        }

        produtoExistente.quantidade -= quant
        console.log(`Quantidade de ${produtoExistente.nome} Atualizada -${quant}`)
        console.log("--------------------")

        if(produtoExistente.quantidade===0){
            this.produtos=this.produtos.filter((p=>p.nome !==nom))
            console.log(`Produto ${nom} Zerado e Removido do Estoque! `)
            console.log("--------------------")
        }

    }


}

estoque.adicionarProduto("playStation", 30)
estoque.adicionarProduto("playStation", 30)
estoque.adicionarProduto("playStation", 0)
estoque.listarProdutos()
estoque.removerProduto("playStation", 30)
estoque.removerProduto("playStation", 30)
estoque.listarProdutos()