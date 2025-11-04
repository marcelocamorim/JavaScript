// 🔹 Avançados






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



// Crie um objeto carrinho que começa vazio. Adicione dinamicamente produtos com nome e preco, e depois calcule o total da compra.

let carrinho={
    
}
let total=0

carrinho.camiseta=50
carrinho.calca=120
carrinho.meia=20

for( let valor of Object.values(carrinho)){
    total+=valor
}

console.log(carrinho)
console.log(total)

// Crie um objeto biblioteca que contém um array de livros (cada livro é um objeto com título e autor). Mostre todos os títulos dos livros usando um loop.
let biblioteca=[
    {titulo:"harry potter", autor:"JK Roling"},
    {titulo:"Senhor dos aneis", autor:"JR Tolkien"},
    {titulo:"Legados de loriem", autor:"Pitacus Lore"},
    {titulo:"Atorre negra", autor:"Stephen king"}
]

for( let b of biblioteca){
    console.log(b.titulo)
}