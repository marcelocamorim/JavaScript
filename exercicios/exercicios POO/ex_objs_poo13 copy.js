// 🔹 4. Sistema de pedidos de restaurante
// Crie um objeto restaurante que contenha:
// cardapio (array de objetos { nome, preco })
// pedidos (array de pedidos feitos)
// E métodos:
// fazerPedido(nomePrato, quantidade) → adiciona ao array de pedidos.
// calcularTotal() → soma o valor total do pedido.
// mostrarPedidos() → lista todos os pratos e quantidades.
// 🧠 Desafio extra: evite pedidos duplicados (se já existir, apenas aumente a quantidade).

const restaurante = {
    cardapio: [
        { nome: "coxinha", preco: 10 },
        { nome: "suco", preco: 8 },
        { nome: "pastel", preco: 6 },
    ],
    pedidos: [
        //nome,quantidade,preco,subtotal
    ],


    separar: function () {
        console.log(`---------------------------------`)
    },

    fazerPedido: function (nomePrato, quantidade) {
        const itemExisteCardapio = this.cardapio.find(item => item.nome === nomePrato)
        if (!itemExisteCardapio) {
            console.log(`Item "${nomePrato}" não consta no cardapio`)
            this.separar()
            return
        }

        const itemExistePedido = this.pedidos.find(item => item.nome === nomePrato)
        let subtotalItem = itemExisteCardapio.preco * quantidade

        if (!itemExistePedido) {
            this.pedidos.push({ nome: nomePrato, quantidade: quantidade, preco: itemExisteCardapio.preco, subtotal: subtotalItem })
            console.log(`Pedido realizado com sucesso!`)
            this.separar()
            return
        }
        itemExistePedido.quantidade += quantidade
        itemExistePedido.subtotal += subtotalItem
        console.log(`Pedido Atualizado "+${quantidade}x ${nomePrato}"`)
        this.separar()

    },

    editarPedido: function (nomePrato, quantidade) {

        const itemExistePedido = this.pedidos.find(item => item.nome === nomePrato)
        if (!itemExistePedido) {
            console.log(`Item "${nomePrato}" não consta no Pedido`)
            this.separar()
            return

        } else if (quantidade <= 0) {
            console.log(`ERRO - Digite uma quantidade válida!`)
            this.separar()
            return

        } else if (quantidade >= itemExistePedido.quantidade) {
            if(quantidade>itemExistePedido.quantidade){
                console.log(`Quantidade solicitada é maior que a quantidade do pedido`)
                console.log(`O item "${nomePrato}" será exluído`)
                this.separar()
            }
            console.log(`Aquantidade do item foi zerada`)
            console.log(`Item ${nomePrato} Excluido com sucesso!`)
            this.pedidos=this.pedidos.filter((item=>item.nome!==nomePrato))
            this.separar()
            return

        }

        let subtotalItem = itemExistePedido.preco * quantidade

        console.log(`Pedido Editado com sucesso - "-${quantidade}x ${nomePrato}"`)
        itemExistePedido.quantidade -= quantidade
        itemExistePedido.subtotal -= subtotalItem
        this.separar()
    },

    resumoPedido(){
        let totalPagar = this.pedidos.reduce((acc,item)=>acc + item.subtotal,0)
        console.log(`Resumo do pedido:`)
        this.pedidos.forEach((el)=>{
            console.log(`--Item:${el.nome} - Quantidade: ${el.quantidade} - Preço: R$${el.preco.toFixed(2)} - Total do Item: R$${el.subtotal.toFixed(2)}`)
        })
        console.log(`Total a pagar R$${totalPagar.toFixed(2)}`)
    }
}

restaurante.fazerPedido("sopa")
restaurante.fazerPedido("coxinha", 2)
restaurante.fazerPedido("coxinha", 2)
restaurante.fazerPedido("coxinha", 4)
restaurante.editarPedido("coxinha", 2)
restaurante.editarPedido("coxinha", 2)
restaurante.editarPedido("coxinha", 2)
restaurante.editarPedido("coxinha", 2)

restaurante.fazerPedido("pastel",5)
restaurante.fazerPedido("suco",5)
restaurante.fazerPedido("coxinha",10)
restaurante.resumoPedido()
