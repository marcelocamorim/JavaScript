// Classe Produto
// Crie uma classe Produto com:
// nome, preco e estoque
// E métodos:
// adicionarEstoque(qtd)
// removerEstoque(qtd) (não permitir valores negativos)
// mostrarInfo() → mostra nome, preço e estoque atual.
// 🧠 Desafio extra: crie um método que aplique desconto percentual no preço.


class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }

    addEstoque = function (quant) {
        if (quant > 0) {
            this.estoque += quant
            console.log(`${quant} adicionado ao estoque - estoque atual: ${this.estoque}`)
        } else {
            console.log("valor invalido")
            return
        }
    }

    removEstoque = function (quant) {
        if (this.estoque < quant){
            console.log(`estoque insuficiente`)
            return
        }else{
            this.estoque -= quant
            console.log(`${quant} Removido do estoque - estoque atual: ${this.estoque}`)
        }
    }

    info=function(){
        console.log(`produto: ${this.nome} - Preço: R$${this.preco} - Estoque: ${this.estoque}`)
    }

    addDesconto=function(porcentagem){     
        let desconto= this.preco * (porcentagem/100)
        let novoPreco = this.preco -= desconto

        console.log(`produto: ${this.nome} - Preço com desconto: R$${novoPreco}`)
    }
}

const p1 = new Produto("camiseta", 80, 10)
p1.addEstoque(10)
p1.removEstoque(4)
p1.info()
p1.addDesconto(10)