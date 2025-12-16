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



const contaBancaria={
    saldo:0,

    //transação, valor, data
    historico:[],
    

    registrarHistorico:function(tipo, valor, data){
        this.historico.push({tipo:tipo, valor:valor, data:data})
    },

    separarLinha:function(){
        console.log("------------------------")
    },

    
    depositar:function(valor){
        let data=new Date
        if(valor<=0){
            console.log("ERRO - Digite um valor Válido")
            this.separarLinha()
            return
        }

        this.saldo+=valor
        console.log(`Depósito de R$${valor} Realizado com Sucesso!`)
        console.log(`Saldo Atual: R$${this.saldo}`)
        this.registrarHistorico("Depósito", valor, data.toLocaleString())

        this.separarLinha()
    }, 


    sacar:function(valor){
        let data=new Date

        if(valor>this.saldo){
            console.log("ERRO - Saldo insuficiente")
            console.log(`Solicitação: R$${valor} - Saldo Disponível: R$${this.saldo}`)
            this.separarLinha()
            return
        }   
        
        this.saldo-=valor
        console.log(`Saque de R$${valor} Realizado com Sucesso!`)
        console.log(`Saldo Atual: R$${this.saldo}`)
        this.registrarHistorico("Saque", valor, data.toLocaleString())
        this.separarLinha()


    },

    extratoCompleto:function(){
        console.log("Extrato Completo")
        this.historico.forEach((el)=>{
            console.log(`Transação: ${el.tipo} - Valor: R$${el.valor} - Data: ${el.data}`)
        })

        console.log(`Saldo Atual: R$${this.saldo}`)

        this.separarLinha()
    }
}

contaBancaria.depositar(10)
contaBancaria.depositar(10)
contaBancaria.sacar(5)
contaBancaria.sacar(15)
contaBancaria.sacar(15)

contaBancaria.extratoCompleto()