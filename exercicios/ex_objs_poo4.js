// 🔹 Avançados


// Crie um objeto carrinho que começa vazio. Adicione dinamicamente produtos com nome e preco, e depois calcule o total da compra.

// Crie um objeto biblioteca que contém um array de livros (cada livro é um objeto com título e autor). Mostre todos os títulos dos livros usando um loop.



// Crie um objeto contaBancaria com propriedades saldo e métodos depositar(valor) e sacar(valor). Teste as operações.

let contaBancaria={
    saldo:0,

    depositar: function(valor){
        this.saldo+=valor
    },

    sacar: function(valor){
        if(valor <= this.saldo){
            this.saldo -= valor
        }else{
            console.log("Saldo insuficiente para essa transação")
        }
    }
}

contaBancaria.depositar(100)
contaBancaria.depositar(100)

contaBancaria.sacar(55)
contaBancaria.sacar(55)
contaBancaria.sacar(55)
contaBancaria.sacar(55)
console.log(contaBancaria.saldo)