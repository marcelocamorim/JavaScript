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



class Pedido{
    constructor(nomeCliente,item,quantidade){
        this.nomeCliente=nomeCliente
        this.item=item
        this.quantidade=quantidade
        this.listaRegistro=[]
    }

    

   
}


const pastel=new Produto("pastel",8)
const coxinha=new Produto("coxinha",15)
const hamburguer=new Produto("hamburguer",25)
const refrigerante=new Produto("refrigerante",12)
