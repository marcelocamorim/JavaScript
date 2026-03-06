// 🔹 Avançados

// Crie um objeto contaBancaria com propriedades saldo e métodos depositar(valor) e sacar(valor). Teste as operações.

let contaBancaria = {
    saldo: 0,

    depositar: function (valor) {
        if (valor <= 0) {
            console.log(`ERRO - Valor Irregular para essa transação`)
            return
        }
        this.saldo += valor
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`)
        console.log(`Saldo atual R$${this.saldo.toFixed(2)}`)
    },

    sacar: function (valor) {
        if (valor <= 0) {
            console.log(`ERRO - Valor Irregular para essa transação`)
            return

        } else if (valor > this.saldo) {
            console.log(`ERRO - Saldo Insuficiente`)
            console.log(`Saque solicitado: R$${valor.toFixed(2)} - Saldo em conta: R$${this.saldo.toFixed(2)}`)
            return
        }

        this.saldo -= valor
        console.log(`Saque de R$${valor.toFixed(2)} Realizado com Sucesso!`)
        console.log(`Saldo atual R$${this.saldo.toFixed(2)}`)
    }
}
contaBancaria.depositar(50)
contaBancaria.depositar(50)
contaBancaria.sacar(20)
contaBancaria.sacar(80)
contaBancaria.sacar(80)

console.log("----------------------------------------")
// Crie um objeto carrinho que começa vazio. Adicione dinamicamente produtos com nome e preco, e depois calcule o total da compra.

let carrinho = {
    produtos: [

    ]
}

carrinho.produtos.push({ nome: "camiseta", valor: 80 })
carrinho.produtos.push({ nome: "calça", valor: 180 })
carrinho.produtos.push({ nome: "bermuda", valor: 120 })
carrinho.produtos.push({ nome: "meia", valor: 30 })

let total = carrinho.produtos.reduce((acc, val) => {
    return acc + val.valor
}, 0)
console.log(`Total a pagar R$${total.toFixed(2)}`)

console.log("----------------------------------------")

// Crie um objeto biblioteca que contém um array de livros (cada livro é um objeto com título e autor). Mostre todos os títulos dos livros usando um loop.

let biblioteca = {
    livros: [
        { titulo: "harry potter", autor: "JK Roling" },
        { titulo: "Senhor dos aneis", autor: "JR Tolkien" },
        { titulo: "Legados de loriem", autor: "Pitacus Lore" },
        { titulo: "Atorre negra", autor: "Stephen king" }
    ]
}

console.log(`Lista de livros`)
biblioteca.livros.forEach(element => {
    console.log(`Livro: ${element.titulo} - Autor: ${element.autor}`)
});