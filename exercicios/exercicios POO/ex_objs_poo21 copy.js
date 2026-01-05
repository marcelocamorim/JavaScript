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
            itemExistente.subtotal += valor

            console.log(`Item ${itemExistente.nome} Atualizado! - Quantidade +${quanti}`)
            return
        }

        produto.quantidade = quanti
        produto.subtotal = valor
        this.itens.push(produto)
        console.log(`Produto ${produto.nome} Adicionado ao Carrinho!`)
    }


    removerProduto(produto,quanti){
        const itemExistente = this.itens.find((i=>i.nome===produto.nome))

        this.itens=this.itens.filter((i=>i.nome!==itemExistente.nome))
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
console.log(carrinho1.itens)



