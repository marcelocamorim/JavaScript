// 🔹 7. Classe Loja
// Crie uma classe Loja que contenha um array de produtos (objetos da classe Produto).
// Métodos:
// adicionarProduto(produto)
// listarProdutos()
// buscarProduto(nome) → retorna o produto se existir
// 🧠 Desafio extra: use find() e filter() nos métodos de busca.


class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }

    info() {
        console.log(`Produto: ${this.nome} - Preço: ${this.preco} - Estoque: ${this.estoque}`)
    }
}


class Loja {
    constructor() {
        this.produtos = []
    }

    adicionarProduto(produto) {
        let produtoExistente = this.produtos.find(p => p.nome === produto.nome)
        if (!produtoExistente) {
            this.produtos.push(produto)
            console.log(`Produto ${produto.nome} adicionado com sucesso! - Estoque: ${produto.estoque}`)
        } else {
            produtoExistente.estoque += produto.estoque
            console.log(`Produto ${produto.nome} Atualizado! - Estoque: ${produto.estoque}`)
        }
    }

    listarProduto() {
        console.log("Produtos Disponiveis")
        this.produtos.forEach(el => el.info())
    }

    buscarProduto(nome) {
        let encontrados = this.produtos.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()))
        if (encontrados.length) {
            console.log("Produtos encontrados:")
            encontrados.forEach(el => el.info())
            return encontrados
        } else {
            console.log("Nenhum produto encontrado")
            return
        }
    }

}

const p1 = new Produto("camiseta", 80, 10)
const p2 = new Produto("bermuda", 60, 6)
const p3 = new Produto("tenis", 180, 4)
const p4 = new Produto("camiseta", 80, 10)

const loja1 = new Loja()
loja1.adicionarProduto(p1)
loja1.adicionarProduto(p3)
loja1.adicionarProduto(p2)
loja1.adicionarProduto(p4)
//loja1.listarProduto()

loja1.buscarProduto("berm")

