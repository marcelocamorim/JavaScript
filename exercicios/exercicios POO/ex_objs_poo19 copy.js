// Exercício 5 – Composição real
// Monte um sistema de pedido:

// Produto (nome, preço)

// ItemPedido (produto + quantidade)

// Pedido (cliente + lista de itens)

// método calcularTotal()

// método mostrarResumo()

// Desafio extra: permita adicionar e remover itens dinamicamente.

class Produto{
    constructor(nome,preco){
        this.nome=nome
        this.preco=preco
    }
}

class ItemPedido{
    constructor(produto,quantidade){
        this.produto=produto
        this.quantidade=quantidade
    }

    subTotal(){
        return this.produto.preco * this.quantidade
    }
}

class Pedido{
    constructor(cliente){
        this.cliente=cliente
        this.itensPedidos=[]
    }

    adicionarItem(item){
        this.itensPedidos.push(item)
    }

    calcularTotal(){
        return this.itensPedidos.reduce((total,item)=>total+item.subTotal(),0)
    }

    resumoPedido(){
        console.log(`Resumo do Pedido - Cliente: ${this.cliente}`)

        this.itensPedidos.forEach((el)=>{
            console.log(`Item: ${el.produto.nome} - Preço: ${el.produto.preco} - Quantidade: ${el.quantidade} - Valor: R$${el.subTotal().toFixed(2)}`)
        })

        const total=this.calcularTotal()
        console.log(`Total a pagar: R$${total.toFixed(2)}`)
    }
}

const pizza=new Produto("pizza",80)
const pastel=new Produto("pastel",15)
const coxinha=new Produto("coxinha",10)
const suco=new Produto("suco",8)
const refrigerante=new Produto("refrigerante",12)

const item1=new ItemPedido(pizza,2)
const item2=new ItemPedido(coxinha,3)
const item3=new ItemPedido(refrigerante,2)


const pedido1= new Pedido("joão")

pedido1.adicionarItem(item1)
pedido1.adicionarItem(item2)
pedido1.adicionarItem(item3)

pedido1.resumoPedido()