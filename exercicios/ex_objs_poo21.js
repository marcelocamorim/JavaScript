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
        this.quantidade=null

    }
}

class Carrinho {
    constructor() {
        this.carrinho = []
    }

    separarInfo(){
        console.log("------------------------")
    }

    adicionarItem(item, quantidade) {
        const itemExistente = this.carrinho.find((i => i.nome === item.nome))

        if (!itemExistente) {
            console.log(`item ${item.nome} Adicionado ao carrinho!`)
            item.quantidade=quantidade
            this.carrinho.push(item)
        } else {
            console.log(`item ${item.nome} - quantidade atualizada!`)
            itemExistente.quantidade += quantidade
        }
        this.separarInfo()
    }

    removerProduto(produtoNome, quantidade) {
        const itemExistente=this.carrinho.find((el=>el.nome===produtoNome))

        if(!itemExistente){
            console.log(`${produtoNome} Não consta no carrinho`)
            this.separarInfo()
            return

        }

        if(quantidade>=itemExistente.quantidade){
            this.carrinho = this.carrinho.filter(p => p.nome !== produtoNome)
            console.log(`Item: ${produtoNome} Removido do Carrinho!`)
            this.separarInfo()
        }

        if(quantidade<itemExistente.quantidade){
            itemExistente.quantidade -= quantidade
            console.log(`${quantidade} ${produtoNome} Removido - quantidade Atualizada`)
            this.separarInfo()
        }
    }

   
    calcularTotal(){
        let total=this.carrinho.reduce((acc,item)=>acc+(item.preco*item.quantidade),0)
        console.log(`Total R$${total.toFixed(2)}`)
        this.separarInfo()
        return total
    }

    resumoPedido(){
        console.log("Resumo do Pedido")
        this.carrinho.forEach((el)=>{
            console.log(`Item: ${el.nome} - Preço: R$${el.preco} - Quantidade: ${el.quantidade}`)
        })

        this.calcularTotal()

    }

    adicionarDesconto(porcentagem){
        let total=this.calcularTotal()        
        let totalComDesconto= total - ((porcentagem/100)*total)
        console.log(`Desconto de ${porcentagem}% Aplicado! - Total: R$${totalComDesconto}`)


    }
}

const produto1 = new Produto("teclado", 120)
const produto2 = new Produto("monitor", 900)
const produto3 = new Produto("mouse", 40)
const produto4 = new Produto("memoria ram", 310)

const carrinho1 = new Carrinho()
carrinho1.adicionarItem(produto1, 1)
carrinho1.adicionarItem(produto1, 1)
carrinho1.adicionarItem(produto1, 1)
carrinho1.adicionarItem(produto1, 1)
carrinho1.adicionarItem(produto2,1)
carrinho1.adicionarItem(produto3,1)
carrinho1.adicionarItem(produto4,1)

// carrinho1.removerProduto("teclado", 1)
// carrinho1.removerProduto("teclado", 1)
// carrinho1.removerProduto("teclado", 1)
// carrinho1.removerProduto("teclado", 1)

carrinho1.resumoPedido()
carrinho1.adicionarDesconto(10)


