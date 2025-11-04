// Exercício 3 – Criar uma classe Produto
// Objetivo: Calcular o preço total com base no valor e quantidade.

class Produto {
    constructor(nome, preço, quantidade) {
        this.nome = nome
        this.preço = preço
        this.quantidade = quantidade

    }

    total() {
        return this.preço * this.quantidade
    }
}

const prod = new Produto("camiseta", 100, 7)
console.log(`Total a pagar R$${prod.total()} por ${prod.quantidade} Camisetas`)