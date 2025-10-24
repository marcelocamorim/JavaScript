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
    constructor(prato, quantidade) {
        this.prato = prato
        this.quantidade = quantidade
    }

    subtotal() {
        return this.prato.preco * this.quantidade
    }
}

class Mesa {
    constructor() {
        this.clientes = []
        this.pedidos = []
    }

    registrarCliente(clienteNome) {
        this.clientes.push(clienteNome)
    }

    fazerPedido(clienteNome, prato, quantidade) {
        const pedido = new Pedido(prato, quantidade)
        this.pedidos.push({ cliente: clienteNome, pedido })
    }

    fecharConta() {
        console.log(`Resumo do pedido`)
        this.pedidos.forEach((el) => {
            console.log(`Cliente: ${el.cliente} - Prato: ${el.pedido.prato.nome} - Preço: R$${el.pedido.prato.preco} - Quantidade: ${el.pedido.quantidade} - Subtotal: ${el.pedido.subtotal()}`)
            console.log("-----------------------------------------------------")

        })
        const total = this.pedidos.reduce((acc, item) => acc + (item.pedido.subtotal()), 0)
        console.log(`Total a Pagar: R$${total}`)
        return total
    }
}


class Restaurante {
    constructor() {
        this.mesas = []
    }

    registrarMesa(mesa) {
        this.mesas.push(mesa)
    }

    mesasInfo() {
        this.mesas.forEach((el, i) => {
            if (el.clientes.length) {
                console.log(`Mesa ${i + 1} Ocupada`)
                console.log(`${el.clientes.length} - Clientes registrados:`)
                console.log(`${el.clientes}`)
                console.log(`---------------------`)

            } else {
                console.log(`Mesa ${i + 1} Livre`)
            }
        })
    }   

    receberPagamento(mesa) {
        let pagamentoIndividual = true
        let pagamentoUnico = false
        let dividirIgualmente = false

        if (pagamentoIndividual) {
            this.mesas.forEach((el) => {
                el.pedidos.forEach((el2) => {
                    console.log(`Cliente: ${el2.cliente} - Pagar R$${el2.pedido.subtotal()}`)
                })
            })
            return

        } else if (pagamentoUnico) {
            mesa.fecharConta()
            return

        } else if (dividirIgualmente) {
            let quantidadeClientes = mesa.clientes.length
            let total = mesa.fecharConta()
            let totalDividido = total / quantidadeClientes

            console.log(`Valor a Pagar: ${totalDividido.toFixed(2)} em 4x`)
        }


    }
}


const prato1 = new Prato("macarrão", 80)
const prato2 = new Prato("bife acebolado", 50)
const prato3 = new Prato("strogonof", 120)
const prato4 = new Prato("salada", 45)

const mesa1 = new Mesa()
const mesa2 = new Mesa()
const mesa3 = new Mesa()
const mesa4 = new Mesa()

const restaurante = new Restaurante()
restaurante.registrarMesa(mesa1)
restaurante.registrarMesa(mesa2)
restaurante.registrarMesa(mesa3)
restaurante.registrarMesa(mesa4)

mesa1.registrarCliente("joão")
mesa1.registrarCliente("maria")
mesa1.registrarCliente("carlos")
mesa1.registrarCliente("vitória")


mesa1.fazerPedido("joão", prato1, 1)
mesa1.fazerPedido("carlos", prato2, 1)
mesa1.fazerPedido("maria", prato3, 1)
mesa1.fazerPedido("vitória", prato4, 1)


// console.log(mesa1.pedidos)

// restaurante.mesasInfo()
//mesa1.fecharConta()
restaurante.receberPagamento(mesa1)
