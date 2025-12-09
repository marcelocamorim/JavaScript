
// 🔹 3. Carrinho de compras avançado
// Crie um objeto carrinho que armazene produtos como objetos {nome, preco, quantidade}.
// Adicione métodos para:
// adicionarProduto(nome, preco, quantidade)
// removerProduto(nome)
// calcularTotal() (somar todos os preços * quantidades).

const carrinho = {
    produtos: [
        { nome: "teclado", preco: 30, quantidade: 2 }
    ],

    adicionarProduto: function (nom, valor, quant) {
        let produtoExistente = this.produtos.find(p => p.nome === nom)

        if (produtoExistente) {
            produtoExistente.quantidade += quant
            console.log(`Quantidade de ${nom} Atualizada no Carrinho!`)
            console.log("----------------------------")
            return
        }

        this.produtos.push({ nome: nom, preco: valor, quantidade: quant })
        console.log(`Item ${nom} Adicionado ao Carrinho!`)
        console.log("----------------------------")
    },

    verCarrinho: function () {
        console.log(`Itens no Carrinho`)
        this.produtos.forEach((el) => {
            console.log(`Item: ${el.nome} - Preço: R$${el.preco} - Quantidade: ${el.quantidade}`)
            console.log("----------------------------")
        })
    },

    removerProduto: function (nom, quant) {
        let produtoExistente = this.produtos.find(p => p.nome === nom)

        if (!produtoExistente) {
            console.log(`ERRO -Produto ${nom} não consta no Carrinho!`)
            console.log("----------------------------")
            return
        }
        if (!quant<=0) {
            console.log(`ERRO -Digite uma Quantidade válida!`)
            console.log("----------------------------")
            return
        }
        produtoExistente.quantidade -= quant
        console.log(`Quantidade de ${nom} Atualizada no Carrinho!`)
        console.log("----------------------------")

        if (produtoExistente.quantidade === 0) {
            this.produtos = this.produtos.filter(p => p.nome !== nom)
            console.log(`Produto ${nom} Removido do Carrinnho`)
            console.log("----------------------------")
        }

    },

    calcularTotal:function(){
        let total=0
        this.produtos.forEach((el)=>{
            let subtotal=el.preco*el.quantidade
            console.log(`Item: ${el.nome} - Preço: R$${el.preco} - Quantidade: ${el.quantidade} - valor: R$${subtotal}`)
            total+=subtotal
        })
        console.log(`Total a Pagar: R$${total.toFixed(2)}`)
    }
}

carrinho.adicionarProduto("mouse", 20, 1)
carrinho.adicionarProduto("mouse", 20, 1)
carrinho.removerProduto("mouse", 1)
carrinho.verCarrinho()
carrinho.calcularTotal()