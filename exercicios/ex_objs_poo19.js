// Exercício 5 – Composição real
// Monte um sistema de pedido:

// Produto (nome, preço)

// ItemPedido (produto + quantidade)

// Pedido (cliente + lista de itens)

// método calcularTotal()

// método mostrarResumo()

// Desafio extra: permita adicionar e remover itens dinamicamente.

let listaDeItens = []

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
  
}

class ItemPedido {
    constructor(produto, quantidade) {
        this.produto = produto
        this.quantidade = quantidade
    }

    subtotal(){
        return this.produto.preco * this.quantidade
    }
    
}

class Pedido {
    constructor(cliente) {
        this.cliente = cliente
        this.itens = []
    }

    adicionarItem(item){
        this.itens.push(item)
    }
}

const produto1 = new Produto("pizza", 70)
const produto2 = new Produto("pastel", 15)

const item1 = new ItemPedido(produto1, 2)

const pedido = new Pedido("João")
pedido.adicionarItem(item1)







