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




let conta = {
    saldo: 0,
    historico: [],
    

    depositar: function (valor) {
        let agora=new Date
        this.saldo += valor
        this.historico.push({ tipo: "Depósito", valor: valor, data: agora.toLocaleString("pt-br", {dateStyle: "short", timeStyle: "short"}) })
        console.log(`Deposito de ${valor} Realizado com Sucesso - Saldo atual ${this.saldo}`)

    },

    sacar: function (valor) {
        if (this.saldo === 0 || valor > this.saldo) {
            console.log(`Saldo insuficiente para essa transação - Saldo em conta ${this.saldo}`)
            return
        }
        let agora=new Date
        this.saldo -= valor
        this.historico.push({ tipo: "Saque", valor: valor, data: agora.toLocaleString("pt-br", {dateStyle: "short", timeStyle: "short"}) })
        console.log(`Saque de ${valor} Realizado com Sucesso - Saldo atual: ${this.saldo}`)

    },

    exibirExtrato: function () {
        console.log(`Histótico de transações:`)
        this.historico.forEach((el)=>{
            console.log(`Operação: ${el.tipo} - Valor: ${el.valor} - Data: ${el.data}`)
        })
        console.log(`Saldo Atual: ${this.saldo}`)
    }
}




conta.depositar(100)
conta.sacar(20)
conta.exibirExtrato()

