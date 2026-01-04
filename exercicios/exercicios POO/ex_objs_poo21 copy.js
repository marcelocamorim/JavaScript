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

class Produto{
    constructor(nome,preco){
        this.nome=nome
        this.preco=preco
    }
}

class Carrinho{
    constructor(){
        this.itens=[]
    }

    adicionarItem(){
        const itemExistente=this.itens.find(i=>i)
    }
}



const produto1 = new Produto("teclado", 80)
const produto2 = new Produto("monitor", 500)
const produto3 = new Produto("playStation", 3000)
const produto4 = new Produto("headPhone", 200)

const carrinho1 = new Carrinho()

