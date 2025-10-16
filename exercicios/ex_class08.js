// 🔹 7. Classe Loja
// Crie uma classe Loja que contenha um array de produtos (objetos da classe Produto).
// Métodos:
// adicionarProduto(produto)
// listarProdutos()
// buscarProduto(nome) → retorna o produto se existir
// 🧠 Desafio extra: use find() e filter() nos métodos de busca.

class Produto{
    constructor(nome, preco, estoque){
        this.nome=nome
        this.preco=preco
        this.estoque=estoque
    }

    info(){
        console.log(`Produto: ${this.nome} - Preço: R$${this.preco} - Estoque: ${this.estoque}`)
    }
}

class Loja{
    constructor(){
        this.produtos=[]
    }

    addProduto(produto){
        let existene=this.produtos.find((p=>p.nome===produto.nome))
        if(!item){
            this.produtos.push(produto)
            console.log(`Produto ${produto.nome} adicionado com sucesso!`)
        }else{
            existene.estoque += produto.estoque
        }
    }

    listarProduto(){
        console.log("Produtos Disponiveis:")
        this.produtos.forEach((el)=>{
           el.info()
        })
    }


    buscarProduto(nome){
        //let produto=this.produtos.find((p=>p.nome===nome))
        let produtosEncontrados=this.produtos.filter((p=>p.nome.toLowerCase().includes(nome.toLowerCase())))
        if(produtosEncontrados.length>0){
            console.log("Itens encontrados:")
            produtosEncontrados.forEach((el)=>{
                el.info()
            })
            return produtosEncontrados
        }else{
            console.log("Nenhum produto encontrado")
            return
        }

    }
}

const l1 = new Loja
l1.addProduto("camiseta", 20)
l1.addProduto("bermuda", 10)
l1.addProduto("tenis", 8)
l1.addProduto("camiseta", 20)

//l1.listarProduto()
l1.buscarProduto("bermuda")