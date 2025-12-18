// 🔹 4. Sistema de pedidos de restaurante
// Crie um objeto restaurante que contenha:
// cardapio (array de objetos { nome, preco })
// pedidos (array de pedidos feitos)
// E métodos:
// fazerPedido(nomePrato, quantidade) → adiciona ao array de pedidos.
// calcularTotal() → soma o valor total do pedido.
// mostrarPedidos() → lista todos os pratos e quantidades.
// 🧠 Desafio extra: evite pedidos duplicados (se já existir, apenas aumente a quantidade).

const restaurante={
    cardapio:[
        {nome:"pizza", preco:80},
        {nome:"pastel", preco:15},
        {nome:'esfiha', preco:5},
        {nome:'pudim', preco:10},
    ],

    //nome,quantidade
    pedidos:[],

    fazerPedido:function(nome,quanti){
        const itemExistente=this.cardapio.find(item=>item.nome===nome)
        if(!itemExistente){
            console.log(`ERRO - Item ${nome} Não consta no Cardapio`)
            return
        }

        let valorTotal = itemExistente.preco * quanti

        const ItemPedidoExistente = this.pedidos.find(item=>item.nome===nome)
        if(!ItemPedidoExistente){
            this.pedidos.push({nome:nome, quantidade:quanti, valor:valorTotal})
            console.log(`Pedido Registrado! Item: ${nome} - x${quanti}`)
        }else{
            ItemPedidoExistente.quantidade += quanti
            ItemPedidoExistente.valor += valorTotal
            console.log(`Pedido Atualizado! Item: ${nome} +${quanti}`)
        }
    },

    calcularTotal:function(){
        let total = this.pedidos.reduce((acc,item)=>acc+item.valor,0)
        return total
    },

    resumoPedido:function(){
        console.log(`Resumo do Pedido`)
        let totalPagar=this.calcularTotal()
        this.pedidos.forEach((el)=>{
            console.log(`Item: ${el.nome} - Quantidade: ${el.quantidade} - Valor: R$${el.valor.toFixed(2)}`)
        })
        console.log(`Total a Pagar: R$${totalPagar.toFixed(2)}`)
    }
}

restaurante.fazerPedido("pizza",2)
restaurante.fazerPedido("pizza",2)
restaurante.fazerPedido("pudim",5)
restaurante.fazerPedido("salada",3)
restaurante.resumoPedido()