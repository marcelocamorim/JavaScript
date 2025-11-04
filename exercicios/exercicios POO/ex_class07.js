// 🔒 PARTE 3 — Encapsulamento e Controle
// 🔹 6. Classe ContaBancaria
// Crie uma classe ContaBancaria com:
// #saldo (privado, começa com 0)
// E métodos:
// depositar(valor)
// sacar(valor) (se houver saldo suficiente)
// verSaldo() → mostra o saldo atual
// 🧠 Desafio extra: registre todas as operações num array interno chamado historico.

class ContaBancaria{
    #saldo=0
    #historico=[]

    depositar(valor){
        let agora=new Date

        if(valor<0){
            console.log("Valor invalido")
            return
        }

        this.#saldo+= valor
        console.log(`Deposito de R$${valor} realizado com sucesso - Saldo atual: R$${this.#saldo}`)

        this.#historico.push({tipo: "Deposito", valor: valor, data: agora.toLocaleString("pt-br", {dateStyle:"short", timeStyle:"short"})})
        return this.#saldo
    }

    sacar(valor){
        let agora=new Date

        if(valor>this.#saldo){
            console.log(`Saldo insuficiente para essa transação - Saldo ${this.#saldo}`)
            return
        }

        this.#saldo -= valor
        console.log(`Saque de R$${valor} realizado com sucesso - Saldo atual: R$${this.#saldo}`)

        this.#historico.push({tipo: "Saque", valor: valor, data: agora.toLocaleString("pt-br", {dateStyle:"short", timeStyle:"short"})})
        return this.#saldo
    }

    verSaldo(){
        console.log(`Saldo Disponível em conta: ${this.#saldo}`)
        return this.#saldo
    }

    verHistorico(){
        console.log("Histórico de transações:")
        this.#historico.forEach((el)=>{
            console.log(`Operação: ${el.tipo} - Valor: ${el.valor} - Data: ${el.data}`)
        })
        console.log(`Saldo atual: ${this.#saldo}`)
    }
}

const conta1 = new ContaBancaria
conta1.depositar(100)
conta1.sacar(35)
conta1.verSaldo()
conta1.verHistorico()

