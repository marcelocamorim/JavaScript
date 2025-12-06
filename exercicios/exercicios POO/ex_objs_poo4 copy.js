// 🔹 Avançados

// Crie um objeto contaBancaria com propriedades saldo e métodos depositar(valor) e sacar(valor). Teste as operações.

const contaBancaria = {
    saldo: 0,

    depositar: function (valor) {
        this.saldo += valor
        console.log(`Depósito de R$${Number(valor).toFixed(2)} Realizado com Sucesso! `)
        console.log(`Saldo Atual é de R$ ${this.saldo.toFixed(2)}`)
        console.log("-------------------")

    },

    sacar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor
            console.log(`Saque de R$${Number(valor).toFixed(2)} Realizado com Sucesso!`)
            console.log(`Saldo Atual é de R$ ${this.saldo.toFixed(2)}`)
            console.log("-------------------")
        }else{
            console.log(`Saldo insuficiente para essa transação`)
            console.log(`Tentativa de Saque R$${valor.toFixed(2)} - Saldo Disponível R$${this.saldo.toFixed(2)}`)
            console.log("-------------------")
        }

    }

}

contaBancaria.depositar(50)
contaBancaria.depositar(50)
contaBancaria.sacar(50)
contaBancaria.sacar(50)
contaBancaria.sacar(50)


// Crie um objeto carrinho que começa vazio. Adicione dinamicamente produtos com nome e preco, e depois calcule o total da compra.

const carrinho=[]

carrinho.push({item:"camiseta", preco:80})
carrinho.push({item:"calça", preco:180})
carrinho.push({item:"meia", preco:30})

function calcularTotal(){
    console.log("Resumo da Compra")  

    carrinho.forEach((el)=>{
        console.log(`Item: ${el.item} - Valor: R$${el.preco.toFixed(2)}`)
    })

    let total = carrinho.reduce((acc,item)=>acc+item.preco,0)
    console.log(`Total a pagar: R$${total}`)
    return Number(total).toFixed(2)

}
calcularTotal()



// Crie um objeto biblioteca que contém um array de livros (cada livro é um objeto com título e autor). Mostre todos os títulos dos livros usando um loop.
