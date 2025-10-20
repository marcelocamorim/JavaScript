// Exercício 5 – Composição real
// Monte um sistema de pedido:

// Produto (nome, preço)

// ItemPedido (produto + quantidade)

// Pedido (cliente + lista de itens)

// método calcularTotal()

// método mostrarResumo()

// Desafio extra: permita adicionar e remover itens dinamicamente.


class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}

class ItemPedido {
    constructor(produto, quantidade){
        this.produto=produto
        this.quantidade=quantidade
    }

    subtotal(){
        return this.produto.preco * this.quantidade
    }
}

class Pedido{
    constructor(cliente){
        this.cliente=cliente
        this.itens=[]
    }

    adicionarPedido(item){
        this.itens.push(item)
    }

    calcularTotal(){
        return this.itens.reduce((total,item)=>total+item.subtotal(),0)
    }

    info(){
        console.log(`Pedido do cliente ${this.cliente}`)
        this.itens.forEach((el)=>{
            console.log(`Item: ${el.produto.nome} - Preço: R$${el.produto.preco} - Quantidade:${el.quantidade} - Total: ${el.subtotal().toFixed(2)}`)
        })
        console.log(`Total do pedido R$${this.calcularTotal().toFixed(2)}`)
    }
}

const produto1=new Produto("notebook", 1000)
const produto2=new Produto("teclado", 100)
const produto3=new Produto("mouse", 50)

const item1 = new ItemPedido(produto1, 1)
const item2 = new ItemPedido(produto2, 1)
const item3 = new ItemPedido(produto3, 2)

const pedido1=new Pedido("João")
pedido1.adicionarPedido(item1)
pedido1.adicionarPedido(item2)
pedido1.adicionarPedido(item3)

pedido1.info()


