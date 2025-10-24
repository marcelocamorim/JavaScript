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


class Prato{
    constructor(nome, preco){
        this.nome=nome
        this.preco=preco
    }
}

class Pedido{
    constructor(prato, quantidade){
        this.prato=prato
        this.quantidade=quantidade        
    }

    subtotal(){
        return this.prato.preco * this.quantidade
    }
}

class Mesa{
    constructor(){        
        this.clientes=[]
        this.pedidos=[]
    }

    registrarCliente(clienteNome){
        this.clientes.push(clienteNome)
    }

    fazerPedido(clienteNome, prato, quantidade){
        const pedido=new Pedido(prato, quantidade)
        this.pedidos.push(clienteNome, pedido)
    }
}


class Restaurante{
    constructor(){
        this.mesas=[]
    }

    

    registrarMesa(mesa){
        this.mesas.push(mesa)
    }

    mesasInfo(){
        this.mesas.forEach((el,i)=>{
            if(el.clientes.length){
                console.log(`Mesa ${i+1} Ocupada`)
                console.log(`${el.clientes.length} - Clientes registrados:`)
                console.log(`${el.clientes}`)
                console.log(`---------------------`)

            }else{
                console.log(`Mesa ${i+1} Livre`)
            }
        })
    }
}




const prato1=new Prato("macarrão", 80)
const prato2=new Prato("bife acebolado", 50)
const prato3=new Prato("strogonof", 120)
const prato4=new Prato("salada", 45)

const mesa1= new Mesa()
const mesa2= new Mesa()
const mesa3= new Mesa()
const mesa4= new Mesa()

const restaurante= new Restaurante()
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


// console.log(mesa1)
// console.log(mesa1.pedidos)

restaurante.mesasInfo()