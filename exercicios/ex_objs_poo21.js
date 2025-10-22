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
    constructor(nome, preco){
        this.nome=nome
        this.preco=preco
    }
}

class Carrinho{
    constructor(){
        this.carrinho=[]
    }

    adicionarItem(item){
        this.carrinho.push(item)
    }

    removerProduto(produtoNome){
        this.carrinho=this.carrinho.filter(p=>p.nome!==produtoNome)
    }
}

const produto1=new Produto("teclado",120)
const produto2=new Produto("monitor",900)
const produto3=new Produto("mouse",40)
const produto4=new Produto("memoria ram",310)

const carrinho1=new Carrinho()
carrinho1.adicionarItem(produto1)
carrinho1.adicionarItem(produto2)
carrinho1.adicionarItem(produto3)
carrinho1.adicionarItem(produto4)

carrinho1.removerProduto("teclado")

console.log(carrinho1.carrinho)

