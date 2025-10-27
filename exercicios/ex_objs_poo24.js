// 🧠 Conceito Rápido
// O padrão Singleton garante que só exista uma única instância de uma classe durante toda a execução do programa.
// Em vez de criar vários objetos, o Singleton reutiliza o mesmo objeto sempre que for chamado.

// Exercícios — Padrão Singleton (nível intermediário → avançando)
// Exercício 1 – Configuração do Sistema
// Crie uma classe Configuracoes que contenha:
// idioma
// tema
// modoNoturno
// A ideia é que só exista uma configuração global em toda a aplicação.
// Implemente o padrão Singleton:
// Se o objeto já existir, ele deve retornar a mesma instância.
// Caso contrário, cria uma nova.
// Teste criando duas variáveis diferentes:
// const c1 = new Configuracoes()
// const c2 = new Configuracoes()
// Elas devem apontar para o mesmo objeto (c1 === c2 deve ser true).

class Configuracoes{
    constructor(){
        if(Configuracoes.instancia){
            return Configuracoes.instancia
        }
        this.idioma="pt-br"
        this.tema="claro"
        this.modoNoturno=false

        Configuracoes.instancia = this
    }
}

const c1 = new Configuracoes()
const c2 = new Configuracoes()
c2.tema="escuro"
c2.modoNoturno=true

console.log(c1)
console.log(c2)
console.log(c1===c2)