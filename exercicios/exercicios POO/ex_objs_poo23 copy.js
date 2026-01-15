// Exercício 4 – Sistema de Restaurante
// Crie as classes:
// Prato → nome, preco
// Pedido → cliente, itens (array)
// Restaurante → nome, pedidos (array)

// Métodos:
// fazerPedido(pedido) → adiciona o pedido à lista
// mostrarPedidos() → lista todos os pedidos e totais
// calcularFaturamento() → soma o total de todos os pedidos
// No Pedido, crie um método calcularTotal() que multiplica o preço de cada prato pela quantidade.

// Desafio extra:
// Permita adicionar e remover itens do pedido antes de fechar.

class Prato {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}

class Pedido {
    constructor(cliente) {
        this.cliente = cliente
        this.itens = []
    }
 

    adicionarItens(prato, quanti) {
        const itemExistente = this.itens.find(i => i.nome === prato.nome)
        const subTotal = prato.preco * quanti

        if (itemExistente) {
            itemExistente.quantidade += quanti
            itemExistente.valor+= subTotal
            console.log(`Item "${itemExistente.nome}" Atualizado - "+${quanti}"`)
            return
        }

        prato.quantidade = quanti
        prato.valor=subTotal
        this.itens.push(prato)
        console.log(`Item "${prato.nome}" x${quanti} Adicionado Com sucesso!`)
    }

    removerItens(nomePrato,quanti){
        const itemExistente=this.itens.find(i=>i.nome===nomePrato)    
        const subTotal=itemExistente.preco * quanti

        if(!itemExistente){
            console.log(`ERRO - Item "${nomePrato}" não consta no pedido `)
            return
        }
        if(quanti<=0){
            console.log(`ERRO ao remover ${nomePrato} - Digite uma quantidade Válida `)
            return
        }

        if(quanti<itemExistente.quantidade){
            itemExistente.quantidade-=quanti
            itemExistente.valor-=subTotal
            console.log(`Item "${nomePrato}" Removido "-${quanti}"`)
        }

        if(quanti>itemExistente.quantidade){
            console.log(`ERRO - Quantidade solicitada Excede a Real - Itens no pedido:${itemExistente.quantidade}`)
        }

        if(quanti===itemExistente.quantidade || itemExistente.quantidade===0){
            this.itens=this.itens.filter(i=>i.nome!==nomePrato)
            console.log(`Item "${nomePrato}" Removido do Pedido!`)
        }

    }
}

class Restaurante {
    constructor(nome) {
        this.nome = nome
        this.pedidos = []
        this.mesas=[]
    }

    

}

const pizza = new Prato("pizza", 80)
const salada = new Prato("salada", 15)
const humburguer = new Prato("humburguer", 45)
const fritas = new Prato("fritas", 20)
const suco = new Prato("suco", 8)

const pedido1 = new Pedido("joão")
pedido1.adicionarItens(pizza, 2)
pedido1.adicionarItens(pizza, 2)
pedido1.removerItens("pizza",1)
pedido1.removerItens("pizza",1)
pedido1.removerItens("pizza",2)


console.log(pedido1.itens)