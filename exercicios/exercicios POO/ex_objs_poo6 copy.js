// 2. Controle de estoque
// Crie um objeto estoque que armazene produtos (nome e quantidade).
// Adicione métodos para:
// adicionarProduto(nome, quantidade)
// removerProduto(nome, quantidade) (não deixar a quantidade ficar negativa)
// listarProdutos() (mostrar todos os produtos e quantidades).

let estoque={
    produtos:[
        {nome:"teclado", quantidade:10},
        {nome:"mouse", quantidade:20},
        {nome:"monitor", quantidade:12},
        {nome:"impressora", quantidade:15},
        {nome:"roteador", quantidade:50},
    ],

    adicionarProduto:function(nom, quant){
        this.produtos.push({nome:nom, quantidade:quant})
        console.log(`Produto adicionado com Sucesso`)
    }
}