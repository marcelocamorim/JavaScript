// 🚀 Exercícios — Padrão Singleton (nível intermediário → avançando)
// Exercício 2 – Conexão com Banco de Dados

// Crie uma classe ConexaoBanco que simula uma conexão com um banco de dados.
// Ela deve ter uma propriedade status (“conectado” ou “desconectado”).
// O método conectar() deve mudar o status para “conectado”.
// O método desconectar() deve mudar o status para “desconectado”.

// Implemente o Singleton de modo que:
// Sempre que alguém criar new ConexaoBanco(), retorne a mesma instância.
// Teste criando várias conexões e veja se todas compartilham o mesmo estado.

class ConexaoBanco{
    constructor(){
        if(ConexaoBanco.instancia){
            return ConexaoBanco.instancia
        }

        this.status=false
        ConexaoBanco.instancia=this
    }

    infoStatus(){
        let status=this.status?"Conectado":"Desconectado"
        console.log(`Status da Conexão: ${status}`)
    }

    conectar(){
        this.status=true
        this.infoStatus()
    }

    desconectar(){
        this.status=false
        this.infoStatus()
    }


}
const con1 = new ConexaoBanco()
const con2 = new ConexaoBanco()
const con3 = new ConexaoBanco()


con1.conectar()
con1.desconectar()


con2.conectar()
con3.desconectar()

console.log(con1)
console.log(con2)
console.log(con3)

console.log(con1===con3)


