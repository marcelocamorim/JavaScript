// Exercício 2 – Carrinho de Compras Online
// Crie as classes:
// Produto → nome, preco
// Carrinho → itens (array vazio)

// Métodos:
// adicionarItem(produto, quantidade)
// removerItem(nomeProduto)
// calcularTotal() → soma preco * quantidade de todos os itens
// mostrarResumo() → lista os produtos, quantidades e total

// Desafio extra:
// Adicione um método aplicarDesconto(percentual) que reduz o total.

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}

class Carrinho {
    constructor() {
        this.itens = []
    }

    adicionarItem(produto, quanti) {
        const itemExistente = this.itens.find((i => i.nome === produto.nome))
        const valor = quanti * produto.preco
        if (itemExistente) {
            itemExistente.quantidade += quanti
            itemExistente.subTotal += valor
            console.log(`Item ${itemExistente.nome} Atualizado! - Quantidade +${quanti}`)
            return
        }

        produto.quantidade = quanti
        produto.subTotal = valor
        this.itens.push(produto)
        console.log(`Produto ${produto.nome} Adicionado ao Carrinho!`)
    }


    removerProduto(produto, quanti) {
        const itemExistente = this.itens.find((i => i.nome === produto.nome))
        const valor = quanti * produto.preco

        if (!itemExistente) {
            console.log(`ERRO - Item não consta no Carrinho`)
            return
        }
        if (quanti <= 0) {
            console.log(`ERRO - Quantidade Inválida`)
        }
        if (quanti < itemExistente.quantidade) {
            itemExistente.quantidade -= quanti
            itemExistente.subTotal -= valor

            console.log(`Carrinho Atualizado - ${itemExistente.nome} -${quanti} `)
            return
        }
        if (quanti >= itemExistente.quantidade || itemExistente.quantidade === 0) {
            this.itens = this.itens.filter((i => i.nome !== itemExistente.nome))
            console.log(`Item ${itemExistente.nome} Removido do Carrinho!`)

        }
    }

    calculaTotal() {
        return this.itens.reduce((total, item) => total + item.subTotal, 0)
    }

    aplicarDesconto(percentual) {
        const total = this.calculaTotal()
        const totalComDesconto = total - (percentual / 100) * total
        console.log(`Desconto de ${percentual}% Aplicado! - Total: R$${totalComDesconto.toFixed(2)}`)

        return totalComDesconto
    }

    resumoCarrinho() {
        const total = this.calculaTotal()
        console.log(`Resumo do Carrinho`)
        this.itens.forEach((el) => {
            console.log(`Item: ${el.nome} - Preço: R$${el.preco.toFixed(2)} - Quantidade: ${el.quantidade} - Valor: R$${el.subTotal.toFixed(2)}`)
        })
        console.log(`Total a Pagar R$${total.toFixed(2)}`)
    }
}



const produto1 = new Produto("teclado", 80)
const produto2 = new Produto("monitor", 500)
const produto3 = new Produto("playStation", 3000)
const produto4 = new Produto("headPhone", 200)

const carrinho1 = new Carrinho()

carrinho1.adicionarItem(produto1, 2)
carrinho1.adicionarItem(produto1, 2)
carrinho1.adicionarItem(produto2, 1)
carrinho1.adicionarItem(produto3, 1)


carrinho1.removerProduto(produto1, 1)
carrinho1.removerProduto(produto1, 1)
carrinho1.removerProduto(produto1, 1)
carrinho1.adicionarItem(produto1, 2)

carrinho1.resumoCarrinho()
carrinho1.aplicarDesconto(10)


