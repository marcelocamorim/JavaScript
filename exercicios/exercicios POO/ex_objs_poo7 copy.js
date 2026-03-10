
// 🔹 3. Carrinho de compras avançado
// Crie um objeto carrinho que armazene produtos como objetos {nome, preco, quantidade}.
// Adicione métodos para:
// adicionarProduto(nome, preco, quantidade)
// removerProduto(nome)
// calcularTotal() (somar todos os preços * quantidades).

let carrinho = {
    produtos: [
        //nome,preco,quantidade
    ],

    separar: function () {
        console.log("------------------------------------")
    },

    adicionarProduto: function (nome, preco, quantidade) {
        const produtoExistente = this.produtos.find(p => p.nome === nome)
        let subttotal = preco * quantidade

        if (produtoExistente) {
            produtoExistente.quantidade += quantidade
            produtoExistente.valor += subttotal
            console.log(`Carrinho Atualizado`)
            console.log(`${nome} +${quantidade}`)
            this.separar()
            return
        }


        this.produtos.push({ nome: nome, preco: preco, quantidade: quantidade, valor: subttotal })
        console.log(`Produto "${nome} ${quantidade}x" Adicionado ao Carrinho!`)
        this.separar()
    },

    removerProduto: function (nome, quantidade) {
        const produtoExistente = this.produtos.find(p => p.nome === nome)
        
        if (!produtoExistente) {
            console.log(`ERRO - Produto "${nome}" não consta no Carrinho!`)
            this.separar()
            return
        }

        
        if (quantidade >= produtoExistente.quantidade) {
            this.produtos = this.produtos.filter(p => p.nome !== produtoExistente.nome)
            console.log(`Produto ${nome} Excluido do carrinho!`)
            this.separar()
            return
        }
        let subtotal = produtoExistente.preco * quantidade

        produtoExistente.quantidade -= quantidade
        produtoExistente.valor -=subtotal
        console.log(`Carrinho atualizado`)
        console.log(`"${nome} -${quantidade}x"`)
        this.separar()
    },

    calcularTotal:function(){
        let total = this.produtos.reduce((acc,item)=>{
            return acc + item.valor
        },0)

        return total
    },

    resumoCarrinho: function () {
        console.log(`Resumo do Carrinho`)
        this.produtos.forEach((el) => {
            console.log(`Produto: ${el.nome} - Preço: R$${el.preco} - Quantidade: ${el.quantidade} - Valor: ${el.valor}`)
        })
        const total=this.calcularTotal()
        console.log(`Total a pagar: R$${total}`)
    }
}


carrinho.adicionarProduto("camiseta", 80, 20)
carrinho.adicionarProduto("camiseta", 80, 10)
carrinho.adicionarProduto("bermuda", 100, 10)
carrinho.adicionarProduto("tenis", 500, 2)

carrinho.removerProduto("meia", 5)
carrinho.removerProduto("camiseta", 5)
carrinho.removerProduto("bermuda", 10)
carrinho.resumoCarrinho()

