
// 🔹 3. Carrinho de compras avançado
// Crie um objeto carrinho que armazene produtos como objetos {nome, preco, quantidade}.
// Adicione métodos para:
// adicionarProduto(nome, preco, quantidade)
// removerProduto(nome)
// calcularTotal() (somar todos os preços * quantidades).

let carrinho = {
    produtos: [
        { nome: "televião", preco: 150, quantidade: 2 },
        { nome: "computador", preco: 250, quantidade: 5 },
        { nome: "geladeira", preco: 400, quantidade: 3 }
    ],

    add_produto: function (nom, prec, quant) {
        let item = this.produtos.find(p => p.nome === nom)

        if (item) {
            item.quantidade += quant
        } else {
            this.produtos.push({ nome: nom, preco: prec, quantidade: quant })
        }
    },

    remov_produto: function (nom, quant) {
        let item = this.produtos.find(p => p.nome === nom)
        if (!item) {
            console.log(`item ${nom} não consta em estoque`)
            return
        }

        if (quant > item.quantidade) {
            console.log(`Estoque insuficiente - ${nom}, quantidade${item.quantidade} `)
            return
        }

        item.quantidade -= quant

        if (item.quantidade === 0) {
            this.produtos = this.produtos.filter(p => p.nome !== nom)
            console.log(`item ${nom} esgotado e removido do estoque`)
        }
    },

    calc_total: function () {        
        
    },

    ver_carrinho: function () {
        this.produtos.forEach((p) => console.log(`nome: ${p.nome}, preço: ${p.preco}, quantidade: ${p.quantidade}`))
    }


}

carrinho.add_produto("cafeteira", 80, 5)
carrinho.add_produto("geladeira", 0, 5)
carrinho.remov_produto("geladeira", 3)
carrinho.calc_total()
























// 🔹 4. Jogo de adivinhação com objeto
// Crie um objeto jogo com:
// Uma propriedade numeroSecreto (gerado aleatoriamente entre 1 e 10).
// Um método adivinhar(numero) que retorna:
// "Acertou!" se for igual.
// "Muito alto" ou "Muito baixo" caso contrário.



// 🔹 5. Cadastro de alunos
// Crie um objeto escola que armazena alunos em um array, cada aluno sendo {nome, notas: []}.
// Métodos:
// adicionarAluno(nome)
// adicionarNota(nome, nota)
// calcularMedia(nome)