
// 🔹 3. Carrinho de compras avançado
// Crie um objeto carrinho que armazene produtos como objetos {nome, preco, quantidade}.
// Adicione métodos para:
// adicionarProduto(nome, preco, quantidade)
// removerProduto(nome)
// calcularTotal() (somar todos os preços * quantidades).

const carrinho={
    produtos:[
        {nome:"teclado", preco:30, quantidade:2}
    ],

    adicionarProduto:function(nom, valor, quant){
        let produtoExistente=this.produtos.find(p=>p.nome===nom)
        
        if(produtoExistente){
            produtoExistente.quantidade+=quant
            console.log(`Quantidade de ${nom} Atualizada no Carrinho!`)
            return
        }

        this.produtos.push({nome:nom, preco:valor, quantidade:quant})
        console.log(`Item ${nom} Adicionado ao Carrinho!`)
    },

    verCarrinho:function(){
        this.produtos.forEach((el)=>{
            console.log(`Item: ${el.nome} - Preço: R$${el.preco} - Quantidade: ${el.quantidade}`)
        })
    },

    removerProduto:function(nom,quant){
        let produtoExistente=this.produtos.find(p=>p.nome===nom)

        if(!produtoExistente){
            console.log(`ERRO -Produto ${nom} não consta no Carrinho!`)
            return
        }

        if(produtoExistente.quantidade===0){
            this.produtos=this.produtos.filter(p=>p.nome!==nom)
            console.log(`Produto ${nom} Removido do Carrinnho`)
        }

    }
}

carrinho.adicionarProduto("mouse", 20, 1)
carrinho.adicionarProduto("mouse", 20, 1)
carrinho.verCarrinho()