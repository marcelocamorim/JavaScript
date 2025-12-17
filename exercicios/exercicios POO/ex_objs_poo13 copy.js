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

    fazerPedido:function(prato,quanti){
        const pratoExistente=this.pedidos.find(p=>p.nome===prato)

        if(!pratoExistente){
            this.pedidos.push({nome:prato, quantidade:quanti})
            console.log(`Pedido Registrado com Sucesso!`)
            return
        }else{
            pratoExistente.quantidade += quanti
            return
        }        
    },

    listarPedido:function(){
        this.pedidos.forEach((el)=>{
            console.log(`Prato: ${el.nome} - Quantidade: ${el.quantidade}`)
        })
    }
}

restaurante.fazerPedido("pizza",2)
restaurante.fazerPedido("pizza",2)

restaurante.listarPedido()