// 2. Controle de estoque
// Crie um objeto estoque que armazene produtos (nome e quantidade).
// Adicione métodos para:
// adicionarProduto(nome, quantidade)
// removerProduto(nome, quantidade) (não deixar a quantidade ficar negativa)
// listarProdutos() (mostrar todos os produtos e quantidades).

let estoque={
    produtos:[
        //nome,quantidade
    ],

    separar:function(){
        console.log("----------------------------")
    },

    adicionarProduto:function(nome,quantidade){
        const produtoExistente=this.produtos.find(p=>p.nome===nome)
        if(quantidade<=0){
            console.log(`ERRO - Quantidade invalida `)
            console.log(`Falha ao adicionar produto`)
            this.separar()
            return
        }
        if(produtoExistente){
            produtoExistente.quantidade+=quantidade
            console.log(`Produto "${nome} +${quantidade}" - Quantidade atualizada! `)
            this.separar()
            return
        }

        this.produtos.push({nome:nome, quantidade:quantidade})
        console.log(`Produto "${nome} - ${quantidade}x" Adicionado com Suceso!`)
        this.separar()
    },

    removerProduto:function(nome,quantidade){

    },


    listarProdutos:function(){
        console.log(`Lista de Produto:`)
        this.produtos.forEach((el)=>{
            console.log(`Produto: ${el.nome} - Quantidade: ${el.quantidade}`)
            this.separar()
        })
    }
}

estoque.adicionarProduto("mouse", 10)
estoque.adicionarProduto("teclado", 20)
estoque.adicionarProduto("teclado", -20)
estoque.listarProdutos()
