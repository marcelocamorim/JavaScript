// 🔹 3. Simulador de conta bancária com histórico
// Crie um objeto conta com:
// saldo: 0,
// historico: []
// E métodos:
// depositar(valor) → soma ao saldo e adiciona ao histórico.
// sacar(valor) → subtrai do saldo se houver saldo suficiente.
// exibirExtrato() → mostra todas as operações com tipo e valor.
// 🧠 Desafio: registre cada operação como um objeto:
// { tipo: "depósito", valor: 100, data: "2025-10-07" }



const conta = {
    saldo: 0,
    historico: [
        //operação,valor,data
    ],

    separar: function () {
        console.log('----------------------------')
    },

    depositar: function (valor) {
        let data = new Date().toLocaleString('pt-br', { dateStyle: 'short', timeStyle: 'short' })
        if (valor <= 0) {
            console.log(`ERRO - valor irregular para essa transação`);
            this.separar()
            return
        }

        this.saldo += valor
        this.historico.push({ operacao: "deposito", valor: valor, data: data })
        console.log(`Depósito de "R$${valor}" realizado com sucesso!`)
        console.log(`Saldo atual R$${this.saldo}`)
        this.separar()
    },

    sacar: function (valor) {
        let data = new Date().toLocaleString('pt-br', { dateStyle: 'short', timeStyle: 'short' })

        if (valor <= 0) {
            console.log(`ERRO - valor irregular para essa transação`);
            this.separar()
            return

        } else if (valor > this.saldo || this.saldo === 0) {
            console.log(`ERRO - Saldo insuficiente para essa transação`);
            console.log(`Saldo atual R$${this.saldo}`)
            this.separar()
            return
        }

        this.saldo -= valor
        this.historico.push({ operacao: "saque", valor: valor, data: data })
        console.log(`Saque de "R$${valor}" realizado com sucesso!`)
        console.log(`Saldo atual R$${this.saldo}`)
        this.separar()

    },

    exibirExtrato:function(){
        console.log(`Extrato detalhado`)
        this.historico.forEach(el => {
            console.log(`Operação: ${el.operacao} - Valor:R$${el.valor} - Data: ${el.data} `)
        });
    }
}


conta.depositar(0)
conta.depositar(100)

conta.sacar(0)
conta.sacar(-10)
conta.sacar(100)
conta.sacar(100)
conta.exibirExtrato()