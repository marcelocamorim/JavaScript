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
        { nome: "Refrigerante", preco: 10 },
        { nome: "sorvete", preco: 15 },
        { nome: "fritas", preco: 12 },
    ],

    pedidos: [],


    fazerPedido: function (nomePrato, quantidade) {
        let prato = this.cardapio.find((p => p.nome === nomePrato))
        if(!prato){
            console.log(`Item ${nomePrato} indisponivel no cardapio`)
            return
        }
        if(this.pedidos[!prato]){
            let valorTotal = prato.preco * quantidade
            this.pedidos.push({ nome: nomePrato, quantidade: quantidade, total:valorTotal})
        }

    }

}

restaurante.fazerPedido("atum",2)
restaurante.fazerPedido("pizza",2)
console.log(restaurante.pedidos)

