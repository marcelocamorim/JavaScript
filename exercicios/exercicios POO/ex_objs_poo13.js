// 🔹 4. Sistema de pedidos de restaurante
// Crie um objeto restaurante que contenha:
// cardapio (array de objetos { nome, preco })
// pedidos (array de pedidos feitos)
// E métodos:
// fazerPedido(nomePrato, quantidade) → adiciona ao array de pedidos.
// calcularTotal() → soma o valor total do pedido.
// mostrarPedidos() → lista todos os pratos e quantidades.
// 🧠 Desafio extra: evite pedidos duplicados (se já existir, apenas aumente a quantidade).

let restaurante = {
    cardapio: [
        { nome: "pizza", preco: 80 },
        { nome: "refrigerante", preco: 10 },
        { nome: "sorvete", preco: 15 },
        { nome: "fritas", preco: 12 },
    ],

        //nome, quantidade, total 
    pedidos: [],
    

    fazerPedido: function (nomePrato, quantidade) {
        let prato = this.cardapio.find((p => p.nome === nomePrato))
        if (!prato) {
            console.log(`Item ${nomePrato} indisponivel no cardapio`)
            return
        }
        let valorTotal = prato.preco * quantidade



        let pedidoExistente = this.pedidos.find((pe => pe.nome === nomePrato))
        if (!pedidoExistente) {
            this.pedidos.push({ nome: nomePrato, quantidade: quantidade, total: valorTotal })
            console.log(`${quantidade} - ${nomePrato} Adicionado ao pedido`)
            return
        } else {
            pedidoExistente.quantidade += quantidade
            pedidoExistente.total += valorTotal
            console.log(`Quantidade de ${nomePrato} Atualizada para ${pedidoExistente.quantidade}`)
        }

    },

    calcularTotal:function(){
        let total=this.pedidos.reduce((acc,item)=>acc+item.total,0)
        console.log(`Total R$${total}`)
        return total
    },

    mostraPedidos:function(){
        console.log(`Resumo do Pedido:`)
        this.pedidos.forEach((el)=>{
            console.log(`Item: ${el.nome} - Quantidade ${el.quantidade}`)
        })
    }
}

restaurante.fazerPedido("atum", 2)
restaurante.fazerPedido("pizza", 2)
restaurante.fazerPedido("pizza", 2)
restaurante.fazerPedido("refrigerante", 2)
restaurante.mostraPedidos()
restaurante.calcularTotal()


