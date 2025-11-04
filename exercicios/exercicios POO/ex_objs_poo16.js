// Exercício 2 – Herança e Limite

// Crie uma classe Funcionario com:

// nome, cargo e salário

// método aumentarSalario(percentual)

// Depois crie duas subclasses:

// Gerente (aumenta o salário com um bônus fixo de +10%)

// Estagiario (não pode receber aumento acima de 5%)

// Teste os três tipos e veja a diferença.

class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    aumentarSalario(percentual) {
        let calculoAumento = percentual / 100 * this.salario
        let salarioAumentado = this.salario += calculoAumento
        console.log(`Salario aumentado em ${percentual}% - Novo Salario: ${salarioAumentado}`)
    }
}

class Gerente extends Funcionario {
    constructor(nome,salario){
        super(nome, "Gerente", salario)
    }

    aumentarSalario(percentual){
        let bonus=10
        let total=percentual+bonus
        console.log(`Salario aumentado em ${total}% - ${percentual}% + ${bonus}%(Bonus de gerente)`)        
        super.aumentarSalario(total)

    }

}

class Estagiario extends Funcionario{
    constructor(nome,salario){
        super(nome, "Estagiario", salario)
    }
    aumentarSalario(percentual){
        if(percentual>5){
            console.log(`Funcionario: ${this.nome} não autorizado a receber aumento superior a 5%`)
            return
        }

        super.aumentarSalario(percentual)
    }
}

const funcionario1 = new Funcionario("joão", "atendente", 1000)
const gerente1 = new Gerente("Maria", 2000)
const estagiario1 = new Estagiario("vitoria", 800)

funcionario1.aumentarSalario(10)

gerente1.aumentarSalario(10)

console.log(estagiario1)
estagiario1.aumentarSalario(4)